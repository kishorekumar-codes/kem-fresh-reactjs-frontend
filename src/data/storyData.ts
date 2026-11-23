import { IMAGE_ASSETS } from "../config/imageAssets";
import type { SocialLink, StoryItem } from "../types";

export const STORY_ITEMS: StoryItem[] = [
  {
    id: "millet-bowl",
    title: "A Wholesome Millet Bowl for Busy Days",
    description: "A simple seasonal recipe built from farm-fresh vegetables.",
    image: IMAGE_ASSETS.stories.organicRecipe,
    imageAlt: "Colourful bowl of vegetables and grains",
    href: "#stories",
  },
  {
    id: "seedlings",
    title: "How Healthy Soil Grows Stronger Seedlings",
    description: "What we learned from tending soil without chemicals.",
    image: IMAGE_ASSETS.stories.farming,
    imageAlt: "Young seedling sprouting from soil",
    href: "#stories",
  },
  {
    id: "garden-home",
    title: "Making a Garden Part of Your Home",
    description: "Easy ways to bring natural living to any space.",
    image: IMAGE_ASSETS.stories.farmhouse,
    imageAlt: "Farmhouse with a natural garden",
    href: "#stories",
  },
  {
    id: "traditional-grains",
    title: "Traditional Grains Worth Bringing Back",
    description: "Why old varieties deserve a place on your plate.",
    image: IMAGE_ASSETS.stories.traditionalFood,
    imageAlt: "Bowl of traditional grains",
    href: "#stories",
  },
];

export const FOOTER_LINKS = [
  { label: "Our Products", href: "#market" },
  { label: "Our Farms", href: "#farms" },
  { label: "Community", href: "#categories" },
  { label: "Journal", href: "#stories" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "Twitter", href: "#", icon: "twitter" },
];
