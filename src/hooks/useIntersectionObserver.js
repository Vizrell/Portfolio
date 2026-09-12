import { useEffect, useState } from "react";

export const useIntersectionObserver = () => {
    const [hasAnimated, setHasAnimated] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    // solo haz la animacion si no ha sido animado anteriormente
                    if (entry.isIntersecting) {
                        setHasAnimated(prev => {
                            if (prev[entry.target.id]) return prev;
                            return {
                                ...prev,
                                [entry.target.id]: true
                            };
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[id]').forEach(el => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, []);

    return hasAnimated;
}

