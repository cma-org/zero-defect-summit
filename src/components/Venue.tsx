import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Venue = () => {
  const venueAddress = "Avasa, Hyderabad";
  const fullAddress =
    "Survey No. 64 15, 24 25 & 26, Hitech City Main Rd, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081, India";
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.26501910255!2d78.38110807593334!3d17.44702510108298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93df8cdfaf93%3A0x84d4109f7434d64c!2sAvasa!5e0!3m2!1sen!2sus!4v1762428078847!5m2!1sen!2sus`;

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Venue</h2>
            <p className="text-xl text-muted-foreground">Our location and how you can get here</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Address Section */}
            <div className="bg-card border-2 rounded-lg p-8 space-y-6">
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-primary" />
                </div>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Address</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-semibold text-foreground text-lg">{venueAddress}</p>
                  <p className="text-sm leading-relaxed">
                    Survey No.83/1, Hyderabad Knowledge City, Plot No.5, Survey No. 83/1, Madhapur, Hyderabad,
                    Hyderabad, Telangana - 500081
                  </p>
                  <p className="font-medium">India</p>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 font-semibold"
                >
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    GET DIRECTIONS
                  </a>
                </Button>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-card border-2 rounded-lg overflow-hidden h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2838426899524!2d78.38194097515894!3d17.445833683456756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sITC%20Kohenur%2C%20a%20Luxury%20Collection%20Hotel%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ITC Kohenur Hotel Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
