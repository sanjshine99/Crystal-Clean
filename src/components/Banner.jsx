import React from 'react';

const Banner = () => {
  return (
    <section className="w-full bg-black py-10 px-6 sm:px-12 md:px-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        
        {/* Text Content */}
        <h2 className="text-white text-4xl font-medium  max-w-xl">
         Returning your leased or rental car? <br className="hidden sm:block" />
         Call Crystal Clean for a spotless finish!
        </h2>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          
          {/* Primary Button: Using #13AFFE */}
          <a
            href='/#contact'
            style={{ backgroundColor: '#13AFFE' }}
            className="group relative text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2 hover:brightness-110 active:brightness-110 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-[#13AFFE]/20"
          >
            Get in touch
            <svg 
              className="w-5 h-5 transform transition-transform group-hover:translate-x-1 group-active:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Secondary Button: Using #F5A623 */}
          <a 
            href='/#services'
            style={{ borderColor: '#F5A623' }}
            className="border-2 text-white px-8 py-4 rounded-full text-center font-medium text-lg hover:bg-[#F5A623] hover:text-black transition-all duration-300 w-full sm:w-auto"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F5A623';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#fff';
            }}
          >
            Browse services
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Banner;