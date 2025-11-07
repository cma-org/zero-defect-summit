import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, Building2, Briefcase, CheckCircle2 } from "lucide-react";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    department: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.mobile || !formData.company) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Replace this URL with your Razorpay payment page URL
    const razorpayUrl = "YOUR_RAZORPAY_PAYMENT_PAGE_URL";
    
    // Store form data in sessionStorage for retrieval after payment
    sessionStorage.setItem('registrationData', JSON.stringify(formData));
    
    // Navigate to Razorpay payment page
    window.location.href = razorpayUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* Form - Takes 3 columns */}
      <div className="lg:col-span-3">
        <Card className="p-8 border-2">
          <h3 className="text-3xl font-bold text-foreground mb-2">
            Registration Form
          </h3>
          <p className="text-muted-foreground mb-8">
            Fill in your details to register for the workshop
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-foreground mb-2 flex items-center gap-2">
                <User size={16} className="text-accent" />
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="border-2 h-12"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground mb-2 flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@company.com"
                required
                className="border-2 h-12"
              />
            </div>

            <div>
              <Label htmlFor="mobile" className="text-foreground mb-2 flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                Mobile Number *
              </Label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
                className="border-2 h-12"
              />
            </div>

            <div>
              <Label htmlFor="department" className="text-foreground mb-2 flex items-center gap-2">
                <Briefcase size={16} className="text-accent" />
                Department
              </Label>
              <Input
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="e.g., Production, QA, R&D"
                className="border-2 h-12"
              />
            </div>

            <div>
              <Label htmlFor="company" className="text-foreground mb-2 flex items-center gap-2">
                <Building2 size={16} className="text-accent" />
                Company Name *
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                required
                className="border-2 h-12"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 font-semibold shadow-glow"
            >
              Proceed to Payment
            </Button>
          </form>
        </Card>
      </div>

      {/* Sidebar - Takes 2 columns */}
      <div className="lg:col-span-2 space-y-6">
        <Card className="p-6 border-2 bg-primary text-primary-foreground">
          <h4 className="text-xl font-bold mb-4">What's Included</h4>
          <ul className="space-y-3">
            {[
              "2-Day Comprehensive Training",
              "Workshop Materials & Resources",
              "Certificate of Completion",
              "Lunch & Refreshments",
              "Networking Opportunities",
              "Access to Expert Q&A Sessions",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent mt-0.5 flex-shrink-0" size={20} />
                <span className="text-primary-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 border-2">
          <h4 className="text-xl font-bold text-foreground mb-4">
            Need Assistance?
          </h4>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground text-lg">Ms. Lakshmi</p>
              <p className="text-sm">Conference Manager</p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="text-accent flex-shrink-0" size={16} />
                <a href="mailto:hello@axygenpharmatech.com" className="hover:text-accent text-sm break-all">
                  hello@axygenpharmatech.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-accent flex-shrink-0" size={16} />
                <span className="text-sm">+91 9603978651</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-accent flex-shrink-0" size={16} />
                <span className="text-sm">040 24342228</span>
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 bg-accent/10">
          <h4 className="text-lg font-bold text-foreground mb-3">
            Cancellation Policy
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Full refund if cancelled 1+ weeks before event</li>
            <li>• 25% processing fee within 1 week of event</li>
            <li>• Substitution allowed anytime without fee</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationForm;
