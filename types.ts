
export interface Testimonial {
  id: number;
  name: string;
  role: 'Parent' | 'Student' | 'Alumni';
  quote: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  path: string;
  cursorColor: string;
}

export enum CursorMode {
  NORMAL = 'NORMAL',
  EXPANDED = 'EXPANDED',
  ACADEMIC = 'ACADEMIC',
  CONTACT = 'CONTACT'
}
