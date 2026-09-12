import { ExternalLink } from "lucide-react";

const GitHubIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

export const ProjectCard = ({ project }) => {
    return (
        <div className="group relative bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/40 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
            <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-purple-900/30 flex items-center justify-center border-b border-white/[0.08]">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="text-7xl font-black bg-gradient-to-br from-white/30 to-white/5 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500 select-none">
                        {project.title.charAt(0)}
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 mb-5 text-sm leading-relaxed flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech?.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/[0.05] border border-white/10 text-slate-300 rounded-full text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.08]">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium py-1.5 px-3 rounded-lg hover:bg-white/[0.06]"
                        >
                            <GitHubIcon className="w-4 h-4" />
                            <span>Código</span>
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium py-1.5 px-3 rounded-lg hover:bg-blue-500/10"
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span>Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;