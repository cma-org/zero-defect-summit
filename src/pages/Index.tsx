import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speaker from "@/components/Speaker";
import Agenda from "@/components/Agenda";
import Registration from "@/components/Registration";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Speaker />
      <Agenda />
      <Registration />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
