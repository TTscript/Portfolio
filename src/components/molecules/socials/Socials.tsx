import classes from './Socials.module.scss';
import clsx from "clsx";

export const Socials = () => {
    return (
        <section id="socials" className={classes.socials}>
            <h2 className="visually-hidden">Socials</h2>
            <ul className={classes.socialsInner}>
                <li className={clsx(classes.social, classes.github)}>
                    <a className="social__img" target="_blank" href="https://github.com/TTscript"></a>
                </li>
                <li className={clsx(classes.social, classes.telegram)}>
                    <a className="social__img" target="_blank" href="tg://resolve?domain=ttscript"></a>
                </li>
                <li className={clsx(classes.social, classes.linkedin)}>
                    <a className="social__img" target="_blank" href="https://www.linkedin.com/in/timur-tokumov-572553203/"></a>
                </li>
                <li className={clsx(classes.social, classes.discord)}>
                    <a className="social__img" target="_blank" href="https://discordapp.com/users/ttscript/"></a>
                </li>
            </ul>
        </section>
    )
}
