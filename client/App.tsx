import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<ComingSoon title="Blog" />} />
          <Route path="/jobs" element={<ComingSoon title="Jobs" />} />
          <Route path="/docs" element={<ComingSoon title="Docs" />} />
          <Route path="/status" element={<ComingSoon title="Status" />} />
          <Route path="/resources" element={<ComingSoon title="Resources" />} />
          <Route path="/privacy-policy" element={<ComingSoon title="Privacy Policy" />} />
          <Route path="/terms-of-service" element={<ComingSoon title="Terms of Service" />} />
          <Route path="/brand-assets" element={<ComingSoon title="Brand Assets" />} />
          <Route path="/forum" element={<ComingSoon title="Forum" />} />
          <Route path="/partnership-requests" element={<ComingSoon title="Partnership Requests" />} />
          <Route path="/security" element={<ComingSoon title="Security" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
