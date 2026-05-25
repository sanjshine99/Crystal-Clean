import {
  FaCar,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaTools,
  FaHandshake,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaCar />,
      title: "Fully Mobile & Studio Service",
      desc: "We bring professional detailing to your home or workplace, or you can visit our fully equipped Okehampton studio, with no garage visit required.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Serving Okehampton & Surrounding Devon",
      desc: "Operating across Okehampton and the wider Devon area, delivering convenient, local, and reliable service.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Transparent Pricing",
      desc: "No hidden costs. Every service has clear pricing, and we'll advise you on the best package for your vehicle.",
    },
    {
      icon: <FaTools />,
      title: "Specialist Detailing Services",
      desc: "From deep interior cleaning and engine bay detailing to paint correction, ceramic coating, and PPF installation. Every vehicle receives expert care.",
    },
    {
      icon: <FaClock />,
      title: "Flexible Booking Options",
      desc: "We work around your schedule with weekday, weekend, and mobile appointments available by arrangement.",
    },
    {
      icon: <FaHandshake />,
      title: "Honest & Reliable",
      desc: "Every vehicle is treated with care, precision, and attention to detail, ensuring premium results every time.",
    },
  ];

  return (
    <section
      id="whychoose"
      className="bg-white dark:bg-[#0E0E0E] text-[#0E0E0E] dark:text-white py-10 px-6 md:px-12 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-14" data-aos="fade-down" data-aos-duration="1000">
          <h2 className="text-4xl md:text-5xl text-[#13AFFE] font-bold uppercase tracking-wide">
            Why Choose <span className=" dark:text-[#F5A623]">Us</span>
          </h2>
          <div
            className="w-20 h-1 bg-[#13AFFE] dark:bg-[#F5A623] mt-4"
            data-aos="fade-right"
            data-aos-delay="400"
          ></div>
        </div>

        {/* CONTENT - 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* ICON */}
              <div
                className="text-[#F5A623] group-hover:text-[#13AFFE] text-2xl mt-1 transform group-hover:scale-110 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={i * 100 + 200}
              >
                {item.icon}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="uppercase font-semibold tracking-wide text-lg text-[#0E0E0E] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}