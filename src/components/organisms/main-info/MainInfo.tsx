import {AboutMe, AllSkills, Experience, Projects, Strengths} from "@/components/molecules";
import classes from './MainInfo.module.scss';
import {Education} from "@/components/molecules/education/Education";

export const MainInfo = () => {
    return (
        <section className={classes.mainInfo}>
            <h1 className="visually-hidden">Main information</h1>
            <AboutMe />
            <AllSkills />
            <Strengths />
            <Projects />
            <Experience />
            <Education />
        </section>
    )
}
