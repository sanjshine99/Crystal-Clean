import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';
import { BUSINESS_DETAILS } from "../constants/businessInfo";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  // State for the multi-choice checklist
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: (
        <a href={BUSINESS_DETAILS.phoneHref} className="hover:underline font-bold text-[#13AFFE] dark:text-[#F5A623]">
          {BUSINESS_DETAILS.phone}
        </a>
      ),
      note: 'Call us for immediate assistance',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: (
        <a href={BUSINESS_DETAILS.emailHref} className="hover:underline font-bold text-[#13AFFE] dark:text-[#F5A623]">
          {BUSINESS_DETAILS.email}
        </a>
      ),
      note: 'Send us your questions anytime',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Address',
      value: (
        <a href={BUSINESS_DETAILS.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-[#13AFFE] dark:text-[#F5A623]">
          {BUSINESS_DETAILS.address}
        </a>
      ),
      note: 'Fully equipped studio with onsite parking',
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Opening Hours',
      value: (
        <div className="text-gray-600 dark:text-gray-400 font-medium text-sm space-y-1">
          {BUSINESS_DETAILS.openingHours.map((item) => (
            <p key={item.day}>
              <span className="font-bold">{item.day}:</span> {item.time}
            </p>
          ))}
        </div>
      ),
    },
  ];

  const sendWhatsApp = (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    setLoading(true);
    const form = new FormData(formRef.current);

    // Formatted WhatsApp Message
    const whatsappMessage = `*New Booking Enquiry*
\nName: ${form.get("firstName")} ${form.get("lastName")}
Email: ${form.get("email")}
Booking Type: ${form.get("bookingType")}
Preferred Time: ${form.get("preferredTime")}
Vehicle Make: ${form.get("make")}
Vehicle Model: ${form.get("model")}
Services: ${selectedServices.join(", ")}
Message: ${form.get("message")}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodedMessage}`, "_blank");

    setLoading(false);
    formRef.current.reset();
    setSelectedServices([]); // Clear the checklist after sending
  };

  return (
    <section id="contact" className="py-24 scroll-m-10 bg-white dark:bg-[#0E0E0E] transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-[#13AFFE] uppercase italic">
            Get In <span className="text-black dark:text-[#F5A623]">Touch</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 font-medium">
            Ready to give your vehicle the Crystal Clean finish?
            Contact our {BUSINESS_DETAILS.name} studio today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left - Contact Info */}
          <div className="space-y-10">
            <h3 className="text-2xl font-black uppercase italic text-[#0E0E0E] dark:text-white">
              Studio Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start space-x-5 group">
                  <div className="p-4 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] group-hover:bg-[#13AFFE]/10 group-hover:text-[#13AFFE] transition-all duration-300 group-hover:scale-110 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-xs tracking-widest mb-1 text-gray-400 dark:text-gray-500">
                      {item.title}
                    </h4>
                    <div className="text-lg">{item.value}</div>
                    {item.note && <p className="text-sm text-gray-500 mt-1">{item.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gray-50 dark:bg-[#161616] border border-gray-100 dark:border-white/5 rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Subtle Accent Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#13AFFE]/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <h3 className="text-xl font-black uppercase italic mb-8 text-[#0E0E0E] dark:text-white flex items-center gap-2">
              <Send className="w-5 h-5 text-[#13AFFE]" />
              Quick Booking Request
            </h3>

            <form ref={formRef} onSubmit={sendWhatsApp} className="space-y-5 relative z-10">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">First Name</label>
                  <input name="firstName" type="text" placeholder="John" required className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0E0E0E] border border-gray-200 dark:border-white/10 text-black dark:text-white focus:ring-2 focus:ring-[#13AFFE] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">Last Name</label>
                  <input name="lastName" type="text" placeholder="Doe" required className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0E0E0E] border border-gray-200 dark:border-white/10 text-black dark:text-white focus:ring-2 focus:ring-[#13AFFE] outline-none transition-all" />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">Email Address</label>
                <input name="email" type="email" placeholder="john@example.com" required className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0E0E0E] border border-gray-200 dark:border-white/10 text-black dark:text-white focus:ring-2 focus:ring-[#13AFFE] outline-none transition-all" />
              </div>

              {/* Booking Details Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">Booking Type</label>
                  <select
                    name="bookingType"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0E0E0E] border border-gray-200 dark:border-white/10 text-black dark:text-white focus:ring-2 focus:ring-[#13AFFE] outline-none transition-all"
                  >
                    <option value="" disabled>Select booking type</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Unit">Unit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">Preferred Time</label>
                  <input
                    name="preferredTime"
                    type="time"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0E0E0E] border border-gray-200 dark:border-white/10 text-black dark:text-white focus:ring-2 focus:ring-[#13AFFE] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Vehicle Detail Row (Separate Make & Model) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">Vehicle Make</label>
                  <input name="make" type="text" placeholder="e.g. BMW" required className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0E0E0E] border border-gray-200 dark:border-white/10 text-black dark:text-white focus:ring-2 focus:ring-[#13AFFE] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">Vehicle Model</label>
                  <input name="model" type="text" placeholder="e.g. M3 Competition" required className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0E0E0E] border border-gray-200 dark:border-white/10 text-black dark:text-white focus:ring-2 focus:ring-[#13AFFE] outline-none transition-all" />
                </div>
              </div>

              {/* Multi-select Checklist for Services */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-3 text-gray-500">Which services are you interested in?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BUSINESS_DETAILS.services.map((service) => (
                    <div
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${selectedServices.includes(service)
                          ? "bg-[#13AFFE] border-[#13AFFE] text-white shadow-lg"
                          : "bg-white dark:bg-[#0E0E0E] border-gray-200 dark:border-white/10 text-gray-700"
                        }`}
                    >
                      <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${selectedServices.includes(service) ? "bg-white border-white" : "border-gray-400"}`}>
                        {selectedServices.includes(service) && <Check className="w-3 h-3 text-[#13AFFE]" />}
                      </div>
                      <span className="text-sm font-bold">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">Message</label>
                <textarea name="message" rows={4} placeholder="Vehicle condition or preferred booking dates..." required className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0E0E0E] border border-gray-200 dark:border-white/10 text-black dark:text-white focus:ring-2 focus:ring-[#13AFFE] outline-none transition-all resize-none"></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all shadow-xl hover:scale-[1.02] active:scale-95 bg-[#F5A623] hover:bg-[#13AFFE] text-white dark:text-[#0E0E0E] dark:hover:text-white"
              >
                {loading ? 'Opening WhatsApp...' : 'Request Booking via WhatsApp'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
