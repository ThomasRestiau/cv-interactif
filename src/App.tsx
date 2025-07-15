import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
    return (
        <>
            <Header />
            <main className="flex flex-col gap-y-20">
                <About />
                <Education />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </>
    );
}
