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
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 0, x: -30},
};

/* ---------- 0. Structure de données ---------- */
interface Diploma {
    period: string;
    title: string;
    school: string;
}

/* ---------- 1. Données ---------- */
const studies: Diploma[] = [
    {
        period: '2024 – 2028',
        title: 'Bachelier informatique – Développement d’applications',
        school: 'Institut Saint-Laurent (cours du soir)'
    },
    {period: '2024 – 2025', title: 'Formation qualifiante - Développeur Java / Angular', school: 'Technifutur®'},
    {
        period: '2024',
        title: "Initiation à la programmation & définition d'un projet professionnel",
        school: 'Technifutur®'
    },
    {
        period: '2015 – 2018',
        title: 'Bachelier Assistant en psychologie (Grande distinction)',
        school: 'HEPL – Haute École de la Province de Liège'
    },
    {period: '2015', title: 'Formation Création d’entreprise', school: 'CreaPME Liège'},
    {period: '2014', title: "Éducation & Communication à l'Environnement", school: 'CERES – ULg'},
    {period: '2012 – 2014', title: 'Interprète Nature et Environnement', school: 'CRIE de Liège'},
    {period: '2010 – 2012', title: 'Etudes du Bachelier en Sciences agronomiques', school: 'ISIa Huy'},
    {period: '2009 – 2010', title: '7ᵉ préparatoire Mathématiques', school: 'Collège Saint-Barthélemy'},
    {period: '2003 – 2009', title: 'CESS Latin-Math-Sciences', school: 'Athénée Royal de Waremme'},
];

/* ---------- 2. Composant React ---------- */
export default function Education() {
    return (
        <FadeIn>
            <section
                id="education"
                className="px-4 scroll-mt-20 flex flex-col items-center justify-center max-w-3xl mx-auto"
            >

                <h2 className="text-3xl font-bold text-primary-600 mb-6">Education</h2>

                <motion.div
                    className="w-full max-w-3xl space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.2}}
                >
                    {studies.map(({period, title, school}) => (
                        <motion.div
                            key={period + title}
                            className="flex flex-col md:flex-row md:items-baseline"
                            variants={itemVariants}
                        >
                            <span className="md:w-32 font-semibold text-primary">{period}</span>
                            <div>
                                <p className="font-medium">{title}</p>
                                <p className="text-sm text-gray-600">{school}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </FadeIn>
    );
}
