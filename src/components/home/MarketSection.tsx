import { ArrowRight } from "lucide-react";
import { IMAGE_ASSETS } from "../../config/imageAssets";
import { LINKS, MARKET_URL_LABEL } from "../../config/links";
import Button from "../common/Button";

export default function MarketSection() {
  return (
    <section id="market" className="market" aria-labelledby="market-title">
      <div className="market__content">
        <p className="market__eyebrow">KEM FRESH MARKET</p>
        <h2 id="market-title" className="market__title">
          Good Food. Thoughtfully Sourced.
        </h2>
        <p className="market__text">Discover farm-fresh produce, traditional foods and sustainable products.</p>
        <Button href={LINKS.market} external className="market__cta">
          <span>
            Visit <span className="market__cta-extra">the Marketplace</span>
          </span>
          <ArrowRight size={18} aria-hidden="true" />
        </Button>
        <p className="market__url">{MARKET_URL_LABEL}</p>
      </div>
      <img
        className="market__image"
        src={IMAGE_ASSETS.market.vegetables}
        alt="Wicker basket filled with fresh organic vegetables"
        loading="lazy"
      />
    </section>
  );
}
