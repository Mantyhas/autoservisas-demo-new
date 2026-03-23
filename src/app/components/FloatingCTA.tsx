import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.location.href = "tel:+37060000000";
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 animate-in fade-in slide-in-from-bottom-4">
      <Button
        onClick={handleClick}
        size="default"
        className="bg-[#b91c1c] hover:bg-[#991b1b] text-white h-11 md:h-12 px-4 md:px-6 shadow-2xl hover:shadow-3xl transition-all rounded-full text-sm"
        style={{ fontWeight: 700 }}
      >
        <Phone className="h-4 w-4 mr-2" />
        <span className="hidden sm:inline">Skambinti dabar</span>
        <span className="sm:hidden">Skambinti</span>
      </Button>
    </div>
  );
}