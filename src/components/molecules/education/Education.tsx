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
                    <h3>React. Development of Complex Front-end Applications <span>at HTML Academy</span></h3>
                    <p>Sep 2021 - Nov 2021</p>
                    <p>Introduction to TypeScript, analysis of the problems it solves. Introduction to the type system and examination of the typing process.
                        How TypeScript code is converted into JavaScript. Practice using TypeScript. Compiler configuration and examination of its main settings.
                        Moving to practice and analysis of the features of writing typed code: tuples, interfaces, generics, and so on.
                        Infrastructure: compiler settings. Annotations and automatic type inference. Typing of objects, arrays, functions. Generics.
                        Tuples. Interfaces, type aliases.
                    </p>
                </div>
                <div className={classes.educationItem}>
                    <h3>JavaScript. Architecture of Front-end Applications <span>at HTML Academy</span></h3>
                    <p>Jun 2021 - Sep 2021</p>
                    <p>Introduction to the concept of modularity and an examination of how modules are structured in the latest versions of the ECMAScript standard,
                        and how to assemble such modules with a bundler. SPA. Architecture. Analysis of the basics of the MV* pattern.
                        Modules. How modules work in ES20xx. Circular dependencies. Infrastructure. Building an application using webpack. Source maps.
                    </p>
                </div>
                <div className={classes.educationItem}>
                    <h3>JavaScript. Professional Development of Web Interfaces <span>at HTML Academy</span></h3>
                    <p>May 2021 - June 2021</p>
                    <p>Exploring what JavaScript is, the role of the ECMAScript specification, and the browser.
                        What the browser provides to JavaScript. JavaScript fundamentals.
                        Basic syntax: parentheses and curly braces, operators, reserved words, comments.
                        Key building blocks - variables and functions. Primitive and complex data types.
                        Development tools. Code editors, linters, development server.
                    </p>
                </div>
                <div className={classes.educationItem}>
                    <h3>HTML & CSS. Adaptive Website Coding and Automation <span>at HTML Academy</span></h3>
                    <p>Mar 2021 - May 2021</p>
                    <p>Working with version control in GitHub Desktop and with graphic layouts in Figma editor,
                        creating expressive and accessible markup, building page layouts with grids, working with custom properties,
                        optimizing code, and preparing the completed project for publication.
                    </p>
                </div>
                <div className={classes.educationItem}>
                    <h3>HTML & CSS. Professional Website Coding <span>at HTML Academy</span></h3>
                    <p>Jan 2021 - Mar 2021</p>
                    <p>Creating markup according to the BEM methodology, writing CSS code using preprocessors, creating an adaptive grid,
                        working with adaptive and retina graphics, and preparing project build automation for publication.
                    </p>
                </div>
            </div>
        </section>
    );
};
