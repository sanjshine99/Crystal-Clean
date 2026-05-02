export default function AboutSection() {
  return (
    <section 
      className="relative w-full bg-white dark:bg-[#0E0E0E] py-20 transition-colors duration-300" 
      id="about"
    >
      <div className="relative max-w-7xl mx-auto px-4 md:px-0">

        {/* IMAGE — RESPONSIVE */}
        <div 
          className="relative overflow-hidden rounded-2xl lg:rounded-none lg:rounded-r-2xl shadow-2xl"
            
        >
          <img
            src="/im5.jpeg"
            alt="Vehicle Detailing Professional"
            className="
              w-full
              max-w-[900px]
              h-[400px]
              md:h-[500px]
              lg:h-[650px]
              object-cover
              transition-transform duration-700 hover:scale-105
            "
          />
          {/* Subtle Blue overlay for branding */}
          <div className="absolute inset-0 bg-[#13AFFE]/10 pointer-events-none"></div>
        </div>

        {/* TEXT BOX — OVERLAY ON DESKTOP */}
        <div
          className="
            bg-[#F9F9F9] 
            dark:bg-[#0E0E0E]
            text-[#0E0E0E] 
            dark:text-white
            shadow-2xl
            w-full
            border border-gray-100 dark:border-gray-800

            lg:absolute
            lg:top-1/2
            lg:right-0
            lg:-translate-y-1/2
            lg:w-[50%]
            lg:h-auto
            lg:min-h-[500px]
            lg:flex 
            lg:flex-col
            lg:justify-center

            p-8 
            md:p-12 
            lg:p-16
            -mt-10
            lg:mt-0
            z-10
            rounded-xl
            lg:rounded-l-xl
          "
        >
          {/* ACCENT BAR — Blue in Light, Yellow in Dark */}
          <div className="hidden lg:block absolute left-0 top-0 h-full w-2 bg-[#13AFFE] dark:bg-[#F5A623]"></div>

          {/* CONTENT */}
          <div className="lg:ml-6 pt-10 sm:pt-0">
            <h2 
              className="text-3xl md:text-4xl font-black text-[#13AFFE] uppercase leading-tight mb-6"
       
            >
              ABOUT <span className="text-[#13AFFE] dark:text-[#F5A623]">CRYSTAL CLEAN</span>
            </h2>

            <p 
              className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6"
            
            >
              We are a dedicated vehicle detailing company in Okehampton, offering professional level detailing, polishing, ceramic coating, and PPF services for cars, motorcycles, and caravans. 
            </p>

            <p 
              className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8"
             
            >
              Our team brings years of detailing experience, helping every vehicle look its absolute best, no matter its condition. Whether at our fully equipped studio or via our mobile detailing service, we deliver premium, results-driven care.
            </p>

            {/* Sub-Feature Highlight */}
            <div 
              className="flex items-center gap-4 text-[#13AFFE] dark:text-[#F5A623] font-bold"
           
            >
               <span className="h-px w-8 bg-[#13AFFE] dark:bg-[#F5A623]"></span>
               <span>Devon's Premium Choice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}