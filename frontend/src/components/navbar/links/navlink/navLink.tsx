"use client"

import Link from "next/link"
import styles from "./navLink.module.css"
import { usePathname } from "next/navigation"

const NavLink = ({ link }) => {
    const pathName = usePathname()

    return (
        <Link href={link.path} className={`
        ${styles.linkContainer} 
        ${pathName === link.path && styles.active} 
        ${link.title === "Admin" && styles.adminLink} 
        ${link.title === "Login" && styles.loginLink}
        `}> { pathName === "/login" ? (
                link.title === "Login" ? (
                    <li className={styles.loginActive}>Sign up</li>
                ) : (
                    <li>{link.title}</li>
                )
            ) : (
                <li>{link.title}</li>
            )
            }
        </Link>
    )
}

export default NavLink