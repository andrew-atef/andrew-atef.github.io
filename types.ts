import React from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  details: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  type: string;
}

export interface Skill {
  name: string;
  level: string;
  icon?: React.ReactNode;
}

export type BlogCategory = 'Backend' | 'Laravel' | 'Database' | 'DevOps' | 'Architecture' | 'Best Practices';

export interface BlogArticle {
  id: string;
  slug: string;
  category: BlogCategory;
  image: string;
  date: string;
  readTime: number;
  tags: string[];
}