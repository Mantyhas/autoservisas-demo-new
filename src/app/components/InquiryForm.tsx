
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { CheckCircle2, Clock, Phone } from "lucide-react";

export function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    carModel: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast.error("Prašome užpildyti vardą ir telefono numerį");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mreoqabo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Užklausa išsiųsta! Susisieksime per 1-2 valandas.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          carModel: "",
          message: "",
        });
      } else {
        toast.error("Nepavyko išsiųsti užklausos. Bandykite dar kartą.");
      }
    } catch (error) {
      toast.error("Įvyko klaida siunčiant formą. Patikrinkite interneto ryšį.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="inquiry-form"
      className="py-12 md:py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
          }}
        />
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#b91c1c]/20 border border-[#b91c1c]/30 rounded-full px-3 py-1.5 mb-4">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#b91c1c]" />
            <span className="text-xs" style={{ fontWeight: 600 }}>
              Nemokama konsultacija ir kainų pasiūlymas
            </span>
          </div>

          <h2
            className="text-2xl md:text-3xl lg:text-4xl mb-3 leading-tight"
            style={{ fontWeight: 700 }}
          >
            Gaukite kainų pasiūlymą
            <br />
            <span className="text-[#b91c1c]">per kelias valandas</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Užpildykite formą ir mūsų specialistai susisieks su jumis telefonu.
            Aptarsime problemą ir pasiūlysime geriausią sprendimą.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 md:p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground text-sm">
                  Jūsų vardas <span className="text-[#b91c1c]">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Vardenis Pavardenis"
                  required
                  className="h-10 border-2 text-foreground placeholder:text-muted-foreground text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground text-sm">
                  Telefono numeris <span className="text-[#b91c1c]">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+370 600 00 000"
                  required
                  className="h-10 border-2 text-foreground placeholder:text-muted-foreground text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground text-sm">
                  El. paštas (neprivaloma)
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jusu@email.lt"
                  className="h-10 border-2 text-foreground placeholder:text-muted-foreground text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="carModel" className="text-foreground text-sm">
                  Automobilio modelis
                </Label>
                <Input
                  id="carModel"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleChange}
                  placeholder="pvz. VW Golf 2015"
                  className="h-10 border-2 text-foreground placeholder:text-muted-foreground text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground text-sm">
                Aprašykite problemą arba kokių paslaugų reikia
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Pavyzdžiui: Barška važiuoklė kairėje pusėje važiuojant per duobę, reikia diagnostikos..."
                rows={4}
                className="resize-none border-2 text-foreground placeholder:text-muted-foreground text-sm"
              />
            </div>

            <Button
              type="submit"
              size="default"
              disabled={isSubmitting}
              className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white h-11 shadow-lg hover:shadow-xl transition-all text-sm mt-5 disabled:opacity-70"
              style={{ fontWeight: 700 }}
            >
              {isSubmitting
                ? "Siunčiama..."
                : "Siųsti užklausą – gauti pasiūlymą"}
            </Button>

            <p className="text-xs text-muted-foreground text-center pt-1 leading-relaxed">
              Pateikę užklausą sutinkate, kad susisiektume su jumis telefonu
              arba el. paštu dėl paslaugų teikimo
            </p>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 mt-6 md:mt-8">
          <div className="flex items-center gap-3 md:justify-center">
            <div className="p-2 bg-[#b91c1c] rounded-lg flex-shrink-0">
              <Clock className="h-4 w-4" />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400 mb-0.5">Atsakymas</div>
              <div className="text-sm" style={{ fontWeight: 700 }}>
                Per 1-2 valandas
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 md:justify-center">
            <div className="p-2 bg-[#b91c1c] rounded-lg flex-shrink-0">
              <Phone className="h-4 w-4" />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400 mb-0.5">
                Arba skambinkite
              </div>
              <div className="text-sm" style={{ fontWeight: 700 }}>
                +370 600 00 000
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 md:justify-center">
            <div className="p-2 bg-[#b91c1c] rounded-lg flex-shrink-0">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400 mb-0.5">Nemokama</div>
              <div className="text-sm" style={{ fontWeight: 700 }}>
                Konsultacija
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}