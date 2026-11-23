import type { StoryItem } from "../../types";

interface StoryCardProps {
  item: StoryItem;
}

export default function StoryCard({ item }: StoryCardProps) {
  return (
    <article className="story-card">
      <a href={item.href} className="story-card__link">
        <div className="story-card__media">
          <img src={item.image} alt={item.imageAlt} loading="lazy" />
        </div>
        <h3 className="story-card__title">{item.title}</h3>
        <p className="story-card__description">{item.description}</p>
      </a>
    </article>
  );
}
