import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import IsopanelBudget from "@/components/IsopanelBudget";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
<IsopanelBudget />
      <Services />
      <Projects />
      <WhyUs />
      <Footer />
    </main>
  );
}
