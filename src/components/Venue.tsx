import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import itcKohenurImage from "@/assets/itc-kohenur.png";

const Venue = () => {
  const venueAddress = "ITC Kohenur, Hyderabad, Telangana";
  const fullAddress = "Survey No, 83/1, Hyderabad Knowledge City, Plot No.5, Silpa Gram Craft Village, Madhapur, Hyderabad, Telangana 500032, India";
  const googleMapsUrl = `https://maps.app.goo.gl/4Ea8dxw7FVmXuEA56`;

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
                  <p className="text-sm leading-relaxed">{fullAddress}</p>
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

            {/* Hotel Image */}
            <div className="bg-card border-2 rounded-lg overflow-hidden h-[500px]">
              <img 
                src={itcKohenurImage} 
                alt="ITC Kohenur Hotel Hyderabad" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
