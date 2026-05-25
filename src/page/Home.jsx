import HeroSection from "../components/HeroSection"
import ContactSection from "../components/ContactSection"
import MapSection from "../components/MapSection"
import AboutSection from '../components/About'
import WhyChooseUs from "../components/WhyChoose"
import ServiceSection from "../components/ServiceSection"
import TestimonialsSection from "../components/Testimonial"
import Gallery from "../components/Newgallery"
import Banner from "../components/Banner"
import Seo from "../components/Seo"
const Home = () => {
    return (
        <div>
            <Seo
                title="Crystal Clean | Premium Car Detailing in Okehampton, Devon"
                description="Crystal Clean provides premium car detailing, paint correction, ceramic coating, PPF installation, and mobile valeting from Okehampton across Devon."
                canonicalPath="/"
            />
            <HeroSection />
            <AboutSection />
            <WhyChooseUs />
            <ServiceSection />
            <TestimonialsSection />
            <Banner />
            <Gallery />
            <ContactSection />
            <MapSection />
        </div>
    )
}

export default Home
