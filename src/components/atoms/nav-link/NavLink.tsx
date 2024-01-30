import Link from "next/link";
import {FC, PropsWithChildren} from "react";

interface INavLink {
    href: string;
}
export const NavLink: FC<PropsWithChildren<INavLink>> = ({children, href}) => {
    return (
        <Link href={href}>
            {children}
        </Link>
    )
}
