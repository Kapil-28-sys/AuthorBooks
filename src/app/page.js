import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NextSection from "./components/NextSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FooterSection from "./components/Footersection";
import MobileBottomNav from "./components/MobileBottomNav";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[1600px]">
        <Navbar />

        <div className="md:hidden px-3 pt-24 pb-24">
          <div className="mx-auto w-full max-w-[430px] space-y-3">
            <HeroSection />
            <NextSection />
            <ThirdSection />
            <FourthSection />
            <FooterSection />
          </div>
        </div>

        <div className="hidden md:block">
          <HeroSection />
          <NextSection />
          <ThirdSection />
          <FourthSection />
          <FooterSection />
        </div>

        <MobileBottomNav />
      </div>
    </main>
  );
}