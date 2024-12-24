import { HeroSection } from "@/components/ui/hero-section";
import { FeaturedCategories } from "@/components/ui/featured-categories";
import { TopProfiles } from "@/components/ui/top-profiles";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="min-h-screen pt-[72px]">
      <Navbar />
      <main className="flex flex-col items-center px-4">
        <HeroSection />
        <FeaturedCategories />
        <TopProfiles />
      </main>
      <Footer />
    </div>
  );
}
