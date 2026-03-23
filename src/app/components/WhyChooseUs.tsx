import { Clock, MessageSquare, Award, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Greitas aptarnavimas",
    description: "Paprastos paslaugos – tą pačią dieną. Sudėtingesni darbai – per 1-2 dienas. Lankstus darbo grafikas ir operatyvi registracija.",
  },
  {
    icon: MessageSquare,
    title: "Aiški komunikacija",
    description: "Viską paaiškinsime paprastai ir suprantamai. Kaina suderinama prieš pradedant darbus. Jokių netikėtumų ar paslėptų mokesčių.",
  },
  {
    icon: Award,
    title: "Kokybiškos detalės",
    description: "Naudojame tik patikrintų tiekėjų detales. Turime ilgalaikius partnerius. Teikiame garantiją atliekamam darbui.",
  },
  {
    icon: Users,
    title: "Patyrę meistrai",
    description: "Mūsų komanda dirba automobilių remonto srityje daugiau nei 15 metų. Nuolat dalinamės patirtimi ir mokomės naujovių.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-[#f9f9f9] to-white">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 leading-tight" style={{ fontWeight: 700 }}>
            Kodėl klientai renkasi mus?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Sąžiningumas, kokybė ir profesionalumas – tai mūsų prioritetai
          </p>
        </div>

        {/* Redesigned 2-column elegant layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-border hover:border-[#b91c1c] transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2.5 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-lg">
                    <benefit.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-base leading-snug" style={{ fontWeight: 700 }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}