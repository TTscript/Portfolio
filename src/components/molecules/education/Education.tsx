import clsx from "clsx";
import classes from './Education.module.scss';

interface  ExperienceProps {
    className?: string;
}
export const Education = ({className}: ExperienceProps) => {
    return (
        <section className={classes.education}>
            <h2>Education</h2>
            <div id="education" className={classes.educationInner}>
                <div className={classes.educationItem}>
                    <h3>React. Development of Complex Front-end Applications</h3>
                    <p>09/27 - 11/28 2021</p>
                    <p>HTML Academy</p>
                </div>
                <div className={classes.educationItem}>
                    <h3>JavaScript. Architecture of Front-end Applications <span>07/26 - 09/26 2021</span></h3>
                    <p>HTML Academy</p>
                </div>
                <div className={classes.educationItem}>
                    <h3>JavaScript. Professional Development of Web Interfaces</h3>
                    <p>05/25 - 07/25 2021</p>
                    <p>HTML Academy</p>
                </div>
                <div className={classes.educationItem}>
                    <h3>HTML & CSS. Adaptive Website Coding and Automation</h3>
                    <p>03/22 - 05/23 2021</p>
                    <p>HTML Academy</p>
                </div>
                <div className={classes.educationItem}>
                    <h3>HTML & CSS. Professional Website Coding</h3>
                    <p>01/18 - 03/21 2021</p>
                    <p>HTML Academy</p>
                </div>
            </div>
        </section>
    );
};
