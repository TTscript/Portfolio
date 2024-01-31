import classes from './Skills.module.scss';
import clsx from "clsx";
import {Skill} from "@/components/molecules";

const skills = [
    {
        classForSkill: 'nextjs',
        title: 'NEXTJS',
    },
    {
        classForSkill: 'react',
        title: 'REACT',
    },
    {
        classForSkill: 'ts',
        title: 'TYPESCRIPT',
    },
    {
        classForSkill: 'js',
        title: 'JAVASCRIPT',
    },
    {
        classForSkill: 'docker',
        title: 'DOCKER',
    },
    {
        classForSkill: 'graphql',
        title: 'GRAPHQL',
    },
    {
        classForSkill: 'webpack',
        title: 'WEBPACK',
    },
    {
        classForSkill: 'pug',
        title: 'PUG',
    },
    {
        classForSkill: 'tailwind',
        title: 'TAILWIND',
    },
    {
        classForSkill: 'sass',
        title: 'SASS',
    },
    {
        classForSkill: 'gulp',
        title: 'GULP',
    },
    {
        classForSkill: 'git',
        title: 'GIT',
    },
    {
        classForSkill: 'figma',
        title: 'FIGMA',
    },
    {
        classForSkill: 'gsap',
        title: 'GSAP',
    },
]
export const Skills = () => {
    return (
        <section className={classes.skills}>
            <h2 className="visually-hidden">My skills</h2>
            {skills.map(({classForSkill, title}) => (
                <Skill classForSkill={classForSkill} title={title} key={classForSkill}/>
            ))}
        </section>
    )
}
