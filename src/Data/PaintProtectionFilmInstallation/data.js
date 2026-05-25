// data.js updated with Service

export const serviceBannerData = {
  title: "Professional Paint Protection Film Installation (PPF)",
  description: "Ultimate physical protection for your vehicle’s paintwork.",
  desc1: "Our certified PPF installation service provides an invisible shield against stone chips, scratches, and road debris, keeping your vehicle in pristine condition.",
  thumbnailImage: "/crystal-clean-ppf-installation-banner.png",
  thumbnailAlt: "Paint protection film installation in progress at Crystal Clean",
};

export const serviceDetailData = {
  mainTitle: "Certified Paint Protection Film Installation",
  mainDescription: "Paint Protection Film Installation (PPF) is a high-performance, transparent urethane film applied to vulnerable areas of your vehicle. Unlike coatings, PPF provides a physical barrier that absorbs impacts from stones, road debris, and minor abrasions.",
  subDesc: "At Crystal Clean, we are certified PPF installers, ensuring precision fitting, seamless edges, and long-lasting durability. All installations are completed in our controlled indoor studio environment in Okehampton for maximum accuracy and clean application.",
  // Left Column - When you need it
  benefits: {
    title: "When You Need PPF",
    items: [
      {
        heading: "Protecting a New Vehicle",
        text: "Keep your paintwork flawless from day one and prevent costly resprays."
      },
      {
        heading: "High-Risk Driving Areas",
        text: "Motorway driving and country roads increase exposure to stone chips and debris."
      },
      {
        heading: "Preserving Resale Value",
        text: "Maintain factory paint condition and protect long-term vehicle value."
      },
      {
        heading: "Premium & Performance Vehicles",
        text: "Ideal for sports, luxury, and enthusiast vehicles requiring maximum protection."
      }
    ]
  },

  // Right Column - How it works
  process: {
    title: "How It Works",
    steps: [
      {
        heading: "Book a Consultation",
        text: "Contact us to discuss your vehicle and the level of protection required."
      },
      {
        heading: "Vehicle Preparation",
        text: "We thoroughly clean and decontaminate the paintwork to ensure a perfect bonding surface."
      },
      {
        heading: "Precision Film Installation",
        text: "PPF is carefully applied to selected panels using professional installation techniques to ensure seamless coverage."
      },
      {
        heading: "Final Inspection & Aftercare Guidance",
        text: "We complete a detailed inspection and provide advice on maintaining your protected vehicle."
      }
    ]
  },
}

// data.js

export const packagesData = {

  detail: [
    {
      title: "Discover Our PPF Protection Packages",
      desc: "Advanced Impact Protection Solutions"
    }
  ],
  contactLinks: [
    { icon: "Phone", title: "+44 7446 253967", href: "tel:07446253967" },
    { icon: "Mail", title: "crystal.cl34n@gmail.com", href: "mailto:crystal.cl34n@gmail.com" },
    { icon: "MapPin", title: "Unit 1B Cranmere Rd, Okehampton EX20 1UE", href: "https://maps.app.goo.gl/x37S2ncozFs2e4B67" },
  ],

  packages: [
    {
      type: "FRONT END PACKAGE",
      price: "PRICE ON ENQUIRY",
      features: [
        { description: "Designed to protect the most vulnerable areas of your vehicle." },
        { title: "Commonly includes:", description: "Front bumper, partial or full bonnet, front wings, mirror caps." },
        { description: "Ideal for daily drivers and motorway vehicles." },
      ],
      btnText: "Enquire About Front End Package",
      iconColor: "#861918",
      bgColor: "#86191820",
      borderColor: "#86191830",
    },
    {
      type: "FULL BODY PACKAGE",
      price: "PRICE ON ENQUIRY",
      features: [
        { description: "Complete vehicle protection for maximum peace of mind." },
        { description: "Includes full panel coverage to protect against stone chips, scratches, and environmental damage." },
        { description: "Recommended for high-value, performance, and long-term ownership vehicles." },
      ],
      btnText: "Enquire About Full Body Package",
      iconColor: "#861918",
      bgColor: "#86191820",
      borderColor: "#86191830",
    },
  ]
}
