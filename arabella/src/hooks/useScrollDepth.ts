import { useEffect, useRef } from 'react';
import { track } from '../lib/analytics';

const MILESTONES = [25, 50, 75, 100] as const;

/** Dispara `scroll_depth` uma única vez por marco alcançado. */
export const useScrollDepth = () => {
  const fired = useRef(new Set<number>());

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        return;
      }

      const percent = (window.scrollY / scrollable) * 100;

      MILESTONES.forEach(milestone => {
        if (percent + 0.5 >= milestone && !fired.current.has(milestone)) {
          fired.current.add(milestone);
          track({ name: 'scroll_depth', percent: milestone });
        }
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
};
