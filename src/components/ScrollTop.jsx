import { ArrowUp } from "lucide-react";

export const ScrollTop = ({ showScrollTop }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!showScrollTop) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:bg-white/20 hover:border-white/40 hover:scale-110 transition-all duration-300 shadow-2xl z-50 cursor-pointer"
            aria-label="Volver arriba"
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
};

export default ScrollTop;
