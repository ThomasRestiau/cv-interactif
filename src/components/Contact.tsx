import FadeIn from './FadeIn';
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";

const handleSimpleDownload = async () => {
    try {
        const response = await fetch('/cv-interactif/cv-thomas-restiau.pdf');
        const blob = await response.blob();

        // Créer un blob avec le bon type MIME
        const pdfBlob = new Blob([blob], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(pdfBlob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'cv-thomas-restiau.pdf';
        link.setAttribute('type', 'application/pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Nettoyer
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Erreur de téléchargement:', error);
        // Fallback : ouvrir dans un nouvel onglet
        window.open('/cv-interactif/cv-thomas-restiau.pdf', '_blank');
    }
};

/* ---------- 1. Composant React ---------- */
export default function Contact() {
    return (
        <FadeIn>
            <section id="contact"
                     className="px-4 scroll-mt-20 flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-36">
                <h2 className="text-3xl font-bold text-primary-600 mb-6">Contact</h2>

                <div className="text-lg flex gap-1">

                    <a href="mailto:thomas.restiau@live.be"
                       className="text-4xl text-secondary-700 hover:text-primary-600 underline transition-colors"
                    >
                        {<FaEnvelope/>}
                    </a>


                    <a href="https://www.linkedin.com/in/thomas-restiau" target="_blank" rel="noopener noreferrer"
                       className="text-4xl text-blue-700 hover:text-primary-600 underline transition-colors"
                    >
                        {<FaLinkedin/>}
                    </a>


                    <a href="https://github.com/ThomasRestiau" target="_blank" rel="noopener noreferrer"
                       className="text-4xl text-secondary-700 hover:text-primary-600 underline transition-colors"
                    >
                        {<FaGithub/>}
                    </a>
                </div>
                <a
                    onClick={handleSimpleDownload}
                    className="cursor-pointer mt-4 ml-4 px-4 py-2 bg-primary-600 text-white rounded-xl shadow hover:bg-primary-700 transition text-sm"
                >
                    Télécharger mon CV
                </a>
            </section>
        </FadeIn>
    );
}
