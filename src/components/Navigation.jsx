import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const navHeight = 60;
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        closeMobileMenu();
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '#about', label: 'Sobre Mí' },
        { href: '#projects', label: 'Proyectos' },
        { href: '#skills', label: 'Habilidades' },
        { href: '#contact', label: 'Contacto' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0b0f19]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div
                        className="text-xl font-bold transition-colors cursor-pointer hover:opacity-80 text-white"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Portafolio
                    </div>

                    {/* Menú de escritorio */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-slate-300 hover:text-white transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Botón de menú móvil */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        aria-label="Abrir menú"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Menú móvil */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ?
                    'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                    <div className="bg-[#0e1424] border border-white/10 rounded-xl shadow-2xl p-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className="block text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
