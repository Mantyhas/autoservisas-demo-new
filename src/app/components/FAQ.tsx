import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Ar reikia registruotis iš anksto?",
    answer:
      "Rekomenduojame iš anksto paskambinti arba užpildyti užklausą. Taip galėsime paskirti jums patogų laiką ir meistrai tinkamai pasiruoš – numatys reikiamą laiką ir rezervuos detales, jei jos bus reikalingos.",
  },
  {
    question: "Kiek kainuoja diagnostika?",
    answer:
      "Kompiuterinė diagnostika kainuoja 25 EUR. Jei po diagnostikos nusprendžiate taisyti automobilį mūsų servise, diagnostikos kaina įskaitoma į bendrą remonto sąskaitą. Taip iš esmės diagnostika tampa nemokama.",
  },
  {
    question: "Kiek laiko užtrunka remontas?",
    answer:
      "Priklauso nuo darbo tipo. Tepalų keitimas – apie 30-40 min. Stabdžių kaladėlės – 1-2 val. Amortizatoriai – 2-4 val. Sudėtingesni darbai gali užtrukti dieną ar dvi. Tikslų laiką pasakysime po apžiūros.",
  },
  {
    question: "Ar man pasakysite tikslią kainą prieš pradedant darbus?",
    answer:
      "Taip, visada. Pirmiausia apžiūrime automobilį ir nustatome problemą. Po to pateikiame tikslią kainų sąmatą – už darbus ir detales. Pradedame tik tada, kai jūs patvirtinate kainą. Jokių netikėtumų.",
  },
];

export function FAQ() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-[#f9f9f9]">
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 leading-tight" style={{ fontWeight: 700 }}>
            Dažnai užduodami klausimai
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Atsakymai į populiariausius klausimus apie mūsų paslaugas
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-2 border-border rounded-lg px-5 md:px-6 data-[state=open]:border-[#b91c1c] data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 md:py-5">
                  <span className="text-sm md:text-base pr-4 leading-snug" style={{ fontWeight: 700 }}>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 md:pb-5 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional help - more compact */}
          <div className="text-center mt-8 md:mt-10 p-6 bg-white rounded-lg border-2 border-border">
            <h3 className="mb-2 text-base leading-snug" style={{ fontWeight: 700 }}>
              Turite kitų klausimų?
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Skambinkite arba rašykite – mielai atsakysime ir padėsime
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+37060000000"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#b91c1c] hover:bg-[#991b1b] text-white rounded-lg transition-colors text-sm"
                style={{ fontWeight: 700 }}
              >
                Skambinti dabar
              </a>
              <button
                onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white rounded-lg transition-colors text-sm"
                style={{ fontWeight: 700 }}
              >
                Užpildyti formą
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}