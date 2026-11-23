import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { NAVIGATION_ITEMS } from "../../data/navigationData";

export default function Navbar() {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const closeDropdown = () => setOpenLabel(null);
  useEscapeKey(openLabel !== null, closeDropdown);

  return (
    <nav className="navbar" aria-label="Primary" onMouseLeave={closeDropdown}>
      <ul className="navbar__list">
        {NAVIGATION_ITEMS.map((item) => {
          const isOpen = openLabel === item.label;
          return (
            <li key={item.label} className="navbar__item" onMouseEnter={() => setOpenLabel(item.label)}>
              <button
                type="button"
                className="navbar__trigger"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={() => setOpenLabel(isOpen ? null : item.label)}
              >
                {item.label}
                <ChevronDown size={14} aria-hidden="true" />
              </button>
              {isOpen && (
                <ul className="navbar__dropdown">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a href={child.href} onClick={closeDropdown}>
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
