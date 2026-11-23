import { ArrowRight } from "lucide-react";
import { IMAGE_ASSETS } from "../../config/imageAssets";
import { LINKS } from "../../config/links";

export default function FarmSection() {
  return (
    <section id="farms" className="farms" aria-labelledby="farms-title">
      <div className="farms__content">
        <h2 id="farms-title" className="farms__title">
          Our Farms
        </h2>
        <p className="farms__text">From Tiruvannamalai to Kolli Hills — growing naturally, for you.</p>
        <a href={LINKS.farms} className="text-link">
          Learn More <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
      <img
        className="farms__image"
        src={IMAGE_ASSETS.farms.landscape}
        alt="Green hills and farmland under a clear sky"
        loading="lazy"
      />
    </section>
  );
}
