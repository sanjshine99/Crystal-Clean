export default function MapSection() {
  return (
    <section className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#13AFFE] text-center">
          Find Us
        </h2>
        <iframe
          className="w-full h-80 rounded-2xl border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.762867112106!2d-3.9818022!3d50.742886899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c51003016bf59%3A0x7350addb6f4e8a84!2sCrystal%20clean!5e0!3m2!1sen!2slk!4v1772119359135!5m2!1sen!2slk"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
