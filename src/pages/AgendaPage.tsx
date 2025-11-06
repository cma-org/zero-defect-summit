import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Coffee, Utensils, Download, Calendar as CalendarIcon, Printer } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AgendaPage = () => {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");

  const day1Sessions = [
    { time: "09:00 - 09:30", title: "Registration & Welcome Coffee", icon: Coffee, duration: "30 Minutes" },
    { time: "09:30 - 11:00", title: "Fundamentals of Tablet Compression Technology", icon: Clock, duration: "1.5 Hours" },
    { time: "11:00 - 11:15", title: "Coffee Break", icon: Coffee, duration: "15 Minutes" },
    { time: "11:15 - 13:00", title: "Common Compression Defects & Root Cause Analysis", icon: Clock, duration: "1.75 Hours" },
    { time: "13:00 - 14:00", title: "Lunch Break", icon: Utensils, duration: "1 Hour" },
    { time: "14:00 - 15:30", title: "Tooling Selection & Optimization Strategies", icon: Clock, duration: "1.5 Hours" },
    { time: "15:30 - 15:45", title: "Afternoon Tea", icon: Coffee, duration: "15 Minutes" },
    { time: "15:45 - 17:30", title: "Hands-On Problem Solving & Case Studies", icon: Clock, duration: "1.75 Hours" },
  ];

  const day2Sessions = [
    { time: "09:00 - 09:30", title: "Day 1 Recap & Q&A", icon: Clock, duration: "30 Minutes" },
    { time: "09:30 - 11:00", title: "Coating Pan Technology & Process Parameters", icon: Clock, duration: "1.5 Hours" },
    { time: "11:00 - 11:15", title: "Coffee Break", icon: Coffee, duration: "15 Minutes" },
    { time: "11:15 - 13:00", title: "Coating Defects: Prevention & Solutions", icon: Clock, duration: "1.75 Hours" },
    { time: "13:00 - 14:00", title: "Lunch Break", icon: Utensils, duration: "1 Hour" },
    { time: "14:00 - 15:30", title: "Quality Control & In-Process Testing", icon: Clock, duration: "1.5 Hours" },
    { time: "15:30 - 15:45", title: "Afternoon Tea", icon: Coffee, duration: "15 Minutes" },
    { time: "15:45 - 17:00", title: "Best Practices & Equipment Maintenance", icon: Clock, duration: "1.25 Hours" },
    { time: "17:00 - 17:30", title: "Final Q&A & Certificate Distribution", icon: Clock, duration: "30 Minutes" },
  ];

  const sessions = activeDay === "day1" ? day1Sessions : day2Sessions;

  const handleAddToCalendar = () => {
    // ICS file generation logic would go here
    alert("Add to Calendar functionality - Coming Soon!");
  };

  const handlePrintAgenda = () => {
    window.print();
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Header with Gradient */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-8">
              AGENDA
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleAddToCalendar}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8"
              >
                <CalendarIcon className="mr-2" size={20} />
                ADD TO CALENDAR
              </Button>
              <Button
                onClick={handlePrintAgenda}
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-base px-8"
              >
                <Printer className="mr-2" size={20} />
                PRINT AGENDA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Info Banner */}
            <div className="bg-secondary border-l-4 border-accent p-4 rounded-lg mb-8 flex items-start gap-3">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent-foreground text-xs font-bold">i</span>
              </div>
              <div>
                <p className="text-foreground">
                  Date and time is shown in (UTC +05:30) Asia/Calcutta.
                </p>
              </div>
            </div>

            {/* Day Tabs */}
            <div className="border-b border-border mb-8">
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveDay("day1")}
                  className={`px-6 py-4 font-semibold transition-all relative ${
                    activeDay === "day1"
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div>
                    <div className="text-base">Day - 1</div>
                    <div className="text-xs">Thu, Dec 9, 2025</div>
                  </div>
                  {activeDay === "day1" && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent"></div>
                  )}
                </button>
                
                <button
                  onClick={() => setActiveDay("day2")}
                  className={`px-6 py-4 font-semibold transition-all relative ${
                    activeDay === "day2"
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div>
                    <div className="text-base">Day - 2</div>
                    <div className="text-xs">Fri, Dec 10, 2025</div>
                  </div>
                  {activeDay === "day2" && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent"></div>
                  )}
                </button>
              </div>
            </div>

            {/* Sessions List */}
            <div className="space-y-0">
              {sessions.map((session, index) => {
                const Icon = session.icon;
                const isBreak = session.icon === Coffee || session.icon === Utensils;
                
                return (
                  <div
                    key={index}
                    className={`border-b border-border last:border-b-0 py-6 hover:bg-secondary/50 transition-all duration-200 px-4 -mx-4 ${
                      isBreak ? "bg-secondary/30" : ""
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      {/* Time */}
                      <div className="flex-shrink-0 w-24 text-left">
                        <div className="text-lg font-bold text-foreground">
                          {session.time.split(" - ")[0]}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          isBreak ? "bg-muted" : "bg-accent/10"
                        }`}>
                          <Icon className={isBreak ? "text-muted-foreground" : "text-accent"} size={22} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {session.title}
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock size={14} />
                          {session.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download Section */}
            <Card className="mt-12 p-8 bg-primary text-primary-foreground text-center">
              <h3 className="text-2xl font-bold mb-4">Need the Full Schedule?</h3>
              <p className="mb-6 text-primary-foreground/90">
                Download the complete workshop agenda as a PDF
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                onClick={() => window.print()}
              >
                <Download className="mr-2" size={20} />
                Download PDF
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgendaPage;
