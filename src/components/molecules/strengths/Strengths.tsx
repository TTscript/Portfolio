import clsx from "clsx";
import classes from './Strengths.module.scss';

interface  StrengthsProps {
    className?: string;
}
export const Strengths = ({className}: StrengthsProps) => {
    return (
        <section id="strengths" className={classes.strongSides}>
            <h2>Strengths</h2>
            <ul>
                <li>Hardworking</li>
                <li>Responsible</li>
                <li>Energetic</li>
                <li>Organaised</li>
                <li>Reliable</li>
                <li>Sociable</li>
                <li>Conscientious</li>
                <li>Motivated</li>
            </ul>
        </section>
    );
};
