import { Phone, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const handleCallClick = () => {
    window.location.href = "tel:+37060000000";
  };

  const handleQuoteClick = () => {
    document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[550px] md:min-h-[600px] flex items-center bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a] text-white overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/90 to-[#1a1a1a]/75 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1770656505813-966b8ef8d363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBtZWNoYW5pYyUyMGdhcmFnZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM1NzQ3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Auto servisas"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-[#b91c1c]/20 border border-[#b91c1c]/30 rounded-full px-3 py-1.5 mb-5">
            <Award className="h-3.5 w-3.5 text-[#b91c1c]" />
            <span className="text-xs" style={{ fontWeight: 600 }}>Patikimas pasirinkimas jau 15+ metų</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight" style={{ fontWeight: 700 }}>
            Greitas ir kokybiškas<br />
            <span className="text-[#b91c1c]">auto remontas Vilniuje</span>
          </h1>
          
          <p className="text-sm md:text-base mb-6 text-gray-200 leading-relaxed max-w-xl">
            Profesionalūs automobilių remonto specialistai. Sutvarkome jūsų automobilį greitai, kokybiškai ir už sąžiningą kainą. <span style={{ fontWeight: 600 }}>Kaina aptariama iš anksto – be paslėptų mokesčių.</span>
          </p>

          {/* CTA Buttons - More compact */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button
              onClick={handleQuoteClick}
              size="default"
              className="bg-[#b91c1c] hover:bg-[#991b1b] text-white px-6 h-11 shadow-lg hover:shadow-xl transition-all text-sm"
              style={{ fontWeight: 700 }}
            >
              Užpildyti užklausą
            </Button>
            <Button
              onClick={handleCallClick}
              size="default"
              variant="outline"
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#1a1a1a] px-6 h-11 shadow-lg transition-all text-sm"
              style={{ fontWeight: 700 }}
            >
              <Phone className="mr-2 h-4 w-4" />
              +370 600 00 000
            </Button>
          </div>

          {/* Trust Points - Compact inline version */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#b91c1c] rounded-lg flex-shrink-0">
                <Clock className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-xs leading-tight" style={{ fontWeight: 700 }}>Remontas per 1-2 dienas</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#b91c1c] rounded-lg flex-shrink-0">
                <Shield className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-xs leading-tight" style={{ fontWeight: 700 }}>Kaina patvirtinama prieš darbą</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#b91c1c] rounded-lg flex-shrink-0">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-xs leading-tight" style={{ fontWeight: 700 }}>Atliekamų darbų garantija</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}