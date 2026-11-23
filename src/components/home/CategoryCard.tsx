
import { House, Leaf, Users, Wheat } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CategoryIconName, CategoryItem } from "../../types";

const CATEGORY_ICONS: Record<CategoryIconName, LucideIcon> = {
  leaf: Leaf,
  wheat: Wheat,
  house: House,
  users: Users,
};

interface CategoryCardProps {
  item: CategoryItem;
}

export default function CategoryCard({ item }: CategoryCardProps) {
  const Icon = CATEGORY_ICONS[item.icon];

  return (
    <article className="category-card">
      <a href={item.href} className="category-card__link">
        <img
          className="category-card__image"
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
        />

        <span className="category-card__overlay" aria-hidden="true" />

        <span className="category-card__body">
          <span className="category-card__icon" aria-hidden="true">
            <Icon size={22} />
          </span>

          <span>
            <h3 className="category-card__title">{item.title}</h3>
            <p className="category-card__description">
              {item.description}
            </p>
          </span>
        </span>
      </a>
    </article>
  );
}
