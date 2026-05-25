import { memo, useState, useRef, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import  GALLERY_ITEMS from "../Data/newgallery"


// ─── Media Renderer ──────────────────────────────────────────────────────────
const Media = memo(function Media({ src, type, alt, className }) {
  if (type === "video") {
    return (
      <video src={src} autoPlay loop muted playsInline preload="metadata" className={className} />
    );
  }
  return <img src={src}  loading="lazy" alt={alt} className={className} draggable={false} loading="lazy" decoding="async" />;
});

// ─── Before/After Drag Slider ────────────────────────────────────────────────
function BeforeAfterSlider({ beforeSrc, beforeMedia, afterSrc, afterMedia, beforeAlt, afterAlt }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e) => { e.preventDefault(); dragging.current = true; };
  const onMouseMove = (e) => { if (dragging.current) updatePos(e.clientX); };
  const onMouseUp = () => { dragging.current = false; };
  const onTouchMove = (e) => { updatePos(e.touches[0].clientX); };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none overflow-hidden rounded-xl cursor-ew-resize"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
    >
      {/* AFTER — full background */}
      <div className="absolute inset-0">
        <Media src={afterSrc} type={afterMedia} alt={afterAlt} className="w-full h-full object-cover" />
        <span className="absolute bottom-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full bg-[#13AFFE]/80 text-white tracking-widest uppercase">
          After
        </span>
      </div>

      {/* BEFORE — clipped left */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Media src={beforeSrc} type={beforeMedia} alt={beforeAlt} className="w-full h-full object-cover" />
        <span className="absolute bottom-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-black/40 text-white tracking-widest uppercase backdrop-blur-sm">
          Before
        </span>
      </div>

      {/* Divider line + handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_14px_rgba(255,255,255,0.7)] pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white shadow-xl flex items-center justify-center gap-0.5">
          <FiChevronLeft size={12} className="text-black" />
          <FiChevronRight size={12} className="text-black" />
        </div>
      </div>
    </div>
  );
}

// ─── Single Media Card ───────────────────────────────────────────────────────
function SingleCard({ src, media, alt }) {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      <Media src={src} type={media} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

// ─── Main Gallery Section ────────────────────────────────────────────────────
export default function Gallery({ data }) {
  const brandBlue = "#13AFFE";
  const [current, setCurrent] = useState(0);
  const total = GALLERY_ITEMS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const item = GALLERY_ITEMS[current];

  const subtitle = data?.subtitle || "Real Results. Every Time.";

  return (
    <section
      id="gallery"
      className="scroll-m-10 py-10 px-4 sm:px-6 lg:px-12 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-0.5 w-10" style={{ backgroundColor: brandBlue }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: brandBlue }}>
              Gallery
            </span>
            <div className="h-0.5 w-10" style={{ backgroundColor: brandBlue }} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#13AFFE]">Our <span className="text-[#F5A623]">Work</span></h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">{subtitle}</p>
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Label + counter */}
          <div className="flex items-center justify-between mb-3 px-1">
            
            <span className="text-xs text-white/40">{current + 1} / {total}</span>
          </div>

          {/* Media area */}
          <div
            className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            style={{ aspectRatio: "16/9", background: "#111" }}
          >
            {item.type === "before-after" ? (
              <BeforeAfterSlider
                beforeSrc={item.beforeSrc}
                beforeMedia={item.beforeMedia}
                afterSrc={item.afterSrc}
                afterMedia={item.afterMedia}
                beforeAlt={item.beforeAlt}
                afterAlt={item.afterAlt}
              />
            ) : (
              <SingleCard src={item.src} media={item.media} alt={item.alt} />
            )}
          </div>

          {/* Drag hint */}
          {item.type === "before-after" && (
            <div className="absolute top-12 right-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/20 text-white/40 backdrop-blur-sm bg-black/40 pointer-events-none">
              Drag to compare
            </div>
          )}

          {/* Media type indicator badges */}
          {item.type === "before-after" && (
            <div className="flex gap-2 mt-3 px-1">
              <span className="text-[10px] uppercase tracking-widest text-white/30 border border-white/10 px-2 py-0.5 rounded-full">
                Before: {item.beforeMedia}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/30 border border-white/10 px-2 py-0.5 rounded-full">
                After: {item.afterMedia}
              </span>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#13AFFE] hover:text-[#13AFFE] transition-all"
            >
              <FiChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {GALLERY_ITEMS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 20 : 7,
                    height: 7,
                    backgroundColor: i === current ? brandBlue : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#13AFFE] hover:text-[#13AFFE] transition-all"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
