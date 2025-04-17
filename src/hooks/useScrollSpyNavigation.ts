import { useEffect, useState } from 'react'

export const useScrollSpyNavigation = (sectionIds: string[], offset = 0.5) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);

    useEffect(() => {
      const observers: IntersectionObserver[] = [];
  
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
  
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: offset, // porcentaje visible
          }
        );
  
        observer.observe(element);
        observers.push(observer);
      });
  
      return () => {
        observers.forEach((observer) => observer.disconnect());
      };
    }, [sectionIds, offset]);
  
    return activeSection;
}
