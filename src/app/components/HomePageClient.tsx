import Hero from './HeroSection';
import Locations from './LocationsSection';
import Properties from './PropertySection';
import Reviews from './ReviewsSection';
import Posts from './BlogPosts';
import ContactUs from './ContactUs';
import Footer from './Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Properties />
      <Locations />
      <Reviews />
      <Posts />
      <ContactUs />
      <Footer />
    </>
  );
}