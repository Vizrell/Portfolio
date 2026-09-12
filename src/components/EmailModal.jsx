import { useState, useEffect } from "react";
import { Mail, Copy, Check, ExternalLink, X } from "lucide-react";

export const EmailModal = ({ isOpen, onClose, email = "jesusmanuelsanchezquinonez@gmail.com" }) => {
    const [copied, setCopied] = useState(false);

    const handleClose = () => {
        setCopied(false);
        onClose();
    };

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setCopied(false);
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const copyToClipboard = async () => {
        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(email);
            } else {
                const textArea = document.createElement("textarea");
                textArea.value = email;
                textArea.style.position = "fixed";
                textArea.style.opacity = "0";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
    };

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    const mailtoUrl = `mailto:${email}`;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
            {/* Fondo para cerrar al hacer clic */}
            <div className="absolute inset-0" onClick={handleClose} />

            {/* Modal */}
            <div className="relative w-full max-w-md bg-[#0e1424] border border-white/10 rounded-2xl shadow-2xl p-6 overflow-hidden z-10 animate-fade-in-up">
                {/* Glow decorativo de fondo */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Encabezado */}
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Enviar Correo</h3>
                            <p className="text-xs text-slate-400">Elige tu forma preferida de contacto</p>
                        </div>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        aria-label="Cerrar modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Caja con la dirección de correo y botón de copiar */}
                <div className="mb-5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm text-slate-200 font-mono select-all truncate">
                        {email}
                    </span>
                    <button
                        onClick={copyToClipboard}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
                            copied
                                ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300"
                                : "bg-white/10 border border-white/10 text-white hover:bg-white/20"
                        }`}
                    >
                        {copied ? (
                            <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span>¡Copiado!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copiar</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Opciones de apertura rápida */}
                <div className="space-y-2.5">
                    <a
                        href={gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClose}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-2.5">
                            <ExternalLink className="w-4 h-4" />
                            <span>Abrir directamente en Gmail Web</span>
                        </div>
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-mono">Recomendado</span>
                    </a>

                    <a
                        href={mailtoUrl}
                        onClick={handleClose}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 text-sm font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-2.5">
                            <Mail className="w-4 h-4 text-purple-400" />
                            <span>Abrir en aplicación de correo predeterminada</span>
                        </div>
                    </a>
                </div>

                {/* Nota al pie */}
                <p className="text-[11px] text-slate-400 text-center mt-4">
                    Respondo habitualmente en menos de 24 horas hábiles.
                </p>
            </div>
        </div>
    );
};

export default EmailModal;
