import FadeIn from './FadeIn';
import {motion} from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const itemVariants = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
};

/* ---------- 1. Données ---------- */
const projects = [
    {
        name: 'NaturaLog',
        stack: 'Spring Boot • Angular • PostgreSQL • OpenAI • GBIF API',
        desc: "Atlas interactif des espèces : recherche via GBIF, fiches enrichies par IA, cartes, filtres et chatbot.",
        link: 'https://github.com/ThomasRestiau/NaturaLog_backend',
    },
    {
        name: 'TaskBoard',
        stack: 'Spring Boot • Angular • PostgreSQL',
        desc: 'Application de gestion de tâches type Trello, architecture en couches, JWT, filtres dynamiques.',
        link: 'https://github.com/ThomasRestiau/TaskBoard-backend',
    },
    {
        name: 'Candy Crush (C)',
        stack: 'C • Console',
        desc: 'Moteur de jeu : file circulaire dynamique, détection/suppression de suites, gestion mémoire.',
        link: 'https://github.com/ThomasRestiau/CandyCrush',
    },
    {
        name: 'Chess Tournament Manager',
        stack: 'Java • API REST',
        desc: 'Gestion de tournois d’échecs, classement Elo et organisation des rondes (projet de groupe).',
        link: 'https://github.com/ThomasRestiau/ChessTournamentManagerAPI',
    },
];

/* ---------- 2. Composant React ---------- */
export default function Projects() {
    return (
        <FadeIn>
            <section
                id="projects"
                className="px-4 scroll-mt-20 flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
            >
                <h2 className="text-3xl font-bold text-primary-600 mb-6">Projects</h2>

                {/* ---------- 3. Utilisation des données ---------- */}
                <motion.div
                    className="grid gap-8 md:grid-cols-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.2}}
                >
                    {projects.map((p) => (

                        <motion.a
                            key={p.name}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            className="block p-6 border rounded-xl shadow hover:shadow-lg transition hover:border-primary-500"
                        >
                            <h3 className="text-2xl font-semibold mb-2 text-primary">{p.name}</h3>
                            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                                {p.stack}
                            </p>
                            <p>{p.desc}</p>
                        </motion.a>

                    ))}
                </motion.div>
            </section>
        </FadeIn>
    );
}
