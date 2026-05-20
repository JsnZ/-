export interface Course {
  id: string;
  level: 'high' | 'mid';
  title: string;
  tags: string[];
  lessons: number;
  duration: string;
  students: string;
  rating: number;
  highlight: string;
  originalPrice?: number;
  price: string;
  priceLabel: string;
  recommendStars: number;
}

export interface SyllabusItem {
  id: string;
  title: string;
  content: string;
}

export interface StepItem {
  step: number;
  title: string;
  iconName: 'UserPlus' | 'MessageSquare' | 'MonitorPlay' | 'Rocket';
  isSuccessStyle?: boolean;
}
