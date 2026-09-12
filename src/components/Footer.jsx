export const Footer = () => {
    return (
        <footer className="py-8 px-6 border-t border-white/10 bg-[#0b0f19]">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-sm text-slate-400">
                    © {new Date().getFullYear()} Jesus Manuel Sanchez Quiñonez. Creado con React.js y Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;