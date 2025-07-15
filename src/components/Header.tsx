export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 h-20 bg-white shadow p-4">
            <nav className="flex gap-8 h-full justify-center items-center">
                <a href="#about">À propos</a>
                <a href="#education">Formations</a>
                <a href="#skills">Compétences</a>
                <a href="#projects">Projets</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}
