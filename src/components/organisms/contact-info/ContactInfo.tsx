import {NameAndContacts, PhotoBlock, Skills, Socials} from "@/components/molecules";
import classes from './ContactInfo.module.scss';
export const ContactInfo = () => {
    return (
        <section className={classes.contactInfo}>
            <h2 className="visually-hidden">Contact information and skills</h2>
            <PhotoBlock />
            <section className={classes.infoBlock}>
                <h2 className="visually-hidden">Information block</h2>
                <NameAndContacts />
                <Skills />
                <Socials />
            </section>
        </section>
    )
}
