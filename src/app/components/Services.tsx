import { Wrench, Disc, Droplet, Cpu, Settings, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Važiuoklės remontas",
    description: "Amortizatorių, spyruoklių ir stabilizatorių keitimas",
  },
  {
    icon: Disc,
    title: "Stabdžių sistema",
    description: "Diskų, kaladėlių keitimas, sistemos diagnostika",
  },
  {
    icon: Droplet,
    title: "Tepalai ir filtrai",
    description: "Variklio alyvos, filtrai, techninė priežiūra",
  },
  {
    icon: Settings,
    title: "Variklio remontas",
    description: "Diagnostika, remontas, variklio dalių keitimas",
  },
  {
    icon: Cpu,
    title: "Kompiuterinė diagnostika",
    description: "Elektronikos tikrinimas, klaidų nuskaitymas",
  },
  {
    icon: ClipboardCheck,
    title: "Techninė apžiūra",
    description: "Paruošimas ir patikrinimas prieš TA",
  },
];

export function Services() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 leading-tight" style={{ fontWeight: 700 }}>
            Mūsų paslaugos
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Teikiame visas pagrindines auto remonto ir priežiūros paslaugas. Kokybiškos detalės ir profesionalus darbas.
          </p>
        </div>

        {/* Redesigned grid - more compact and elegant */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-border hover:border-[#b91c1c] rounded-lg p-5 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2.5 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-lg group-hover:from-[#b91c1c] group-hover:to-[#991b1b] transition-all duration-300">
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="mb-1.5 text-base leading-snug" style={{ fontWeight: 700 }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-8 md:mt-10">
          <p className="text-sm text-muted-foreground mb-1.5">
            Neradote reikiamos paslaugos?
          </p>
          <button
            onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })}
            className="text-[#b91c1c] hover:underline text-sm"
            style={{ fontWeight: 700 }}
          >
            Pasikonsultuokite su mumis →
          </button>
        </div>
      </div>
    </section>
  );
}