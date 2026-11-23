import type { NavigationItem } from "../types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "Our Story",
    href: "#farms",
    children: [
      { label: "Our Mission", href: "#farms" },
      { label: "Our Farms", href: "#farms" },
    ],
  },
  {
    label: "Organic Farming",
    href: "#categories",
    children: [
      { label: "Natural Cultivation", href: "#categories" },
      { label: "Soil Health", href: "#categories" },
    ],
  },
  {
    label: "Sustainable Living",
    href: "#categories",
    children: [
      { label: "Home & Garden", href: "#categories" },
      { label: "Everyday Habits", href: "#categories" },
    ],
  },
  {
    label: "Our Products",
    href: "#market",
    children: [
      { label: "Fresh Produce", href: "#market" },
      { label: "Traditional Foods", href: "#market" },
    ],
  },
  {
    label: "Community",
    href: "#categories",
    children: [
      { label: "Farmers", href: "#categories" },
      { label: "Events", href: "#categories" },
    ],
  },
  {
    label: "Journal",
    href: "#stories",
    children: [
      { label: "Recipes", href: "#stories" },
      { label: "Farming Insights", href: "#stories" },
    ],
  },
];
