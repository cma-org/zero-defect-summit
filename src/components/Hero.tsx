import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-pharma.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-09T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToRegister = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-2 mb-6">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Premier Pharmaceutical Training Event
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Zero-Defect Tablet
            <br />
            <span className="text-accent">Manufacturing Workshop</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
            Master Compression & Coating Excellence
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-primary-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="text-accent" size={24} />
              <span className="text-lg">9-10 December 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-accent" size={24} />
              <span className="text-lg">Avasa Hotel, Hyderabad</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12">
            <p className="text-primary-foreground/80 mb-4 text-sm uppercase tracking-wider">
              Event Starts In
            </p>
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-md rounded-lg p-6 border border-primary-foreground/20"
                >
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-primary-foreground/80 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToRegister}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 font-semibold shadow-glow"
            >
              Register Now - ₹35,000 + GST
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 font-semibold"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-12 text-primary-foreground/70 text-sm">
            <p>Speaker: <span className="text-accent font-semibold">Fred A. Rowley</span> - President, Solid Dosage Training Inc., USA</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
