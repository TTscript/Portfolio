import clsx from "clsx";
import classes from './Experience.module.scss';

interface  EducationProps {
    className?: string;
}
export const Experience = ({className}: EducationProps) => {
    return (
        <section className={classes.education}>
            <h2>Experience</h2>
            <ul id="experience" className={classes.educationInner}>
                <li className={classes.educationItem}>
                    <div className={classes.job}>
                        <h3>Front-end Developer <span>at Morre Software Company</span></h3>
                        <p>Aug 2022 - Present</p>
                    </div>
                    <p className={classes.responsibilities}>Technology stack - React, Nextjs, Typescript, Tailwind, RestAPI, GraphQL, GSAP, Figma, Webpack</p>
                </li>
                <li className={classes.educationItem}>
                    <div className={classes.job}>
                        <h3>Front-end Developer <span>at Accelerator HTML Academy</span></h3>
                        <p>Feb 2022 - Aug 2022</p>
                    </div>
                    <p className={classes.responsibilities}>Technology stack - HTML, PUG, SCSS, BEM, Gulp, Figma</p>
                </li>
            </ul>
        </section>
    );
};
