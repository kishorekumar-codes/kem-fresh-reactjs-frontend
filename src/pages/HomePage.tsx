import Container from "../components/common/Container";
import CategoryCards from "../components/home/CategoryCards";
import FarmSection from "../components/home/FarmSection";
import HeroSection from "../components/home/HeroSection";
import MarketSection from "../components/home/MarketSection";
import StoriesSection from "../components/home/StoriesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryCards />
      <Container className="showcase">
        <MarketSection />
        <FarmSection />
      </Container>
      <StoriesSection />
    </>
  );
}
