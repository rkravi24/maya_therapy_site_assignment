import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Faqs from "@/components/sections/Faqs";
import GetStarted from "@/components/sections/GetStarted";
import GroundedLife from "@/components/sections/GroundedLife";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import MySpecialties from "@/components/sections/MySpecialties";
import NotAlone from "@/components/sections/NotAlone";
import OurOffice from "@/components/sections/OurOffice";
import ProfessionalBackground from "@/components/sections/ProfessionalBackground";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <GroundedLife />
      <MySpecialties />
      <NotAlone />
      <Intro />
      <OurOffice />
      <Faqs />
      <ProfessionalBackground />
      <GetStarted />
      <Footer />
    </>
  );
}
