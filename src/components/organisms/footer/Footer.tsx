import classes from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerInner}>
                <p>© 2022 by Timur Tokumov</p>
                <div className={classes.footerGithub}>
                    <a href="https://github.com/TTscript"></a>
                </div>
            </div>
        </footer>
    )
}
