import {
  learningPathDesign,
  learningPathDevelopment,
  learningPathItSoftware,
  learningPathBusiness,
  learningPathMarketing,
  learningPathPhotography,
} from '../assets/images';

// 9 category pills matching exact Figma Prototype for Search page
export const searchCategoryPills = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Cooking',
];

// 3 Centered Rows for Home page category filter section
export const homeCategoryRows = {
  row1: [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
  ],
  row2: [
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
  ],
  row3: ['Productivity', 'Web Development', 'Data Science', 'Cooking'],
};

// Category paths with lime circle icons (Exact Figma Prototype Assets)
export const learningPaths = [
  {
    name: 'Design',
    slug: 'design',
    icon: learningPathDesign,
  },
  {
    name: 'Development',
    slug: 'development',
    icon: learningPathDevelopment,
  },
  {
    name: 'IT & Software',
    slug: 'it',
    icon: learningPathItSoftware,
  },
  {
    name: 'Business',
    slug: 'business',
    icon: learningPathBusiness,
  },
  {
    name: 'Marketing',
    slug: 'marketing',
    icon: learningPathMarketing,
  },
  {
    name: 'Photography',
    slug: 'photography',
    icon: learningPathPhotography,
  },
];
