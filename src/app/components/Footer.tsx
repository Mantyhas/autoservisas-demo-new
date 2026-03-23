import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="w-full max-w-6xl mx-auto px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Company Info */}
          <div>
            <h3 className="mb-3 text-base md:text-lg" style={{ fontWeight: 600 }}>
              Auto Servisas
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Profesionalus automobilių remontas ir diagnostika Vilniuje. Jūsų patikimas partneris kelyje.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b91c1c] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b91c1c] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm md:text-base" style={{ fontWeight: 600 }}>
              Kontaktai
            </h4>
            <div className="space-y-2.5">
              <a
                href="tel:+37060000000"
                className="flex items-start gap-2.5 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+370 600 00 000</span>
              </a>
              <a
                href="mailto:info@autoservisas.lt"
                className="flex items-start gap-2.5 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@autoservisas.lt</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="mb-3 text-sm md:text-base" style={{ fontWeight: 600 }}>
              Adresas
            </h4>
            <div className="flex items-start gap-2.5 text-gray-400 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div className="leading-relaxed">
                <p>Pramonės g. 15</p>
                <p>LT-01234 Vilnius</p>
                <p>Lietuva</p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="mb-3 text-sm md:text-base" style={{ fontWeight: 600 }}>
              Darbo laikas
            </h4>
            <div className="flex items-start gap-2.5 text-gray-400 text-sm">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div className="space-y-1.5 text-sm leading-relaxed">
                <p>Pirmadienis - Penktadienis</p>
                <p className="text-white">8:00 - 18:00</p>
                <p className="mt-2">Šeštadienis</p>
                <p className="text-white">9:00 - 15:00</p>
                <p className="mt-2">Sekmadienis</p>
                <p className="text-white">Nedirbame</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder - more compact */}
        <div className="mt-8 md:mt-10 rounded-lg overflow-hidden bg-[#2d2d2d] h-40 md:h-48 flex items-center justify-center border border-gray-700">
          <div className="text-center px-4">
            <MapPin className="h-8 w-8 md:h-10 md:w-10 text-gray-600 mx-auto mb-2" />
            <p className="text-gray-500 text-sm">Žemėlapio vieta</p>
            <p className="text-gray-600 text-xs mt-1.5">Pramonės g. 15, Vilnius</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-10 pt-5 md:pt-6 border-t border-gray-800 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-xs md:text-sm">
              © 2026 Auto Servisas. Visos teisės saugomos.
            </p>
            <div className="flex gap-5 text-xs md:text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privatumo politika
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sąlygos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}