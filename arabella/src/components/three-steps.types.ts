import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export type Step = {
  id: string;
  title: string;
  description: string;
  note?: string;
  icon: LucideIcon;
  panel: (options: { isActive: boolean }) => ReactNode;
};


