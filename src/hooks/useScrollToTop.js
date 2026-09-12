import { useEffect, useState } from "react";

export const useScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        //Añadir funcion de scroll fluido
        document.documentElement.style.scrollBehavior = 'smooth';

        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return showScrollTop;
};

