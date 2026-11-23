import { IMAGE_ASSETS } from "../../config/imageAssets";
import { LINKS } from "../../config/links";

interface LogoProps {
  variant?: "dark" | "light";
}

/** Replace IMAGE_ASSETS.logo with the final brand logo when available. */
export default function Logo({ variant = "dark" }: LogoProps) {
  return (
    <a href={LINKS.home} className={`logo logo--${variant}`} aria-label="KEM FRESH home">
      <img src={IMAGE_ASSETS.logo} alt="" className="logo__mark" width={40} height={40} />
      <span className="logo__text">KEM</span>
      <span className="logo__text second__part">FRESH</span>
    </a>
  );
}
