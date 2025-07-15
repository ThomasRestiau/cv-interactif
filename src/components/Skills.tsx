const skills = {
    langages: ['Java', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'C', 'C++', 'Python'],
    frameworks: ['Spring Boot', 'Angular', 'Jakarta EE', 'Hibernate/JPA', 'React (en cours)'],
    outils: ['PostgreSQL', 'Maven', 'Git', 'Tomcat', 'IntelliJ', 'Docker', 'Wireshark'],
    tests: ['JUnit','Mockito'],
    methodologies: ['UML', 'Agile/Scrum'],
};

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-4 scroll-mt-20">

            <h2 className="text-4xl font-bold mb-6">Compétences</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {Object.entries(skills).map(([cat, list]) => (
                    <div key={cat}>
                        <h3 className="text-xl font-semibold mb-2 capitalize">{cat}</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {list.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
