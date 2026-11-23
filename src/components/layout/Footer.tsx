import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import type { ComponentType } from "react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../../data/storyData";
import type { SocialLink } from "../../types";
import Container from "../common/Container";
import Logo from "../common/Logo";

const SOCIAL_ICONS: Record<SocialLink["icon"], ComponentType<{ size?: number }>> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
};

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <Container className="footer__grid">
        <div className="footer__brand">
          <Logo variant="light" />
          <p>Organic farming, natural food and sustainable living, grown with care from Tiruvannamalai to Kolli Hills.</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer__title">Quick Links</h2>
          <ul className="footer__list">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Contact</h2>
          <ul className="footer__list footer__list--icons">
            <li><MapPin size={16} aria-hidden="true" /> Tamil Nadu, India</li>
            <li><Phone size={16} aria-hidden="true" /> +91 00000 00000</li>
            <li><Mail size={16} aria-hidden="true" /> hello@kemfresh.com</li>
          </ul>
          <ul className="footer__social">
            {SOCIAL_LINKS.map(({ label, href, icon }) => {
              const Icon = SOCIAL_ICONS[icon];
              return (
                <li key={label}>
                  <a href={href} aria-label={label}>
                    <Icon size={18} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
      <Container className="footer__legal">
        <small>© {new Date().getFullYear()} KEM FRESH. All rights reserved.</small>
      </Container>
    </footer>
  );
}
