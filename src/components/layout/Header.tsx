import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useCallback, useState } from "react";
import { LINKS } from "../../config/links";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import Logo from "../common/Logo";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const closeSearch = useCallback(() => setIsSearchOpen(false), []);
  useEscapeKey(isMenuOpen, closeMenu);
  useEscapeKey(isSearchOpen, closeSearch);

  return (
    <header className="header">
      <div className="header__bar">
        <Logo />
        <div className="header__desktop">
          <Navbar />
        </div>
        <div className="header__actions">
          <button
            type="button"
            className="icon-btn header__search"
            aria-label="Search"
            aria-expanded={isSearchOpen}
            onClick={() => setIsSearchOpen((open) => !open)}
          >
            <Search size={18} />
          </button>
          <a href={LINKS.market} className="btn btn--small header__market">
            Market <ShoppingCart size={16} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="icon-btn header__toggle"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <form className="search-bar" role="search" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="site-search" className="visually-hidden">
            Search KEM FRESH
          </label>
          <input id="site-search" type="search" placeholder="Search recipes, farms, products…" autoFocus />
        </form>
      )}

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}
