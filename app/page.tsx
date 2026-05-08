import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Pillars } from "@/components/Pillars";
import { Profile } from "@/components/Profile";
import { Mindset } from "@/components/Mindset";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink-950">
      <Header />
      <Hero />
      <About />
      <Pillars />
      <Profile />
      <Mindset />
      <CTA />
      <Footer />
    </main>
  );
}
