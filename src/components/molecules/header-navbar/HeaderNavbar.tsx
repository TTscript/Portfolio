import clsx from "clsx";
import classes from './HeaderNavbar.module.scss';

const navBarItems = [
    {
        title: 'All Skills',
        href: '#all-skills'
    },
    {
        title: 'Strengths',
        href: '#strengths'
    },
    {
        title: 'Projects',
        href: '#projects'
    },
    {
        title: 'Experience',
        href: '#experience'
    },
    {
        title: 'Education',
        href: '#education'
    },
    {
        title: 'Phone',
        href: '#phone'
    },
    {
        title: 'Socials',
        href: '#socials'
    },
]

interface  HeaderNavbarProps {
    className?: string;
}
export const HeaderNavbar = ({className}: HeaderNavbarProps) => {
    return (
        <nav>
            <ul>
                {navBarItems.map(({title, href}) => (
                    <li key={title + href}>
                        <a href={href}>{title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
