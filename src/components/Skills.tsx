import FadeIn from './FadeIn';
import { motion } from 'framer-motion';
import {
    SiSpringboot,
    SiAngular,
    SiPostgresql,
    SiDocker,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiGit,
    SiC,
    SiCplusplus,
    SiPython,
    SiReact,
    SiFlutter,
    SiHibernate,
    SiJunit5,
    SiUml,
    SiDart
} from 'react-icons/si';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const itemVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -30 },
};

/* ---------- 1. Données ---------- */
const skills = [
    {
      category: 'Langages',
        items:[
            { name: 'Java', icon: ''},
            { name: 'TypeScript', icon: <SiTypescript />},
            { name: 'JavaScript', icon: <SiJavascript />},
            { name: 'HTML5', icon: <SiHtml5 />},
            { name: 'CSS3', icon: <SiCss3 />},
            { name: 'C', icon: <SiC />},
            { name: 'C++', icon: <SiCplusplus />},
            { name: 'Python', icon: <SiPython />},
        ],
    },
    {
        category: 'Frameworks',
        items:[
            { name: 'Spring Boot', icon: <SiSpringboot />},
            { name: 'Angular', icon: <SiAngular />},
            { name: 'Jakarta EE', icon: ''},
            { name: 'Hibernate/JPA', icon: <SiHibernate />},
        ],
    },
    {
        category: 'Outils',
        items:[
            { name: 'PostgreSQL', icon: <SiPostgresql />},
            { name: 'Maven', icon: ''},
            { name: 'Git', icon: <SiGit/>},
            { name: 'Docker', icon: <SiDocker/>},
        ],
    },
    {
        category: 'Tests',
        items:[
            { name: 'JUnit', icon: <SiJunit5 />},
            { name: 'Mockito', icon: ''},
        ],
    },
    {
        category: 'Methodologies',
        items:[
            { name: 'UML', icon: <SiUml />},
            { name: 'Agile/Scrum', icon: ''},
        ],
    },
    {
        category: 'Apprentissage en cours',
        items:[
            { name: 'Dart', icon: <SiDart />},
            { name: 'Flutter', icon: <SiFlutter />},
            { name: 'React', icon: <SiReact />},
        ],
    },

];

/* ---------- 2. Composant React ---------- */
export default function Skills() {

    return (
        <FadeIn>
            <section id="skills"
                     className="px-4 scroll-mt-20 flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
            >

                <h2 className="text-3xl font-bold text-primary-600 mb-6">Skills</h2>

                {/* ---------- 3. Utilisation des données ---------- */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.2}}
                >
                    {skills.map(({ category, items }) => (
                        <motion.div key={category} variants={itemVariants}>
                            <h3 className="text-xl font-semibold mb-2 capitalize">{category}</h3>
                            <ul className="list-disc list-inside space-y-1">
                                {items.map(({ name, icon }) => (
                                    <li key={name} className="flex items-center gap-2">
                                        <span>{name}</span>
                                        <span>{icon}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </FadeIn>
    );
}
