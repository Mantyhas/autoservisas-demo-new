import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Tomas",
    location: "Vilnius",
    carModel: "VW Passat",
    rating: 5,
    text: "Važiuoklę sutvarkė per dieną, kaina tokia kokią ir sakė telefonu. Meistrai paaiškino ką keičia ir kodėl.",
  },
  {
    name: "Gintarė",
    location: "Vilnius",
    carModel: "Toyota Auris",
    rating: 5,
    text: "Prieš techninę apžiūrą viskas sutvarkyta per pusę dienos. Labai patiko, kad iškart pasakė tikslią kainą.",
  },
  {
    name: "Mindaugas",
    location: "Vilniaus r.",
    carModel: "Audi A4",
    rating: 5,
    text: "Jau antri metai čia tvarkausi automobilį. Visada susitvarko greitai ir kokybiškai. Meistrai žino ką daro.",
  },
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 leading-tight" style={{ fontWeight: 700 }}>
            Ką sako mūsų klientai
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Tikri atsiliepimai iš realių klientų
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#f9f9f9] to-white border border-border rounded-lg p-5 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 h-7 w-7 text-[#b91c1c]/10" />
              
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#b91c1c] text-[#b91c1c]" />
                ))}
              </div>
              
              <p className="text-sm text-foreground mb-4 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="pt-3 border-t border-border">
                <p className="mb-1 text-sm leading-snug" style={{ fontWeight: 700 }}>
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.location} • {testimonial.carModel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicator - more compact */}
        <div className="text-center mt-8 md:mt-10 p-5 bg-[#f9f9f9] rounded-lg max-w-2xl mx-auto border border-border">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#b91c1c] text-[#b91c1c]" />
              ))}
            </div>
            <span className="text-lg ml-1" style={{ fontWeight: 700 }}>5.0</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Vidutinis įvertinimas remiantis <span style={{ fontWeight: 600 }}>127+ klientų atsiliepimais</span>
          </p>
        </div>
      </div>
    </section>
  );
}