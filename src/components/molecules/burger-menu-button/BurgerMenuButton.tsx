import clsx from "clsx";
import classes from './BurgerMenuButton.module.scss';

interface  BurgerMenuButtonProps {
    isBurgerMenuActive: boolean;
    burgerButtonOnClickHandler: () => void;
    className?: string;
}
export const BurgerMenuButton = ({burgerButtonOnClickHandler, isBurgerMenuActive, className}: BurgerMenuButtonProps) => {
    return (
        <button
            className={clsx(classes.burgerMenu, isBurgerMenuActive && classes.burgerMenuActive)}
            type="button"
            aria-label="burger-menu"
            onClick={burgerButtonOnClickHandler}
        >
            <span></span>
        </button>
    );
};
