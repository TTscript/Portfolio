'use client'

import classes from './Header.module.scss';
import {useState} from "react";
import clsx from "clsx";

export default function Home() {
    const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);

    const burgerButtonOnClickHandler = () => {
        setIsBurgerMenuActive((prev: boolean) => !prev)
    }

  return (
      <div className='container'>
          <header className={classes.header}>
              <div className={clsx(classes.headerInner, isBurgerMenuActive && classes.headerInnerActive)}>
                  <button
                      className={clsx(classes.burgerMenu, isBurgerMenuActive && classes.burgerMenu)}
                      type="button"
                      aria-label="burger-menu"
                      onClick={burgerButtonOnClickHandler}
                  >
                      <span></span>
                  </button>
                  <nav>
                      <ul>
                          <li><a href="#all-skills">All skills</a></li>
                          <li><a href="#strengths">Strengths</a></li>
                          <li><a href="#code">Code example</a></li>
                          <li><a href="#projects">Projects</a></li>
                          <li><a href="#education">Education</a></li>
                          <li><a href="#phone">Phone</a></li>
                          <li><a href="#socials">Socials</a></li>
                      </ul>
                  </nav>
              </div>
          </header>
        <main>
          main
        </main>
        <footer>footer</footer>
      </div>

  );
}
