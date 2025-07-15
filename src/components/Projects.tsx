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
        desc: 'Application de gestion de tâches type Trello, architecture Clean, JWT, filtres dynamiques.',
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
        stack: 'Java • API REST • Swing',
        desc: 'Gestion de tournois d’échecs, classement Elo et organisation des rondes (projet de groupe).',
        link: 'https://github.com/ThomasRestiau/ChessTournamentManagerAPI',
    },
];

/* ---------- 2. Composant React ---------- */
export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col items-center justify-center px-4 scroll-mt-20"
        >
            <h2 className="text-4xl font-bold mb-6">Projets</h2>

            {/* ---------- 3. Utilisation de la constante ---------- */}
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((p) => (
                    <a
                        key={p.name}
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 border rounded-xl shadow hover:shadow-lg transition"
                    >
                        <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                            {p.stack}
                        </p>
                        <p>{p.desc}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}
