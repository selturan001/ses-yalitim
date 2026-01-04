import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import InstallationGuide from "@/components/sections/InstallationGuide";
import ProductGrid from "@/components/shop/ProductGrid";
import RoomSelector from "@/components/interactive/RoomSelector";
import TechSpecs from "@/components/sections/TechSpecs";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Features />
      <ProductGrid />
      <InstallationGuide />
      <RoomSelector />
      <TechSpecs />
      <FAQ />
      <CTA />
    </main>
  );
}
