import { FileText, Phone, Wrench, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Pateikiate užklausą",
    description: "Užpildykite trumpą formą arba tiesiog paskambinkite. Aprašykite problemą ir automobilio modelį.",
  },
  {
    number: "2",
    icon: Phone,
    title: "Susisiekiame su jumis",
    description: "Per 1-2 valandas perskambiname, aptariame problemą ir pasiūlome patogų vizito laiką.",
  },
  {
    number: "3",
    icon: Wrench,
    title: "Sutvarkome automobilį",
    description: "Atliekame diagnostiką, suderinę kainą pradedame darbus. Informuojame apie eigą.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 md:py-20 bg-[#f9f9f9]">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 leading-tight" style={{ fontWeight: 700 }}>
            Kaip viskas vyksta?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Paprastas ir skaidrus procesas nuo užklausos iki gatavo automobilio
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Arrow connector (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-12 left-[60%] w-[80%] justify-center items-center z-0">
                    <ArrowRight className="h-6 w-6 text-[#b91c1c]" />
                  </div>
                )}

                <div className="relative z-10 bg-white rounded-lg p-5 border border-border hover:border-[#b91c1c] transition-all duration-300 hover:shadow-lg">
                  {/* Step Number */}
                  <div className="absolute -top-2.5 -left-2.5 w-9 h-9 bg-gradient-to-br from-[#b91c1c] to-[#991b1b] rounded-lg flex items-center justify-center text-white shadow-md text-base" style={{ fontWeight: 700 }}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 pt-3">
                    <div className="inline-flex p-2.5 bg-gradient-to-br from-[#f9f9f9] to-[#f0f0f0] rounded-lg">
                      <step.icon className="h-5 w-5 text-[#1a1a1a]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-base leading-snug" style={{ fontWeight: 700 }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA below steps */}
          <div className="text-center mt-8 md:mt-10">
            <button
              onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#b91c1c] hover:bg-[#991b1b] text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
              style={{ fontWeight: 700 }}
            >
              Pradėti dabar
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}