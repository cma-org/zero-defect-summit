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
            {/* Left Side - Hotel Image & Address */}
            <div className="space-y-6">
              {/* Hotel Image */}
              <div className="bg-card border-2 rounded-lg overflow-hidden h-[400px]">
                <img 
                  src={itcKohenurImage} 
                  alt="ITC Kohenur Hotel Hyderabad" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Address Section */}
              <div className="bg-card border-2 rounded-lg p-8 space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-10 h-10 text-primary" />
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
            </div>

            {/* Right Side - Google Map */}
            <div className="bg-card border-2 rounded-lg overflow-hidden h-full min-h-[700px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5666144049897!2d78.38054818568153!3d17.43257395887624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9388a09a79f5%3A0x9ff99841b5ec9e9c!2sITC%20Kohenur%2C%20a%20Luxury%20Collection%20Hotel%2C%20Hyderabad!5e0!3m2!1sen!2sus!4v1762927571819!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ITC Kohenur Hotel Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
