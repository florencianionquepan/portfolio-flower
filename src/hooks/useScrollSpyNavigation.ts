import { useEffect, useState } from 'react'

export const useScrollSpyNavigation = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);

    useEffect(() => {
      const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
  
      if (elements.length === 0) return;
  
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleSections = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
  
          if (visibleSections.length > 0) {
            const mostVisible = visibleSections[0];
            const id = mostVisible.target.id;
            setActiveSection(id);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Umbrales 0, 0.01, ..., 1
        }
      );
  
      elements.forEach((el) => observer.observe(el));
  
      return () => {
        observer.disconnect();
      };
    }, [sectionIds]);
  
    return activeSection;
}
