
import { Testimonial, NavItem } from './types';

export const SCHOOL_STATS = [
  { label: 'Founded', value: '2006' },
  { label: 'Students', value: '3000+' },
  { label: 'Teachers', value: '100+' },
  { label: 'Curriculum', value: 'CBSE' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Khanna',
    role: 'Parent',
    quote: "The individual attention my children receive at S.G.N is unparalleled. The practical approach to learning has transformed their curiosity into knowledge.",
    avatar: 'https://picsum.photos/seed/p1/200/200'
  },
  {
    id: 2,
    name: 'Ananya Sharma',
    role: 'Student',
    quote: "I love the big sports ground! Whether it's our annual day performances on the prayer ground or football matches, there's always something exciting happening.",
    avatar: 'https://picsum.photos/seed/s1/200/200'
  },
  {
    id: 3,
    name: 'Vikram Mehta',
    role: 'Alumni',
    quote: "S.G.N International gave me the foundation to pursue my dreams in engineering. The labs and the teachers guided me every step of the way.",
    avatar: 'https://picsum.photos/seed/a1/200/200'
  }
];

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/', cursorColor: '#1e3a8a' },
  { label: 'About', path: '/about', cursorColor: '#b45309' },
  { label: 'Academics', path: '/academics', cursorColor: '#047857' },
  { label: 'Gallery', path: '/gallery', cursorColor: '#7c3aed' },
  { label: 'Contact', path: '/contact', cursorColor: '#be123c' },
];
