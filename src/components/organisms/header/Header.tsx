import clsx from "clsx";
import {useState} from "react";
import classes from './Header.module.scss';
import {BurgerMenuButton, HeaderNavbar} from "@/components/molecules";

export const Header = () => {
    const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);

    const burgerButtonOnClickHandler = () => {
        setIsBurgerMenuActive((prev: boolean) => !prev)
    }

    return (
        <header className={classes.header}>
            <div className={clsx(classes.headerInner, isBurgerMenuActive && classes.headerInnerActive)}>
                <BurgerMenuButton
                    isBurgerMenuActive={isBurgerMenuActive}
                    burgerButtonOnClickHandler={burgerButtonOnClickHandler}
                />
                <HeaderNavbar />
            </div>
        </header>
    )
}
