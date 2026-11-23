export interface NavigationChild {
  label: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children: NavigationChild[];
}

export type CategoryIconName = "leaf" | "wheat" | "house" | "users";

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: CategoryIconName;
  href: string;
}

export interface StoryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "youtube" | "twitter";
}
