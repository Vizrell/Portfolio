import { Layers, Server, Terminal } from "lucide-react";
import { skills } from "../data/skills";

export const Skills = ({ hasAnimated = {} }) => {
    const getCategoryConfig = (category) => {
        switch (category?.toLowerCase()) {
            case "frontend":
                return {
                    icon: <Layers className="w-5 h-5 text-blue-400" />,
                    badge: "bg-blue-500/10 border-blue-500/20 text-blue-300",
                    dot: "bg-blue-400",
                    hoverBorder: "hover:border-blue-500/40",
                };
            case "backend":
                return {
                    icon: <Server className="w-5 h-5 text-purple-400" />,
                    badge: "bg-purple-500/10 border-purple-500/20 text-purple-300",
                    dot: "bg-purple-400",
                    hoverBorder: "hover:border-purple-500/40",
                };
            default:
                return {
                    icon: <Terminal className="w-5 h-5 text-cyan-400" />,
                    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
                    dot: "bg-cyan-400",
                    hoverBorder: "hover:border-cyan-500/40",
                };
        }
    };

    return (
        <section id="skills" className="relative py-24 px-6 bg-[#0b0f19] text-white overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-400 ${hasAnimated?.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300 mb-4">
                            <span>Mis competencias</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                            Habilidades &amp; <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Tecnologías</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {skills.map((skillGroup, index) => {
                            const config = getCategoryConfig(skillGroup.category);
                            return (
                                <div
                                    key={index}
                                    className={`relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] ${config.hoverBorder} hover:bg-white/[0.05] hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-black/20 flex flex-col`}
                                >
                                    <div className="flex items-center gap-3.5 mb-6">
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${config.badge}`}>
                                            {config.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white tracking-wide">
                                                {skillGroup.category}
                                            </h3>
                                            <span className="text-xs text-slate-400">
                                                {skillGroup.items.length} tecnologías
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2.5 mt-auto">
                                        {skillGroup.items.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all duration-200 text-slate-200 text-sm font-medium flex items-center gap-2"
                                            >
                                                <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
