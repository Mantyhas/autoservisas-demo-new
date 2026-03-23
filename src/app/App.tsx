import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { InquiryForm } from "./components/InquiryForm";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <InquiryForm />
      <FAQ />
      <Footer />
      <FloatingCTA />
      <Toaster />
    </div>
  );
}