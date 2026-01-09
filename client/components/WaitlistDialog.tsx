import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WaitlistDialog({
  open,
  onOpenChange,
}: WaitlistDialogProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [dialogTop, setDialogTop] = useState<number | null>(null);
  const [maxDialogHeight, setMaxDialogHeight] = useState<number | null>(null);
  const dialogContentRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Handle keyboard open/close on mobile and detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle keyboard open/close on mobile
  useEffect(() => {
    if (!open || !isMobile) {
      setKeyboardOffset(0);
      return;
    }

    let initialViewportHeight: number;
    let initialWindowHeight: number;
    
    // Capture initial heights after a short delay to ensure dialog is rendered
    const captureInitialHeights = () => {
      initialViewportHeight = window.visualViewport?.height || window.innerHeight;
      initialWindowHeight = window.innerHeight;
    };
    
    // Capture after dialog opens
    setTimeout(captureInitialHeights, 100);

    const handleViewportChange = () => {
      if (!isMobile) {
        setKeyboardOffset(0);
        return;
      }

      const currentViewportHeight = window.visualViewport?.height || window.innerHeight;
      const currentWindowHeight = window.innerHeight;
      
      // Calculate keyboard height
      const viewportDiff = (initialViewportHeight || currentViewportHeight) - currentViewportHeight;
      const windowDiff = (initialWindowHeight || currentWindowHeight) - currentWindowHeight;
      
      // Use the larger difference to detect keyboard
      const keyboardHeight = Math.max(viewportDiff, windowDiff);
      
      if (keyboardHeight > 100) {
        // Keyboard is open - move dialog up
        setKeyboardOffset(keyboardHeight);
        // Calculate top position - position it lower on screen (around 25% from top)
        const visibleHeight = window.visualViewport?.height || window.innerHeight;
        setDialogTop(Math.max(40, visibleHeight * 0.25));
        setMaxDialogHeight(visibleHeight * 0.65);
      } else {
        // Keyboard is closed
        setKeyboardOffset(0);
        setDialogTop(null);
        setMaxDialogHeight(null);
      }
    };

    // Use Visual Viewport API if available (better for mobile keyboards)
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleViewportChange);
    }
    
    // Also listen to window resize as fallback
    window.addEventListener("resize", handleViewportChange);
    
    // Listen to input focus/blur events
    const handleFocus = () => {
      // Delay to allow keyboard to appear
      setTimeout(() => {
        captureInitialHeights();
        handleViewportChange();
      }, 300);
    };
    
    const handleBlur = () => {
      setTimeout(() => {
        setKeyboardOffset(0);
        setDialogTop(null);
        setMaxDialogHeight(null);
      }, 200);
    };
    
    // Get input element after dialog is rendered
    const setupInputListeners = () => {
      const input = dialogContentRef.current?.querySelector('input');
      if (input) {
        input.addEventListener("focus", handleFocus);
        input.addEventListener("blur", handleBlur);
      }
    };
    
    // Setup listeners after a short delay to ensure DOM is ready
    setTimeout(setupInputListeners, 200);

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleViewportChange);
      }
      window.removeEventListener("resize", handleViewportChange);
    };
  }, [open, isMobile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsSubmitting(false);
    onOpenChange(false);
    setEmail("");

    // Show success toast with green styling
    const toastResult = toast({
      description: "You have been added to the waitlist",
      className: "bg-green-500 !text-white border-green-600 [&_*]:!text-white rounded-xl !py-3 !space-x-2",
    });

    // Auto-dismiss after 1 second
    setTimeout(() => {
      toastResult.dismiss();
    }, 1000);
  };

  const handleCancel = () => {
    onOpenChange(false);
    setEmail("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        ref={dialogContentRef}
        className={`max-w-[425px] w-full z-[100] ${
          isMobile
            ? `left-1/2 rounded-t-2xl rounded-b-none data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom`
            : "left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 rounded-lg data-[state=open]:slide-in-from-top-[48%] data-[state=closed]:slide-out-to-top-[48%]"
        }`}
        style={{
          ...(isMobile && keyboardOffset > 0 && dialogTop !== null
            ? {
                // When keyboard is open, position from top of visible viewport
                top: `${dialogTop}px`,
                bottom: "auto",
                transform: "translateX(-50%)",
                transition: "top 0.3s ease-out, transform 0.3s ease-out",
                position: "fixed",
                left: "50%",
                ...(maxDialogHeight !== null && { maxHeight: `${maxDialogHeight}px`, overflowY: "auto" as const }),
              }
            : isMobile
            ? {
                bottom: "0",
                top: "auto",
                transform: "translateX(-50%)",
                position: "fixed",
                left: "50%",
              }
            : {}),
        }}
      >
        <DialogHeader>
          <DialogTitle>Join the Waitlist</DialogTitle>
          <DialogDescription>
            Enter your email address to join our waitlist and be notified when we launch.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !email}
              className="bg-gradient-to-r from-[#A4B0F5] via-[#3526A6] to-[#E6F149] text-white hover:opacity-90"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

