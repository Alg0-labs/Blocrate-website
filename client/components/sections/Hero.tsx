import { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import JoinWaitlistButton from "@/components/JoinWaitlistButton";

const SPLINE_SCENE_URL =
  "https://prod.spline.design/rbpdd-OGKo1fHBAD/scene.splinecode";

export default function Hero() {
  const splineRef = useRef<Application | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onLoad = (spline: Application) => {
    splineRef.current = spline;
    
    // Disable camera controls to prevent zooming
    const app = spline as any;
    if (app.camera) {
      // Disable orbit controls if they exist
      if (app.camera.controls) {
        const controls = app.camera.controls;
        if (controls.enableZoom !== undefined) {
          controls.enableZoom = false;
        }
        if (controls.enablePan !== undefined) {
          controls.enablePan = false;
        }
      }
    }
    
    // Aggressively disable zoom through the application's event listeners
    // Wait a bit for the canvas to be rendered
    setTimeout(() => {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        // Safari performance optimizations for canvas
        const canvasStyle = (canvas as HTMLCanvasElement).style;
        canvasStyle.willChange = "transform";
        canvasStyle.transform = "translateZ(0)";
        canvasStyle.backfaceVisibility = "hidden";
        canvasStyle.webkitBackfaceVisibility = "hidden";
        canvasStyle.webkitTransform = "translateZ(0)";
        canvasStyle.isolation = "isolate";
        
        // Remove Spline watermark - check multiple times as it may be added dynamically
        const removeWatermark = () => {
          // Try various selectors for Spline watermark
          const selectors = [
            '[class*="spline-watermark"]',
            '[id*="spline-watermark"]',
            '[class*="SplineWatermark"]',
            '[id*="SplineWatermark"]',
            '[class*="watermark"]',
            'a[href*="spline"]',
          ];
          
          selectors.forEach((selector) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((el) => {
              const className = el.className?.toString() || '';
              const id = el.id || '';
              const href = (el as HTMLElement).getAttribute('href') || '';
              
              // Check if it's a Spline watermark
              if (
                (className.toLowerCase().includes('watermark') && className.toLowerCase().includes('spline')) ||
                (id.toLowerCase().includes('watermark') && id.toLowerCase().includes('spline')) ||
                (href.includes('spline') && (className.toLowerCase().includes('watermark') || id.toLowerCase().includes('watermark')))
              ) {
                (el as HTMLElement).style.display = "none";
                (el as HTMLElement).style.visibility = "hidden";
                (el as HTMLElement).style.opacity = "0";
                (el as HTMLElement).style.pointerEvents = "none";
                el.remove();
              }
            });
          });
        };
        
        // Remove immediately
        removeWatermark();
        
        // Check periodically in case watermark is added dynamically
        const watermarkInterval = setInterval(() => {
          removeWatermark();
        }, 500);
        
        // Clear interval after 10 seconds (watermark should be removed by then)
        setTimeout(() => {
          clearInterval(watermarkInterval);
        }, 10000);
        // Prevent ALL wheel events from reaching Spline canvas to prevent zoom
        // But allow them to bubble up for page scrolling
        const preventWheelOnCanvas = (e: WheelEvent) => {
          // Prevent the event from affecting the Spline canvas
          e.stopImmediatePropagation();
          // Only prevent default for zoom gestures
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            return false;
          }
          // For normal scrolling, don't prevent default - let it bubble for page scroll
          // But stop immediate propagation so Spline doesn't receive it
        };
        // Use capture phase to intercept before Spline receives it
        canvas.addEventListener('wheel', preventWheelOnCanvas, { passive: false, capture: true });
        // Also add in bubble phase as backup
        canvas.addEventListener('wheel', preventWheelOnCanvas, { passive: false });
        
        // Rely on CSS touchAction for touch handling - it allows scrolling but prevents zoom
        // Only add gesture event listeners for Safari (these don't interfere with scrolling)
        
        // Prevent gesture events (Safari) - these are critical for iOS Safari
        const preventGesture = (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          return false;
        };
        canvas.addEventListener('gesturestart', preventGesture, { passive: false, capture: true });
        canvas.addEventListener('gesturechange', preventGesture, { passive: false, capture: true });
        canvas.addEventListener('gestureend', preventGesture, { passive: false, capture: true });
        
        // Also add gesture listeners without capture
        canvas.addEventListener('gesturestart', preventGesture, { passive: false });
        canvas.addEventListener('gesturechange', preventGesture, { passive: false });
        canvas.addEventListener('gestureend', preventGesture, { passive: false });
      }
    }, 100);
  };

  useEffect(() => {
    // Handle mouse movement for desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (splineRef.current) {
        // Normalize mouse coordinates to -1 to 1 range
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        
        // Pass mouse position to Spline
        // This allows the Spline scene to react to cursor movement
        if (splineRef.current.setVariable) {
          splineRef.current.setVariable("mouseX", x);
          splineRef.current.setVariable("mouseY", y);
        }
      }
    };

    // Handle device orientation for mobile (gyroscope)
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (splineRef.current && e.beta !== null && e.gamma !== null) {
        // Normalize device orientation angles to -1 to 1 range
        // beta: front-back tilt (-180 to 180)
        // gamma: left-right tilt (-90 to 90)
        const x = Math.max(-1, Math.min(1, e.gamma / 45)); // Normalize gamma to -1 to 1
        const y = Math.max(-1, Math.min(1, e.beta / 90)); // Normalize beta to -1 to 1
        
        // Pass device orientation to Spline
        if (splineRef.current.setVariable) {
          splineRef.current.setVariable("mouseX", x);
          splineRef.current.setVariable("mouseY", y);
        }
      }
    };

    // Request permission for device orientation (iOS 13+)
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof (DeviceOrientationEvent as any).requestPermission === "function"
    ) {
      (DeviceOrientationEvent as any)
        .requestPermission()
        .then((response: string) => {
          if (response === "granted") {
            window.addEventListener("deviceorientation", handleDeviceOrientation);
          }
        })
        .catch(() => {
          // Permission denied or not supported
        });
    } else {
      // For Android and older iOS, add listener directly
      window.addEventListener("deviceorientation", handleDeviceOrientation);
    }

    // Add mouse move listener for desktop
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  // Prevent gesture events (Safari) on the container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventGesture = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    container.addEventListener('gesturestart', preventGesture as EventListener, { passive: false });
    container.addEventListener('gesturechange', preventGesture as EventListener, { passive: false });
    container.addEventListener('gestureend', preventGesture as EventListener, { passive: false });

    return () => {
      container.removeEventListener('gesturestart', preventGesture as EventListener);
      container.removeEventListener('gesturechange', preventGesture as EventListener);
      container.removeEventListener('gestureend', preventGesture as EventListener);
    };
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #0b0b0c 0%, #141318 25%, #1d1b2b 50%, #2b2670 75%, #1f1a5c 100%)",
        willChange: "transform",
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      {/* Full viewport hero area - powered by Spline animation */}
      <div className="relative w-full h-full">
        {/* Spline animation - visible on all breakpoints, fills available space */}
        <div
  ref={containerRef}
  className="
    absolute inset-0 z-0 pointer-events-auto overflow-hidden
    w-[200%] h-[200%] -left-[50%] -top-[80%]   /* compensate for scale */
    scale-[0.5] md:scale-105            /* 50% zoom out on mobile, 105% on desktop */
    md:w-full md:h-full md:left-0 md:top-[10%]
  "
  style={{
    transformOrigin: "center",
    touchAction: "pan-y pan-x",
    userSelect: "none",
    WebkitUserSelect: "none",
    WebkitTouchCallout: "none",
    WebkitTapHighlightColor: "transparent",
    WebkitTextSizeAdjust: "100%",
    // WebkitUserZoom: "none",
    willChange: "transform",
    isolation: "isolate",
  }}
