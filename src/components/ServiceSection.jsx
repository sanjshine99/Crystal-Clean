import React, { useState } from "react";
import {
    FaCar,
    FaShieldAlt,
    FaStar,
    FaSoap,
    FaGem,
    FaCarSide
} from "react-icons/fa";

export default function ServiceSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const reasons = [
        {
            icon: FaSoap,
            title: "Deep Valet",
            desc: "Comprehensive exterior and interior deep clean removing dirt, grime and odours restoring your vehicle to a showroom condition.",
            color: "from-[#13AFFE] to-[#005bb5]",
            borderColor: "border-[#13AFFE]/30",
        },
        {
            icon: FaGem,
            title: "Polishing",
            desc: "Professional machine polishing to restore shine, remove swirl marks and light scratches, and prepare your vehicle for long-lasting protection.",
            color: "from-[#F5A623] to-[#e6c700]",
            borderColor: "border-[#F5A623]/30",
        },
        {
            icon: FaShieldAlt,
            title: "Ceramic Coating",
            desc: "Durable ceramic coatings delivering long-lasting gloss and hydrophobic protection against UV rays, dirt, and minor chemical damage.",
            color: "from-[#13AFFE] to-[#005bb5]",
            borderColor: "border-[#13AFFE]/30",
        },
        {
            icon: FaCarSide,
            title: "PPF Installation",
            desc: "Certified PPF installation providing invisible protection against stone chips, scratches, and everyday wear while preserving value.",
            color: "from-[#F5A623] to-[#e6c700]",
            borderColor: "border-[#F5A623]/30",
        },
    ];

    return (
        <section
            id="services"
            className="relative scroll-m-10 bg-white dark:bg-[#0E0E0E] py-20 px-4 sm:px-6 overflow-hidden text-[#0E0E0E] dark:text-white transition-colors duration-300"
        >
            {/* Background Accents */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#13AFFE] rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#F5A623] rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl sm:text-5xl text-[#13AFFE] lg:text-6xl font-black mb-4 uppercase tracking-tighter">
                        Our Specialised<span className="text-[#F5A623]"> Services</span> 
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto font-medium">
                        Combining technical expertise with precision tools to handle everything from routine maintenance to complex paint protection film installation.
                    </p>
                </div>

                {/* Grid Structure Fix based on image_a47ee0.png */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                    
                    {/* Featured Large Card (Left) */}
                    <div className="lg:col-span-2" data-aos="fade-right">
                        <div className={`h-full bg-gray-50 dark:bg-[#1a1a1a] border ${reasons[activeIndex].borderColor} rounded-3xl p-8 md:p-12 transition-all duration-500 shadow-xl flex flex-col justify-center`}>
                            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br ${reasons[activeIndex].color} mb-6 shadow-lg`}>
                                {React.createElement(reasons[activeIndex].icon, { className: "text-4xl text-white dark:text-[#0E0E0E]" })}
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black mb-4 uppercase italic">
                                {reasons[activeIndex].title}
                            </h3>
                            <p className="text-gray-600 dark:text-white text-xl leading-relaxed mb-8">
                                {reasons[activeIndex].desc}
                            </p>
                            <div className="flex gap-3">
                                {reasons.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex
                                                ? "w-16 bg-[#13AFFE] dark:bg-[#F5A623]"
                                                : "w-8 bg-white dark:bg-gray-700"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Secondary Cards Column - Stacked vertically to fill height */}
                    <div className="grid grid-cols-1 gap-6">
                        {reasons.map((reason, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`cursor-pointer group bg-gray-50 dark:bg-[#1a1a1a] border rounded-2xl p-6 transition-all duration-300 flex items-start gap-4 ${activeIndex === idx
                                        ? "border-[#13AFFE] dark:border-[#F5A623] shadow-lg"
                                        : "border-transparent opacity-70 hover:opacity-100"
                                    }`}
                            >
                                <div className={`shrink-0 w-12 h-12 rounded-xl bg-linear-to-br ${reason.color} flex items-center justify-center`}>
                                    {React.createElement(reason.icon, { className: "text-xl text-white dark:text-[#0E0E0E]" })}
                                </div>
                                <div>
                                    <h4 className="text-md font-black uppercase italic leading-tight mb-1">{reason.title}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 italic font-medium">Click to view details</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Badges - Lowered for better spacing */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100 dark:border-gray-800" data-aos="fade-up">
                    {[
                        { icon: FaShieldAlt, title: "100% Guaranteed", desc: "Quality work and satisfaction guaranteed" },
                        { icon: FaStar, title: "5-Star Rated", desc: "Trusted by hundreds of customers" },
                        { icon: FaCar, title: "Crystal Clean", desc: "Driven by detail, defined by quality" }
                    ].map((badge, i) => (
                        <div key={i} className="bg-gray-100 dark:bg-[#0E0E0E] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center group">
                            <badge.icon className="text-4xl text-[#F5A623] group-hover:text-[#13AFFE] mx-auto mb-3 transition-all duration-300" />
                            <p className="font-black text-xl mb-1 uppercase tracking-tight">{badge.title}</p>
                            <p className="text-gray-500 dark:text-gray-500 text-sm font-medium">{badge.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}