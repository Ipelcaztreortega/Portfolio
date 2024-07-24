import { MainView } from "../components/MainView";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import Footer from "../components/Footer";


export const Home = () => {
    return(
        <div className='h-screen'>
            <MainView />
            <About />
            <Experience />
            <Projects />
            <Footer/>
        </div>
    )
}