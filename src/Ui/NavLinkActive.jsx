"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinkActive = ({ children, href}) => {
    const pathName = usePathname();


    return (
        <div>
            <Link href={href}>
                <li
                    className={` hover:text-red-500 ${pathName === href ? 'border-b border-red-500 text-red-500' : ""}`}
                >
                    {children}
                </li>
            </Link>
        </div>
    );
};

export default NavLinkActive;