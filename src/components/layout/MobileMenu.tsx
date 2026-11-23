import { LINKS } from "../../config/links";
import { NAVIGATION_ITEMS } from "../../data/navigationData";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile" hidden={!isOpen}>
      <ul className="mobile-menu__list">
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.label}>
            <a href={item.href} onClick={onClose}>
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a href={LINKS.market} className="mobile-menu__market" onClick={onClose}>
            Market
          </a>
        </li>
      </ul>
    </nav>
  );
}
