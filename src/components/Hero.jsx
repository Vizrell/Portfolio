import { useState, useEffect, useMemo } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { heroData } from "../data/hero";

// Componentes SVG para redes
const GitHubIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export const Hero = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = useMemo(() => {
        return heroData.roles || (heroData.role ? [heroData.role] : ["Desarrollador Frontend"]);
    }, []);

    useEffect(() => {
        if (!roles.length) return;
        const currentRole = roles[currentTextIndex] || '';

        if (!isDeleting) {
            // Efecto de escritura
            if (currentText.length < currentRole.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentRole.slice(0, currentText.length + 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                // Pausa antes de empezar a borrar
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(50);
                }, 2000);
                return () => clearTimeout(timeout);
            }
        } else {
            // Efecto de borrado
            if (currentText.length > 0) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentRole.slice(0, currentText.length - 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                // Siguiente palabra con pequeña pausa
                const timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % roles.length);
                    setTypingSpeed(150);
                }, 400);
                return () => clearTimeout(timeout);
            }
        }
    }, [currentText, currentTextIndex, isDeleting, typingSpeed, roles]);

    const scrollToAbout = () => {
        const target = document.getElementById('about');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const renderSocialIcon = (iconName) => {
        switch (iconName?.toLowerCase()) {
            case 'github':
                return <GitHubIcon className="w-5 h-5" />;
            case 'linkedin':
                return <LinkedinIcon className="w-5 h-5" />;
            case 'mail':
            case 'email':
                return <Mail className="w-5 h-5" />;
            default:
                return null;
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0f19] text-white pt-20 pb-8 sm:pt-24 sm:pb-10 px-6">
            {/* Luces y esferas de degradado luminosas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-400 rounded-full opacity-35 blur-[120px] animate-pulse"></div>
                <div className="absolute -bottom-32 -left-32 w-[550px] h-[550px] bg-gradient-to-tr from-purple-600 via-pink-600 to-rose-500 rounded-full opacity-30 blur-[130px] animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 rounded-full opacity-25 blur-[140px] animate-pulse delay-500"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                {/* Saludo */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-sm font-medium text-slate-300 mb-4 shadow-sm backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                    <span>{heroData.greeting || "Hola, soy"}</span>
                </div>

                {/* Nombre */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-3">
                    {heroData.name}
                </h1>

                {/* Rol animado */}
                <div className="h-9 sm:h-11 flex items-center justify-center mb-4">
                    <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 underline underline-offset-8 decoration-2">
                        {currentText}
                    </span>
                </div>

                {/* Descripción */}
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed mb-6 font-normal">
                    {heroData.description}
                </p>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 w-full max-w-xs sm:max-w-none">
                    {heroData.ctaButtons?.map((button, index) => (
                        <a
                            key={index}
                            href={button.href}
                            className={`w-full sm:w-auto text-center relative group overflow-hidden px-8 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer shadow-lg ${button.variant === 'primary'
                                ? 'bg-white text-slate-950 hover:shadow-purple-500/30'
                                : 'bg-white/[0.05] text-white border border-white/20 hover:bg-white/10 hover:border-white/40'
                                }`}
                        >
                            {button.variant === 'primary' && (
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
                            )}
                            <span className={`relative z-10 ${button.variant === 'primary' ? 'group-hover:text-white transition-colors duration-300' : ''}`}>
                                {button.text}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Redes sociales */}
                {heroData.socialLinks && (
                    <div className="flex items-center gap-4 mb-6">
                        {heroData.socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.name === 'Email' ? `mailto:${social.url}` : social.url}
                                target={social.name === 'Email' ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="p-2.5 sm:p-3 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 hover:text-white hover:bg-white/15 hover:border-white/30 hover:scale-105 shadow-md transition-all"
                            >
                                {renderSocialIcon(social.icon || social.name)}
                            </a>
                        ))}
                    </div>
                )}

                {/* Estadísticas */}
                {heroData.stats && (
                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-6 max-w-md w-full">
                        {heroData.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                                <div className="text-xs sm:text-sm text-slate-400 mt-0.5">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Botón para deslizar hacia abajo */}
                <button
                    onClick={scrollToAbout}
                    className="mt-6 sm:mt-8 inline-flex flex-col items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors animate-bounce cursor-pointer"
                    aria-label="Desplazar hacia abajo"
                >
                    <span>Ver más</span>
                    <ArrowDown className="w-4 h-4" />
                </button>
            </div>

            {/* Elementos flotantes luminosos */}
            <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full opacity-70 shadow-lg shadow-blue-500/50 animate-float"></div>
            <div className="absolute top-40 right-20 w-4 h-4 bg-purple-400 rounded-full opacity-70 shadow-lg shadow-purple-500/50 animate-float delay-1000"></div>
            <div className="absolute bottom-40 left-20 w-2.5 h-2.5 bg-emerald-400 rounded-full opacity-70 shadow-lg shadow-emerald-500/50 animate-float delay-2000"></div>
            <div className="absolute bottom-20 right-10 w-3.5 h-3.5 bg-cyan-400 rounded-full opacity-70 shadow-lg shadow-cyan-500/50 animate-float delay-3000"></div>
        </section>
    );
};

export default Hero;