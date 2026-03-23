import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const handleCallClick = () => {
    window.location.href = "tel:+37060000000";
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm md:text-base" style={{ fontWeight: 700 }}>AS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-base leading-none" style={{ fontWeight: 700 }}>Auto Servisas</span>
              <span className="text-[10px] md:text-xs text-muted-foreground leading-none mt-0.5">Vilnius</span>
            </div>
          </div>
          
          {/* Phone CTA */}
          <Button
            onClick={handleCallClick}
            size="sm"
            className="bg-[#b91c1c] hover:bg-[#991b1b] text-white h-9 md:h-10 px-3 md:px-4 text-xs md:text-sm flex-shrink-0 gap-1.5"
          >
            <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span className="hidden sm:inline" style={{ fontWeight: 600 }}>+370 600 00 000</span>
            <span className="sm:hidden" style={{ fontWeight: 600 }}>Skambinti</span>
          </Button>
        </div>
      </div>
    </header>
  );
}