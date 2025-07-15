export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 scroll-mt-20">
            <h2 className="text-4xl font-bold mb-6">Contact</h2>

            <ul className="space-y-3 text-lg text-center">
                <li>
                    <a href="mailto:thomas.restiau@live.be" className="underline">thomas.restiau@live.be</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/thomas-restiau" target="_blank" rel="noopener noreferrer" className="underline">
                        linkedin.com/in/thomas-restiau
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ThomasRestiau" target="_blank" rel="noopener noreferrer" className="underline">
                        github.com/ThomasRestiau
                    </a>
                </li>
            </ul>
        </section>
    );
}
