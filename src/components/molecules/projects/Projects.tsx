import clsx from "clsx";
import classes from './Projects.module.scss';

interface  ProjectsProps {
    className?: string;
}
export const Projects = ({className}: ProjectsProps) => {
    return (
        <section id="projects" className={classes.projects}>
            <h2>My projects</h2>
            <div className={classes.projectsInner}>
                <a className={classes.project} href="https://morre.tech" target="_blank"><img src="/images/projects/morre.png" height={200} width={300} alt="Morre" /></a>
                <a className={classes.project} href="https://metaforra.com" target="_blank"><img src="/images/projects/metaforra.png" height={200} width={300} alt="Metaforra" /></a>
                <a className={classes.project} href="https://ahau.kz" target="_blank"><img src="/images/projects/ahau.png" height={200} width={300} alt="Ahau" /></a>
                <a className={classes.project} href="https://qabat.com" target="_blank"><img src="/images/projects/qabat.png" height={200} width={300} alt="Qabat" /></a>
                <a className={classes.project} href="https://ttscript.github.io/Tokumov_fitness/build/" target="_blank"><img src="/images/projects/fitness.png" height={200} width={300} alt="Fitness" /></a>
                <a className={classes.project} href="https://ttscript.github.io/Tokumov_jewellery/build/" target="_blank"><img src="/images/projects/jewellery.png" height={200} width={300} alt="Jewellery" /></a>
                <a className={classes.project} href="https://ttscript.github.io/Tokumov_smart-device/build/" target="_blank"><img src="/images/projects/smart-device.png" height={200} width={300} alt="Smart Device" /></a>
                <a className={classes.project} href="https://ttscript.github.io/Tokumov_bycicles/build/" target="_blank"><img src="/images/projects/bycicles.png" height={200} width={300} alt="Moon. Bycicles store" /></a>
                <a className={classes.project} href="https://ttscript.github.io/Tokumov_way/src/" target="_blank"><img src="/images/projects/travelling-to-europe.png" height={200} width={300} alt="Travelling to Europe" /></a>
                <a className={classes.project} href="https://ttscript.github.io/1675795-keksobooking-23/" target="_blank"><img src="/images/projects/keksobooking.png" height={200} width={300} alt="Keksobooking" /></a>
                <a className={classes.project} href="https://ttscript.github.io/1675795-cat-energy-22/" target="_blank"><img src="/images/projects/cat-energy.png" height={200} width={300} alt="Cat Energy" /></a>
                <a className={classes.project} href="https://ttscript.github.io/1675795-sedona-30/" target="_blank"><img src="/images/projects/sedona.png" height={200} width={300} alt="Sedona" /></a>
            </div>
        </section>
    );
};
