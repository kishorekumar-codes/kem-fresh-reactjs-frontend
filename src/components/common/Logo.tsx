import { LINKS } from "../../config/links";
import logoImg from "../../assets/images/logo.png";
interface LogoProps {
  variant?: "dark" | "light";
}

/** Replace IMAGE_ASSETS.logo with the final brand logo when available. */
export default function Logo({ variant = "dark" }: LogoProps) {
  return (
    <a href={LINKS.home} className={`logo logo--${variant}`} aria-label="KEM FRESH home">
      <img src={logoImg} alt="" className="logo__mark" width={40} height={40} />
      <span className="logo__text">KEM</span>
      <span className="logo__text second__part">FRESH</span>
    </a>
  );
}
