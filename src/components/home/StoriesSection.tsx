import { ArrowRight } from "lucide-react";
import { LINKS } from "../../config/links";
import { STORY_ITEMS } from "../../data/storyData";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import StoryCard from "./StoryCard";

export default function StoriesSection() {
  return (
    <section id="stories" className="stories" aria-labelledby="stories-title">
      <Container>
        <div className="stories__header">
          <SectionHeading
            title="Stories, Ideas & Inspiration"
            subtitle="Recipes, farming insights and sustainable living tips."
          />
          <a href={LINKS.journal} className="text-link">
            Read Our Journal <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="stories__grid">
          {STORY_ITEMS.map((item) => (
            <StoryCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
