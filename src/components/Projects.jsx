import { projects } from "../data/projects";
import ProjectCard from "./ProjecCards";

export const Projects = ({ hasAnimated = {} }) => {
    return (
        <section id="projects" className="relative py-24 px-6 bg-[#0b0f19] text-white overflow-hidden">
            {/* Luces difuminadas de fondo coherentes con el tema */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/10 rounded-full blur-2xl sm:blur-3xl transform-gpu"></div>
                <div className="absolute bottom-10 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-2xl sm:blur-3xl transform-gpu"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className={`transition-all duration-500 ease-out ${hasAnimated?.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    
                    {/* Encabezado de la sección */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300 mb-4">
                            <span>Mi trabajo reciente</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                            Mis <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">proyectos</span>
                        </h2>
                    </div>

                    {/* Grid de proyectos */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;