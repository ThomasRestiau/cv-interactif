interface Diploma {
    period: string;
    title: string;
    school: string;
}

const studies: Diploma[] = [
    { period: '2024 – 2028', title: 'Bachelier informatique – Développement d’applications', school: 'Institut Saint-Laurent (cours du soir)' },
    { period: '2024 – 2025', title: 'Formation qualifiante - Développeur Java / Angular', school: 'Technifutur®' },
    { period: '2024',        title: "Initiation à la programmation & définition d'un projet professionnel", school: 'Technifutur®' },
    { period: '2015 – 2018', title: 'Bachelier Assistant en psychologie (Grande distinction)', school: 'HEPL – Haute École de la Province de Liège' },
    { period: '2015',        title: 'Formation Création d’entreprise', school: 'CreaPME Liège' },
    { period: '2014',        title: "Éducation & Communication à l'Environnement", school: 'CERES – ULg' },
    { period: '2012 – 2014', title: 'Interprète Nature et Environnement', school: 'CRIE de Liège' },
    { period: '2010 – 2012', title: 'Sciences agronomiques (bachelier – 2 ans)', school: 'ISIa Huy' },
    { period: '2009 – 2010', title: '7ᵉ préparatoire Mathématiques', school: 'Collège Saint-Barthélemy' },
    { period: '2003 – 2009', title: 'CESS Latin-Math-Sciences', school: 'Athénée Royal de Waremme' },
];

export default function Education() {
    return (
        <section id="education" className="min-h-screen flex flex-col items-center justify-center px-4 scroll-mt-20">
            <h2 className="text-4xl font-bold mb-6">Études &amp; Formations</h2>

            <div className="w-full max-w-3xl space-y-6">
                {studies.map(({ period, title, school }) => (
                    <div key={period + title} className="flex flex-col md:flex-row md:items-baseline">
                        <span className="md:w-32 font-semibold text-primary">{period}</span>
                        <div>
                            <p className="font-medium">{title}</p>
                            <p className="text-sm text-gray-600">{school}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
