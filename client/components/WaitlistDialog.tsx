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
  const dialogContentRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Handle keyboard open/close on mobile
  useEffect(() => {
    if (!open) return;

    const isMobile = window.innerWidth < 640; // sm breakpoint

    const handleViewportChange = () => {
      // Only handle on mobile
      if (!isMobile) {
        setKeyboardOffset(0);
        return;
      }

      if (window.visualViewport) {
        const viewportHeight = window.visualViewport.height;
        const windowHeight = window.innerHeight;
        const offset = windowHeight - viewportHeight;
        setKeyboardOffset(offset > 0 ? offset : 0);
      }
    };

    // Use Visual Viewport API if available (better for mobile keyboards)
    if (window.visualViewport && isMobile) {
      window.visualViewport.addEventListener("resize", handleViewportChange);
      window.visualViewport.addEventListener("scroll", handleViewportChange);
    } else if (isMobile) {
      // Fallback to window resize
      window.addEventListener("resize", handleViewportChange);
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleViewportChange);
        window.visualViewport.removeEventListener("scroll", handleViewportChange);
      } else {
        window.removeEventListener("resize", handleViewportChange);
      }
    };
  }, [open]);

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
        className="bottom-0 left-1/2 top-auto -translate-x-1/2 translate-y-0 rounded-t-2xl rounded-b-none max-w-[425px] w-full data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom sm:bottom-auto sm:left-[50%] sm:top-[50%] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:translate-y-0 sm:rounded-lg sm:rounded-b-lg sm:data-[state=open]:slide-in-from-top-[48%] sm:data-[state=closed]:slide-out-to-top-[48%]"
        style={{
          ...(keyboardOffset > 0
            ? {
                transform: `translateX(-50%) translateY(-${keyboardOffset}px)`,
                transition: "transform 0.2s ease-out",
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

