import FadeIn from './FadeIn';

/* ---------- 1. Composant React ---------- */
export default function About() {
    return (
        <FadeIn>
            <section id="about"
                     className="px-4 scroll-mt-20 flex flex-col items-center justify-center text-center max-w-3xl mx-auto mt-20">
                <h2 className="text-3xl font-bold text-primary-600 mb-6">About</h2>

                <p className="text-xl font-semibold mb-4 max-w-2xl">
                    Thomas Restiau, développeur Java / Angular en reconversion avec un parcours atypique, entre
                    sciences humaines
                    et développement logiciel.
                </p>

                <p className="max-w-2xl leading-relaxed mt-4">
                    J’ai travaillé plusieurs années dans l'accompagnement clinique auprès d’enfants et d’adolescents
                    présentant
                    des troubles du développement ou des difficultés psychiques. Cet accompagnement, inscrit dans le
                    quotidien
                    et dans des ateliers spécifiques, m’a appris à poser un cadre, à observer des logiques
                    sous-jacentes, à
                    tenir compte
                    de la singularité de chaque situation, et à élaborer avec rigueur des interventions cliniques
                    précises,
                    ajustées et pertinentes.
                </p>

                <p className="max-w-2xl leading-relaxed mt-4">
                    Aujourd’hui, je transpose ces qualités dans le développement. Face à un système ou à un problème
                    technique,
                    j’aborde les choses avec méthode, patience et exigence. J’aime comprendre le fonctionnement en
                    profondeur,
                    structurer des solutions claires, et créer des applications robustes et cohérentes, pensées pour
                    durer
                    et
                    pour répondre à des besoins réels.
                </p>

                <p className="max-w-2xl leading-relaxed mt-4">
                    Formé à Technifutur® (Java/Angular), et poursuivant un bachelier en informatique (cours du soir),
                    j’ai commencé à
                    développer des projets en Java, Spring Boot, Angular, PostgreSQL, Docker… Plusieurs sont encore en
                    cours, mais chacun reflète ma volonté de progresser, de structurer, et de coder avec clarté.
                </p>

                <p className="max-w-2xl leading-relaxed mt-4">
                    Ce que j’aime, c’est structurer, clarifier, rendre intelligible. J’accorde beaucoup d’importance à
                    la
                    lisibilité du code, à l’architecture logique, et à la progression continue — technique comme
                    humaine.
                </p>

                <p className="max-w-2xl leading-relaxed mt-4">
                    Je cherche à rejoindre une équipe qui valorise la collaboration, la curiosité, l’autonomie et le
                    partage. Pas besoin d’un cadre rigide pour m’impliquer : je suis le genre de personne qui s’investit
                    naturellement, jusqu’au bout, pour faire les choses bien.
                </p>
            </section>
        </FadeIn>
    );
}
