export interface NavItem {
  id: string;
  number: string;
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  relativeImagePath: string;
  tags: string[];
  ctaLabel: string;
  href: string;
  clientType: string;
  highlightText: string;
  liveUrl?: string;
  isExternal?: boolean;
}

export interface ServiceItem {
  number: string;
  title: string;
  badge: string;
  description: string;
  ctaText: string;
  serviceKey: string;
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
