import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { X, Check, Calendar, MapPin, Minus, Plus, Clock } from "lucide-react";

interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
  salesEndDate: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  designation: string;
  billingName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
}

const RegistrationPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [timeLeft, setTimeLeft] = useState({ minutes: 10, seconds: 0 });
  const [isAttending, setIsAttending] = useState(true);
  const [promoCode, setPromoCode] = useState("");

  const [tickets, setTickets] = useState<Record<string, number>>({
    vip: 1,
    vvip: 0,
  });

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    billingName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
  });

  const ticketTypes: TicketType[] = [
    {
      id: "vip",
      name: "VIP Pass for 2 days",
      price: 30000,
      description: "2 days access to Zero-Defect Tablet Manufacturing Workshop",
      salesEndDate: "Dec 9, 2025",
    },
    {
      id: "vvip",
      name: "VVIP Pass for 2 days with VVIP Networking Dinner",
      price: 50000,
      description: "All benefits of VIP Delegate Pass + Exclusive VVIP access to the Workshop + Exclusive Access to VVIP CXO Dinner on 9th December.",
      salesEndDate: "Dec 9, 2025",
    },
  ];

  // Countdown timer
  useEffect(() => {
    if (currentStep === 2 || currentStep === 3) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev.seconds === 0) {
            if (prev.minutes === 0) {
              clearInterval(interval);
              return { minutes: 0, seconds: 0 };
            }
            return { minutes: prev.minutes - 1, seconds: 59 };
          }
          return { minutes: prev.minutes, seconds: prev.seconds - 1 };
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  const updateTicketQuantity = (ticketId: string, change: number) => {
    setTickets((prev) => ({
      ...prev,
      [ticketId]: Math.max(0, prev[ticketId] + change),
    }));
  };

  const calculateTotal = () => {
    let subtotal = 0;
    ticketTypes.forEach((ticket) => {
      subtotal += ticket.price * tickets[ticket.id];
    });
    const tax = subtotal * 0.18;
    return { subtotal, tax, total: subtotal + tax };
  };

  const getTotalTickets = () => {
    return Object.values(tickets).reduce((sum, count) => sum + count, 0);
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      if (getTotalTickets() === 0) {
        toast({
          title: "Select Tickets",
          description: "Please select at least one ticket",
          variant: "destructive",
        });
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!formData.firstName || !formData.email || !formData.billingName || !formData.addressLine1) {
        toast({
          title: "Required Fields Missing",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as 1 | 2 | 3);
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  const { subtotal, tax, total } = calculateTotal();
  const selectedTickets = ticketTypes.filter((ticket) => tickets[ticket.id] > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-primary via-primary to-primary/90 pt-8 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-start justify-between mb-6">
            <div className="text-white">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Zero-Defect Tablet Manufacturing Workshop
              </h1>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>9-10 December 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Avasa Hotel, Hyderabad</span>
                </div>
              </div>
            </div>
            
            {/* Close Button */}
            {currentStep === 3 && (
              <button
                onClick={handleClose}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
            )}
          </div>

          {/* Progress Steps */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between max-w-2xl">
              {/* Step 1 */}
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                }`}>
                  {currentStep > 1 ? <Check size={16} /> : "1"}
                </div>
                <span className={`text-sm font-medium hidden sm:inline ${
                  currentStep === 1 ? "text-foreground" : "text-muted-foreground"
                }`}>
                  Select Tickets
                </span>
              </div>

              <div className="flex-1 h-0.5 bg-muted mx-2" />

              {/* Step 2 */}
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                }`}>
                  {currentStep > 2 ? <Check size={16} /> : "2"}
                </div>
                <span className={`text-sm font-medium hidden sm:inline ${
                  currentStep === 2 ? "text-foreground" : "text-muted-foreground"
                }`}>
                  Share Details
                </span>
              </div>

              <div className="flex-1 h-0.5 bg-muted mx-2" />

              {/* Step 3 */}
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  currentStep >= 3 ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                }`}>
                  {currentStep > 3 ? <Check size={16} /> : "3"}
                </div>
                <span className={`text-sm font-medium hidden sm:inline ${
                  currentStep === 3 ? "text-foreground" : "text-muted-foreground"
                }`}>
                  Complete Payment
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                {/* Step 1: Select Tickets */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Choose Your Tickets</h2>
                    <div className="space-y-6">
                      {ticketTypes.map((ticket) => (
                        <div key={ticket.id} className="border-b pb-6 last:border-b-0">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <h3 className="text-lg font-bold mb-1">{ticket.name}</h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {ticket.description}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Sales end on <span className="font-semibold">{ticket.salesEndDate}</span>
                              </p>
                            </div>
                            <div className="text-right ml-4">
                              <div className="text-xl font-bold">₹{ticket.price.toLocaleString()}.00</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-3">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateTicketQuantity(ticket.id, -1)}
                              disabled={tickets[ticket.id] === 0}
                            >
                              <Minus size={16} />
                            </Button>
                            <Input
                              type="number"
                              value={tickets[ticket.id]}
                              readOnly
                              className="w-16 text-center"
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateTicketQuantity(ticket.id, 1)}
                            >
                              <Plus size={16} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Share Details */}
                {currentStep === 2 && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">Purchaser and Attendee Information</h2>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="attending"
                          checked={isAttending}
                          onCheckedChange={(checked) => setIsAttending(checked as boolean)}
                        />
                        <label htmlFor="attending" className="text-sm font-medium">
                          I Am Attending
                        </label>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">
                            First Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">
                            Email <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Enter your company name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="designation">Designation</Label>
                          <Input
                            id="designation"
                            value={formData.designation}
                            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                            placeholder="Enter your designation"
                          />
                        </div>
                      </div>

                      <div className="pt-4">
                        <h3 className="text-lg font-bold mb-4">Billing Address</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="billingName">
                              Company name/Individual <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="billingName"
                              value={formData.billingName}
                              onChange={(e) => setFormData({ ...formData, billingName: e.target.value })}
                              placeholder="Please enter the company name or individual's name"
                            />
                          </div>

                          <div>
                            <Label htmlFor="addressLine1">
                              Address Line 1 <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="addressLine1"
                              value={formData.addressLine1}
                              onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                              placeholder="Please enter Address Line 1"
                            />
                          </div>

                          <div>
                            <Label htmlFor="addressLine2">Address Line 2</Label>
                            <Input
                              id="addressLine2"
                              value={formData.addressLine2}
                              onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                              placeholder="Please enter Address Line 2"
                            />
                          </div>

                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="city">City</Label>
                              <Input
                                id="city"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                placeholder="City"
                              />
                            </div>
                            <div>
                              <Label htmlFor="state">State</Label>
                              <Input
                                id="state"
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                placeholder="State"
                              />
                            </div>
                            <div>
                              <Label htmlFor="pincode">Pincode</Label>
                              <Input
                                id="pincode"
                                value={formData.pincode}
                                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                placeholder="Pincode"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Pay Online</h2>
                    
                    <Card className="bg-foreground text-background p-6 mb-6">
                      <h3 className="text-xl font-bold text-center mb-6">
                        Zero-Defect Tablet Manufacturing Workshop
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between text-lg">
                          <span>Amount</span>
                          <span className="font-bold">Rs.{subtotal.toLocaleString()}.00</span>
                        </div>

                        {selectedTickets.map((ticket) => (
                          <div key={ticket.id} className="text-sm opacity-80">
                            {tickets[ticket.id]} x {ticket.name}
                          </div>
                        ))}

                        <div className="border-t border-background/20 pt-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span>IGST18 (18%)</span>
                            <span>Rs.{tax.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                          </div>
                        </div>

                        <div className="border-t border-background/20 pt-4">
                          <div className="flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>Rs.{total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold"
                      onClick={() => {
                        toast({
                          title: "Payment Integration",
                          description: "Payment gateway integration coming soon!",
                        });
                      }}
                    >
                      Checkout with Razorpay
                    </Button>

                    <p className="text-center text-sm text-muted-foreground mt-6">
                      2025 Workshop | Axygen Pharmatech Pvt. Ltd. All Rights Reserved.
                    </p>
                  </div>
                )}
              </Card>

              {/* Action Buttons */}
              <div className="flex justify-between mt-6">
                {currentStep > 1 && (
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                )}
                {currentStep < 3 && (
                  <Button
                    className="ml-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                    onClick={handleContinue}
                  >
                    CONTINUE
                  </Button>
                )}
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-4">
                {/* Timer */}
                {(currentStep === 2 || currentStep === 3) && (
                  <div className="bg-foreground text-background rounded-lg px-4 py-2 flex items-center justify-center gap-2 font-mono text-xl font-bold">
                    <Clock size={20} />
                    <span>
                      {String(timeLeft.minutes).padStart(2, "0")} : {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                  </div>
                )}

                {/* Promo Code */}
                {currentStep === 1 && (
                  <Card className="p-4">
                    <h3 className="font-bold mb-3">Promotional Code</h3>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        APPLY
                      </Button>
                    </div>
                  </Card>
                )}

                {/* Order Summary */}
                <Card className="p-4">
                  <h3 className="font-bold mb-4">Your Order</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm font-semibold border-b pb-2">
                      <span>Ticket Details</span>
                      <span>Price</span>
                    </div>

                    {selectedTickets.map((ticket) => (
                      <div key={ticket.id} className="space-y-1">
                        <div className="font-semibold text-sm">{ticket.name}</div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {tickets[ticket.id]} x ₹{ticket.price.toLocaleString()}.00
                          </span>
                          <span className="font-semibold">
                            ₹{(ticket.price * tickets[ticket.id]).toLocaleString()}.00
                          </span>
                        </div>
                      </div>
                    ))}

                    <div className="border-t pt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold">Actual Amount</span>
                        <span className="font-semibold">₹{subtotal.toLocaleString()}.00</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{getTotalTickets()} Ticket{getTotalTickets() !== 1 ? 's' : ''}</span>
                        <span>₹{subtotal.toLocaleString()}.00</span>
                      </div>
                    </div>

                    {currentStep >= 2 && (
                      <>
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold">Total Amount</span>
                          <span className="font-semibold">₹{subtotal.toLocaleString()}.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold">Tax</span>
                          <span className="font-semibold">₹{tax.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="border-t pt-3">
                          <div className="flex justify-between text-lg font-bold">
                            <span>Grand Total</span>
                            <span>₹{total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                          </div>
                        </div>
                      </>
                    )}

                    <div className="border-t pt-3">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold">*No cancellation policy:</span> Order cancellation not allowed.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;
