import FadeIn from './FadeIn';

/* ---------- 1. Composant React ---------- */
export default function WhyMe() {
    return (
        <FadeIn>
            <section id="whyme"
                     className="border-2 rounded-lg border-gray-100 px-4 scroll-mt-20 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-primary-600 mb-6 mt-6">Why me ?</h2>
                <p className="text-lg leading-relaxed">
                    Je ne suis pas un profil formaté. J’ai appris à coder avec rigueur, méthode et patience — non pas en
                    recopiant des tutos, mais en menant des projets concrets, avec l’exigence d’un adulte déjà confronté
                    à la complexité du terrain.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    Je comprends les enjeux réels, j’accorde de l’importance à la clarté, à la cohérence, à la finalité
                    d’un outil. Quand je commence quelque chose, je vais jusqu’au bout. Je structure, je documente,
                    je progresse vite, et je le fais sérieusement.
                </p>
                <p className="text-lg leading-relaxed mt-4 mb-6">
                    Ce que je cherche, c’est une vraie opportunité de contribuer, de continuer à apprendre, et de faire
                    les choses bien dans une équipe qui valorise la curiosité, l’autonomie et le travail bien fait.
                </p>
            </section>
        </FadeIn>
    );
}
