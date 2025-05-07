export type TestimonialType = {
  id: number;
  quote: string;
  author: string;
  position: string;
  avatar?: string;
};

export type FeatureType = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type BlogPostType = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
};

export type HealthMetricType = {
  id: string;
  title: string;
  value: number | string;
  change: number;
  unit?: string;
  color?: string;
};

export type ChartDataPoint = {
  date: string;
  value: number;
  marker?: string;
  label?: string;
};

export type TimelineStepType = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type FAQItemType = {
  question: string;
  answer: string;
};