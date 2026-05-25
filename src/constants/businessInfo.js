import { Facebook, Instagram } from "lucide-react";
import { FaTiktok, FaYoutube } from "react-icons/fa";

export const BUSINESS_DETAILS = {
    name: "Crystal Clean",
    siteUrl: "https://www.crystalcleanexeter.co.uk",
    defaultMetaImage: "/crystal-clean-og-image.jpg",
    phone: "+44 7446 253967",
    phoneHref: "tel:+447446253967",
    email: "crystal.cl34n@gmail.com",
    emailHref: "mailto:crystal.cl34n@gmail.com",
    openingHours: [
        { day: "Mon - Fri", time: "9:00 AM – 5:00 PM" },
        { day: "Saturday", time: "9:00 AM – 1:00 PM" },
        { day: "Sunday", time: "Closed" },
    ],
    whatsappNumber: "447446253967", 
    address: "Unit 1B Cranmere Rd, Okehampton EX20 1UE",
    mapsUrl: "https://maps.app.goo.gl/6q2xuZLGjxa7yGkr8",
    services: [
        "Deep Valet",
        "Polishing",
        "Ceramic Coating",
        "PPF Installation",
    ]
};

export const SOCIAL_LINKS = [
    {
        name: "Facebook",
        href: "https://web.facebook.com/p/Crystal-clean-100080908440119/?_rdc=1&_rdr#",
        icon: Facebook,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/crystal.clean.detail22/#",
        icon: Instagram,
    },
    {
        name: "TikTok",
        href: "https://www.tiktok.com/@crystal.cl34n",
        icon: FaTiktok,
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@crystalcleandetail",
        icon: FaYoutube,
    },
];
