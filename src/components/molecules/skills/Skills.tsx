import classes from './Skills.module.scss';
import clsx from "clsx";

export const Skills = () => {
    return (
        <section className={classes.skills}>
            <h2 className="visually-hidden">My skills</h2>
            <div className={classes.skill}>
                <div className={clsx(classes.skillInner, classes.pug)}>
                    <div className={classes.skillImg}></div>
                </div>
                <p>PUG</p>
            </div>
            <div className={classes.skill}>
                <div className={clsx(classes.skillInner, classes.sass)}>
                    <div className={classes.skillImg}></div>
                </div>
                <p>SASS</p>
            </div>
            <div className={classes.skill}>
               <div className={clsx(classes.skillInner, classes.js)}>
                    <div className={classes.skillImg}></div>
                </div>
                <p>JAVASCRIPT</p>
            </div>
            <div className={classes.skill}>
                <div className={clsx(classes.skillInner, classes.gulp)}>
                    <div className={classes.skillImg}></div>
                </div>
                <p>GULP</p>
            </div>
            <div className={classes.skill}>
                <div className={clsx(classes.skillInner, classes.git)}>
                    <div className={classes.skillImg}></div>
                </div>
                <p>GIT</p>
            </div>
            <div className={classes.skill}>
                <div className={clsx(classes.skillInner, classes.figma)}>
                    <div className={classes.skillImg}></div>
                </div>
                <p>FIGMA</p>
            </div>
        </section>
    )
}
