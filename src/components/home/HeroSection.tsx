import { ArrowRight } from "lucide-react";
// import { IMAGE_ASSETS } from "../../config/imageAssets";
import { LINKS } from "../../config/links";
import Button from "../common/Button";
import Container from "../common/Container";
import heroImg from "../../assets/images/kem-fresh-main.jpg";


export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        className="hero__image"
        // src={IMAGE_ASSETS.hero}
        // src={IMAGE_ASSETS.main}
        src={heroImg}
        alt="Farmer standing in green fields with a mountain behind"
        fetchPriority="high"
      />
      <div className="hero__overlay" aria-hidden="true" />
      <Container className="hero__content">
        <h1 id="hero-title" className="hero__title">
          Rooted in Nature. Growing a Sustainable Future.
        </h1>
        <p className="hero__subtitle">Discover a more natural way of growing, eating and living.</p>
        <Button href={LINKS.journey} className="hero__cta">
          Explore Our Journey <ArrowRight size={18} aria-hidden="true" />
        </Button>
      </Container>
      <p className="hero__tagline" aria-hidden="true">
        Healthy Soil. <br />
        Healthy Life.
      </p>
    </section>
  );
}
