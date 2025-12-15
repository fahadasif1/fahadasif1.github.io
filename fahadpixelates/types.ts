export type PhotoCategory = string;

export interface Photo {
  id: number;
  url: string;
  title: string;
  category: string;
  width?: number; // Optional for layout hints
  height?: number; // Optional for layout hints
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string; // Lucide icon name
}

export interface NavigationItem {
  label: string;
  href: string;
}