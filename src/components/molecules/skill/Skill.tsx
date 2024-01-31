import classes from './Skill.module.scss';
import clsx from "clsx";
import {FC} from "react";

interface SkillProps {
    classForSkill: string;
    title: string;
    className?: string;
}
export const Skill: FC<SkillProps> = ({classForSkill, title, className}) => {
    return (
        <div className={classes.skill}>
            <div className={clsx(classes.skillInner, classes[classForSkill])}>
                <div className={classes.skillImg}></div>
            </div>
            <p>{title}</p>
        </div>
    )
}
