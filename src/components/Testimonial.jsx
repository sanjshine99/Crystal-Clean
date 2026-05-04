import { useRef } from "react";
import { BUSINESS_DETAILS } from "../constants/businessInfo";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=e376e5018d0e0b4b&rlz=1C5CHFA_enCA1132CA1132&sxsrf=ANbL-n7Zo-269EmGdIiT3otBraOB44eVVA:1777732136436&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOROJv0WD8DNUlWd86Wcxez3XKu1Q_GS6N0g-iDhsAQmwETmDDEJ3eCJQ2AaJOHy4xyB3NsYRAS46GsMJ8RWXUOOXYFHz&q=Crystal+clean+Reviews&sa=X&ved=2ahUKEwjTyv2j6JqUAxWRfWwGHQOkEDgQ0bkNegQIJxAH&biw=1536&bih=730&dpr=1.25";

const googleReviews = [
  {
    name: "Adam Howe",
    initial: "A",
    date: "Google review",
    quote:
      "Absolutely over the moon with the showroom finish! Chris and Ryan have done a 10/10 job, opting for a full valet, polish & 3 year ceramic coating. A local, professional service providing impressive car care and results. Would highly recommend!",
  },
  {
    name: "DiSoRdErLy0604",
    initial: "D",
    date: "Google review",
    quote:
      "Absolutely top notch service! 10/10 would highly recommend! The guys did an amazing job, where professional and polite! Will definitely be using the company again in the future!",
  },
  {
    name: "Daryn Bray",
    initial: "D",
    date: "Google review",
    quote:
      "Excellent work and care taken. Did a fantastic job. I am extremely pleased with the result and would highly recommend.",
  },
  {
    name: "Leah Battershall",
    initial: "L",
    date: "Google review",
    quote:
      "Chris did a great job of my wintery mucky doggy van we will be using you now once a month to keep woodland dog walking and per sitting services van nice and clean. Just waiting on some of tge dogs bedding to dry now Thank you chris a great job looks much better than I have every done myself.",
  },
  {
    name: "Yvette Tilley",
    initial: "Y",
    date: "Google review",
    quote:
      "Excellent service and had a video and pictures sent to me prior to collecting the vehicle. The car smells amazing and would highly recommend. Very well priced.",
  },
  {
    name: "Toby Thorne",
    initial: "T",
    date: "Google review",
    quote:
      "Managed to get me booked in for a full interior and exterior valet next day. Car needed to be deep cleaned for returning following 4 year lease and looks brand new! Friendly, efficient and great value for money.",
  },
  {
    name: "Laura Dunk",
    initial: "L",
    date: "Google review",
    quote:
      "Super job done on my car, inside and out. It has been cleaned to a high standard. The car isn’t cleaned often but there was no judgment :) Very polite and friendly. Thanks boys. Definitely recommend ",
  },
];

const TestimonialsSection = () => {
  const reviewTrackRef = useRef(null);

  const scrollReviews = (direction) => {
    reviewTrackRef.current?.scrollBy({
      left: direction * 330,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white dark:bg-[#0E0E0E] text-[#0E0E0E] dark:text-white py-24 px-6 md:px-12 transition-colors duration-300"
    >
      <div
        className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-14"
        data-aos="fade-up"
      >
        <div data-aos="fade-right">
          <p className="text-[#13AFFE] dark:text-[#F5A623] uppercase tracking-[5px] text-sm font-black mb-2">
            Google Reviews
          </p>
          <h2 className="text-4xl md:text-5xl text-[#13AFFE] font-black leading-[1.2]">
            What Our <span className="dark:text-[#F5A623]">Customers Say</span>
          </h2>
          <p className="text-gray-500 dark:text-[#868386] text-base mt-4 max-w-lg font-medium">
            See recent feedback from customers who trusted Crystal Clean with
            their vehicles in Okehampton.
          </p>
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mt-8 md:mt-0 flex items-center gap-2 bg-[#F5A623] hover:scale-105 text-white dark:text-[#0E0E0E] font-bold uppercase px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 dark:shadow-yellow-500/10"
        >
          Book Your Detail
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-[#1C1C1C] bg-gray-50 dark:bg-[#161616] shadow-sm">
            <div className="relative bg-[#12133A] px-5 py-8 md:px-8 md:py-10">
              <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
                <div className="flex flex-col justify-center text-white">
                  <p className="text-2xl font-black uppercase tracking-tight">
                    Excellent
                  </p>
                  <div
                    className="mt-4 flex text-3xl leading-none text-[#FFD21F]"
                    aria-label="5 star rating"
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index}>&#9733;</span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white/70">
                    Based on Google reviews
                  </p>
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-fit text-3xl font-black tracking-tight"
                    aria-label="View Crystal Clean on Google"
                  >
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#DB4437]">o</span>
                    <span className="text-[#F4B400]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#0F9D58]">l</span>
                    <span className="text-[#DB4437]">e</span>
                  </a>
                </div>

                <div className="relative min-w-0">
                  <button
                    type="button"
                    aria-label="Previous review"
                    onClick={() => scrollReviews(-1)}
                    className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full bg-[#07081D] text-white shadow-lg transition hover:bg-[#13AFFE] md:flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div
                    ref={reviewTrackRef}
                    className="flex snap-x gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  >
                    {googleReviews.map((review) => (
                      <article
                        key={`${review.name}-${review.quote}`}
                        className="min-h-[230px] w-[280px] shrink-0 snap-start text-white md:w-[300px]"
                      >
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F04F45] text-xl font-black">
                              {review.initial}
                            </div>
                            <div>
                              <h3 className="text-base font-black leading-tight">
                                {review.name}
                              </h3>
                              <p className="text-sm font-semibold text-white/60">
                                {review.date}
                              </p>
                            </div>
                          </div>
                          <span className="text-2xl font-black text-[#4285F4]">G</span>
                        </div>

                        <div
                          className="mb-3 flex text-xl leading-none text-[#FFD21F]"
                          aria-label="5 star rating"
                        >
                          {Array.from({ length: 5 }, (_, index) => (
                            <span key={index}>&#9733;</span>
                          ))}
                          <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#1A73E8] text-[11px] text-white">
                            &#10003;
                          </span>
                        </div>

                        <p className="line-clamp-4 text-[15px] font-semibold leading-relaxed text-white/85">
                          {review.quote}
                        </p>
                        <a
                          href={GOOGLE_REVIEWS_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex text-sm font-bold text-white/60 transition hover:text-white"
                        >
                          Read more
                        </a>
                      </article>
                    ))}
                  </div>

                  <button
                    type="button"
                    aria-label="Next review"
                    onClick={() => scrollReviews(1)}
                    className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-5 -translate-y-1/2 items-center justify-center rounded-full bg-[#07081D] text-white shadow-lg transition hover:bg-[#13AFFE] md:flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-7 flex justify-center lg:hidden">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#13AFFE] px-5 py-3 text-sm font-bold uppercase text-white"
                >
                  View Google Reviews
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
