import { Code, Palette, Smartphone, Zap } from "lucide-react";

export const About = ({ hasAnimated = {} }) => {
    const features = [
        {
            icon: <Code className="w-6 h-6 text-blue-400" />,
            iconBg: "bg-blue-500/10 border-blue-500/20",
            title: "Código limpio",
            description: "Crear código escalable, modular y legible manteniendo siempre buenas prácticas y estándares."
        },
        {
            icon: <Palette className="w-6 h-6 text-purple-400" />,
            iconBg: "bg-purple-500/10 border-purple-500/20",
            title: "UI/UX Design",
            description: "Diseño intuitivo, moderno y centrado en el usuario para una experiencia fluida y atractiva."
        },
        {
            icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
            iconBg: "bg-cyan-500/10 border-cyan-500/20",
            title: "Responsive",
            description: "Diseño web perfectamente adaptable a cualquier dispositivo: móviles, tablets y monitores."
        },
        {
            icon: <Zap className="w-6 h-6 text-amber-400" />,
            iconBg: "bg-amber-500/10 border-amber-500/20",
            title: "Performance",
            description: "Optimización de velocidad y tiempos de carga para garantizar una interacción rápida e instantánea."
        }
    ];

    return (
        <section id="about" className="relative py-24 px-6 bg-[#0b0f19] text-white overflow-hidden">
            {/* Luces difuminadas de fondo que conectan con los tonos del Hero */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/10 rounded-full blur-2xl sm:blur-3xl transform-gpu"></div>
                <div className="absolute bottom-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-2xl sm:blur-3xl transform-gpu"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className={`transition-all duration-500 ease-out ${hasAnimated?.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    
                    {/* Encabezado de la sección */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300 mb-4">
                            <span>Conóceme más</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                            Sobre <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">mí</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Columna de texto descriptivo */}
                        <div className="space-y-6">
                            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light">
                                Soy un <span className="text-white font-semibold">desarrollador frontend</span> con experiencia en la creación de interfaces web modernas, fluidas y responsivas.
                            </p>
                            <p className="text-slate-400 leading-relaxed text-base">
                                Me apasiona transformar ideas y diseños en aplicaciones web dinámicas y escalables. Tengo sólidas bases en React, Tailwind CSS y JavaScript moderno, siempre buscando escribir código limpio, testeable y eficiente.
                            </p>
                            <p className="text-slate-400 leading-relaxed text-base">
                                Constantemente estoy explorando nuevas herramientas y tecnologías (como Next.js, Node.js y flujos de trabajo asistidos por IA) para elevar la calidad de cada proyecto.
                            </p>
                        </div>

                        {/* Columna con tarjetas de características */}
                        <div className="grid sm:grid-cols-2 gap-5">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/40 hover:bg-white/[0.06] hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/20 group"
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-4 ${feature.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;