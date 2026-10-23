import { Code } from "@/components/Code";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Motto } from "@/components/Motto";
import { Pillars } from "@/components/Pillars";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-bg">
      <Header />
      <Hero />
      <Motto />
      <Mission />
      <Pillars />
      <Code />
      <Footer />
    </main>
  );
}
