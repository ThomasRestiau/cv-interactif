import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';

export default function App() {
    return (
        <>

            <Header/>
            <main className="flex flex-col gap-y-40 pt-20">
                <About/>
                <Education/>
                <Skills/>
                <Projects/>
                <WhyMe/>
                <Contact/>
            </main>
        </>
    );
}
