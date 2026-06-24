export interface User {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;

  xp: number;
  level: number;
  streak: number;

  activePath: string;
  activeModule: string;

  badges: string[];
  certificates: string[];

  createdAt: string;
  lastActiveAt: string;
}