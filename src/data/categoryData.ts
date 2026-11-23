import { IMAGE_ASSETS } from "../config/imageAssets";
import type { CategoryItem } from "../types";

export const CATEGORY_ITEMS: CategoryItem[] = [
  {
    id: "organic-farming",
    title: "Organic Farming",
    description: "Healthy soil, natural cultivation",
    image: IMAGE_ASSETS.categories.organicFarming,
    imageAlt: "Small green seedling growing in dark soil",
    icon: "leaf",
    href: "#categories",
  },
  {
    id: "natural-food",
    title: "Natural Food",
    description: "Traditional & wholesome",
    image: IMAGE_ASSETS.categories.naturalFood,
    imageAlt: "Traditional grains in a wooden bowl",
    icon: "wheat",
    href: "#market",
  },
  {
    id: "sustainable-living",
    title: "Sustainable Living",
    description: "Small changes, big impact",
    image: IMAGE_ASSETS.categories.sustainableLiving,
    imageAlt: "Countryside farmhouse surrounded by a garden",
    icon: "house",
    href: "#stories",
  },
  {
    id: "our-community",
    title: "Our Community",
    description: "Together for a greener tomorrow",
    image: IMAGE_ASSETS.categories.community,
    imageAlt: "Farmers and community members standing together",
    icon: "users",
    href: "#stories",
  },
];