>
  <Spline
    scene={SPLINE_SCENE_URL}
    onLoad={onLoad}
    style={{
      width: "100%",
      height: "100%",
      touchAction: "pan-y pan-x",
      willChange: "transform",
      isolation: "isolate",
    }}
  />
</div>



        {/* Content container with max-width for text alignment */}
        {/* pointer-events-none allows mouse events to pass through to Spline */}
        <div className="absolute inset-0 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-1 z-10 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center md:block">
            {/* Hero Text Overlays - hidden on mobile */}

            {/* TODO: replace with proper text */}

            {/* <div className="hidden md:block absolute left-[8%] top-[20%] max-w-[315px]">
              <h1 className="text-white text-[40px] font-semibold leading-[120%]">
                Private Credit Passports for DeFi
              </h1>
            </div>
            <div className="hidden md:block absolute right-8 top-[20%] max-w-[400px] text-right">
              <h1 className="text-white text-[48px] font-semibold leading-[120%]">
                Credit infrastructure for on-chain capital.
              </h1>
            </div> */}

            {/* Join Waitlist Button - centered horizontally at bottom on mobile, centered on desktop */}
            {/* pointer-events-auto re-enables pointer events for the button */}
            <div className="absolute bottom-8 left-4 right-4 flex justify-center items-center md:top-[85%] md:left-1/2 md:right-auto md:-translate-x-1/2 md:flex-none z-20 pointer-events-auto">
              <JoinWaitlistButton variant="with-logo" size="large" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
