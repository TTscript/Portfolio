import classes from './AllSkills.module.scss';

interface  AllSkillsProps {
    className?: string;
}
export const AllSkills = ({className}: AllSkillsProps) => {
    return (
        <section id="all-skills" className={classes.allSkills}>
            <h2>All skills</h2>
            <ul>
                <li>Pug, HTML, BEM</li>
                <li>CSS, SASS</li>
                <li>JavaScript</li>
                <li>Git, GitHub</li>
                <li>Gulp</li>
                <li>React</li>
                <li>Redux</li>
                <li>English - B1</li>
            </ul>
        </section>
    );
};
