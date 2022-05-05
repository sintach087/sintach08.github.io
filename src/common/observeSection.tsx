import React, {useState, useEffect } from 'react';

export const ObserveSection = (elementRef: React.RefObject<HTMLDivElement>, rootMargin: any) => {
    const [isVisible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        let observerRefValue: any | null= null;
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting))
        }, { rootMargin });

        if (elementRef.current) {
            observer.observe(elementRef.current);
            observerRefValue = elementRef.current;
        }

        return () => {
            if (observerRefValue)
                observer.unobserve(observerRefValue);
        }
    }, [elementRef, rootMargin]);

    return isVisible;
}