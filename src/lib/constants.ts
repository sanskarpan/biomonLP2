import { 
  Activity, 
  AlertTriangle, 
  ArrowUpRight, 
  Brain, 
  Database, 
  LineChart, 
  Lock, 
  MessageSquare, 
  Smartphone, 
  UserPlus 
} from 'lucide-react';

import type { BlogPostType, FAQItemType, FeatureType, HealthMetricType, TestimonialType, TimelineStepType } from './types';

export const SITE_CONFIG = {
  name: 'Biomon',
  description: 'Personal health intelligence platform',
  url: 'https://biomon.health',
  logo: {
    alt: 'Biomon Logo',
    width: 40,
    height: 40,
  },
  social: {
    twitter: 'https://twitter.com/biomonhealth',
    instagram: 'https://instagram.com/biomonhealth',
    linkedin: 'https://linkedin.com/company/biomon',
  },
};

export const FEATURES: FeatureType[] = [
  {
    id: 1,
    title: '360° Health Dashboard',
    description: 'Visualize all your health metrics in one unified interface that highlights what matters.',
    icon: 'Activity',
  },
  {
    id: 2,
    title: 'AI-Powered Recommendations',
    description: 'Get personalized insights based on your unique health patterns and goals.',
    icon: 'Brain',
  },
  {
    id: 3,
    title: 'Trend Alerts & Daily Nudges',
    description: 'Receive proactive notifications when metrics shift or require attention.',
    icon: 'AlertTriangle',
  },
  {
    id: 4,
    title: 'Smart Coaching & Community',
    description: 'Connect with like-minded health optimizers and get guidance from experts.',
    icon: 'MessageSquare',
  },
  {
    id: 5,
    title: 'Privacy & Ownership (HIPAA)',
    description: 'Your data remains yours, with industry-leading privacy protection.',
    icon: 'Lock',
  },
  {
    id: 6,
    title: 'Connect All Your Devices',
    description: 'Seamlessly integrate with Apple Watch, Oura, Fitbit, Garmin and more.',
    icon: 'Smartphone',
  },
];

export const TIMELINE_STEPS: TimelineStepType[] = [
  {
    id: 1,
    title: 'Connect Devices & Upload Labs',
    description: 'Link your wearables and upload existing lab results to establish your baseline.',
    icon: 'Database',
  },
  {
    id: 2,
    title: 'Get Your Health Score',
    description: 'Receive your comprehensive assessment with strengths and areas for improvement.',
    icon: 'LineChart',
  },
  {
    id: 3,
    title: 'Receive Personalized Tips',
    description: 'Get actionable recommendations tailored to your unique health profile.',
    icon: 'ArrowUpRight',
  },
  {
    id: 4,
    title: 'Track Progress with Smart Charts',
    description: 'Monitor improvements in real-time with intelligent visualization tools.',
    icon: 'Activity',
  },
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: 1,
    quote: 'Biomon completely changed my workouts. I found my iron was low during training weeks – something I\'d never have caught without this app.',
    author: 'Alex P.',
    position: 'Endurance Athlete',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=240'
  },
  {
    id: 2,
    quote: 'Finally, all my health data in one place! The correlation between my sleep quality and recovery time was a game-changer for my training schedule.',
    author: 'Sarah M.',
    position: 'CrossFit Coach',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=240'
  },
  {
    id: 3,
    quote: 'As someone who tracks everything, Biomon gives me insights I never would have connected on my own. Worth every penny for serious health optimizers.',
    author: 'Michael J.',
    position: 'Biohacker',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=240'
  },
];

export const BLOG_POSTS: BlogPostType[] = [
  {
    id: 1,
    title: '5 Lab Metrics That Actually Matter',
    excerpt: 'Beyond basic bloodwork: key biomarkers that provide deeper insights into your health trajectory.',
    date: '2025-03-15',
    readTime: '8 min',
    category: 'Lab Testing',
    image: 'https://images.pexels.com/photos/8376305/pexels-photo-8376305.jpeg?auto=compress&cs=tinysrgb&w=1280',
    slug: '5-lab-metrics-that-matter'
  },
  {
    id: 2,
    title: 'How Your Sleep Impacts Metabolism',
    excerpt: 'The critical connection between sleep quality, hormonal balance, and metabolic function.',
    date: '2025-03-01',
    readTime: '6 min',
    category: 'Sleep',
    image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=1280',
    slug: 'sleep-metabolism-connection'
  },
  {
    id: 3,
    title: 'AI in Biohacking: What to Expect Next',
    excerpt: 'How machine learning is transforming personal health optimization and predictive wellness.',
    date: '2025-02-15',
    readTime: '10 min',
    category: 'AI & Health',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1280',
    slug: 'ai-biohacking-future'
  },
  {
    id: 4,
    title: 'Wearable Tech: Beyond the Basics',
    excerpt: 'Advanced metrics from consumer devices that provide clinical-grade insights.',
    date: '2025-02-01',
    readTime: '7 min',
    category: 'Devices',
    image: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1280',
    slug: 'wearable-tech-advanced-insights'
  },
];

