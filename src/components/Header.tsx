import { useState } from "react";
import ThemeToggle from './ThemeToggle';

/* ---------- 1. Données ---------- */
const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#whyme", label: "WhyMe" },
    { href: "#contact", label: "Contact" },
];

/* ---------- 2. Composant React ---------- */
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="bg-theme border-b-2 border-gray-100 fixed top-0 left-0 right-0 h-20 px-4 z-50">
            <div className="flex items-center justify-around h-full max-w-5xl mx-auto">
                {/* Desktop nav */}
                {/* ---------- 3. Utilisation des données ---------- */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href}
                           className="text-theme hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Mobile button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex items-center justify-center w-10 h-10 focus:outline-none"
                    aria-label="Menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {/* ---------- 3. Utilisation des données ---------- */}
            {isOpen && (
                <nav className="bg-theme md:hidden absolute top-20 left-0 right-0 bg-white shadow-md py-4 px-6 space-y-4 z-40">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block text-center text-lg text-theme hover:text-primary-500 transition-colors"
                            onClick={closeMenu}
                        >
                            {link.label}
                        </a>
                    ))}
                    <ThemeToggle />
                </nav>
            )}
        </header>
    );
}