export const HEALTH_METRICS: HealthMetricType[] = [
  {
    id: 'health-score',
    title: 'Health Score',
    value: 84,
    change: 3,
    unit: '/100',
    color: 'chart-2'
  },
  {
    id: 'recovery-index',
    title: 'Recovery Index',
    value: 92,
    change: 7,
    unit: '%',
    color: 'chart-1'
  },
  {
    id: 'vitamin-risk',
    title: 'Vitamin D',
    value: 28,
    change: -12,
    unit: 'ng/mL',
    color: 'destructive'
  },
  {
    id: 'sleep-quality',
    title: 'Sleep Quality',
    value: 76,
    change: 4,
    unit: '%',
    color: 'chart-4'
  },
];

export const HEART_RATE_DATA: ChartDataPoint[] = [
  { date: 'Mon', value: 68 },
  { date: 'Tue', value: 72 },
  { date: 'Wed', value: 75, marker: 'Workout', label: 'High intensity interval training' },
  { date: 'Thu', value: 69 },
  { date: 'Fri', value: 72 },
  { date: 'Sat', value: 82, marker: 'Stress', label: 'Elevated stress detected' },
  { date: 'Sun', value: 71 },
];

export const SLEEP_DATA: ChartDataPoint[] = [
  { date: 'Mon', value: 7.2 },
  { date: 'Tue', value: 6.8 },
  { date: 'Wed', value: 8.1, marker: 'Optimal', label: 'Best recovery night' },
  { date: 'Thu', value: 6.5 },
  { date: 'Fri', value: 5.9, marker: 'Poor', label: 'Low deep sleep detected' },
  { date: 'Sat', value: 7.8 },
  { date: 'Sun', value: 7.5 },
];

export const GLUCOSE_DATA: ChartDataPoint[] = [
  { date: 'Mon', value: 92 },
  { date: 'Tue', value: 88 },
  { date: 'Wed', value: 95 },
  { date: 'Thu', value: 99 },
  { date: 'Fri', value: 103, marker: 'Alert', label: 'Above optimal range' },
  { date: 'Sat', value: 97 },
  { date: 'Sun', value: 91 },
];

export const FAQS: FAQItemType[] = [
  {
    question: 'Which wearable devices does Biomon support?',
    answer: 'Biomon integrates with all major wearables including Apple Watch, Oura Ring, Fitbit, Garmin, Whoop, Biostrap, and more. We\'re constantly adding support for new devices and can import historical data from Apple Health and Google Fit.'
  },
  {
    question: 'How is Biomon different from my device\'s native app?',
    answer: 'Device apps focus on data from a single source. Biomon unifies multiple data streams (wearables, labs, self-reported metrics) and applies AI to find correlations and actionable insights across all your health inputs that single-source apps miss.'
  },
  {
    question: 'Is my health data secure and private?',
    answer: 'Absolutely. Biomon is HIPAA-compliant and uses bank-level encryption for all your data. You own your data, and we never sell it to third parties. You can export or delete your data at any time.'
  },
  {
    question: 'Do I need to be a health expert to use Biomon?',
    answer: 'Not at all. While Biomon is powerful enough for advanced biohackers, it\'s designed to be accessible to anyone interested in optimizing their health. Our AI translates complex data into simple, actionable advice tailored to your health literacy level.'
  },
  {
    question: 'Can Biomon integrate with my lab test results?',
    answer: 'Yes! Biomon supports major lab providers including LabCorp, Quest Diagnostics, and specialty labs like InsideTracker. You can also manually upload PDF lab results from any provider.'
  }
];

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/dashboard-preview', label: 'Dashboard' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];