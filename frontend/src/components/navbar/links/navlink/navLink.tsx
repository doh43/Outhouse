"use client"

import Link from "next/link"
import styles from "./navLink.module.css"
import { usePathname } from "next/navigation"

const NavLink = ({ link }) => {
    const pathName = usePathname()

    return (
        
            pathName === "/login" && link.title === "Login" ? (
                <Link href="/signup"
                className={`${styles.linkContainer} 
                ${styles.signupLink}
                ${link.title === "Admin" && styles.adminLink}>
                `}>
                    <li>Sign up</li>
                </Link>
            ) : (
                <Link href={link.path} className={`
                ${styles.linkContainer} 
                ${pathName === link.path && styles.active} 
                ${link.title === "Admin" && styles.adminLink} 
                ${link.title === "Login" && styles.loginLink}
                `}>
                    <li>{link.title}</li>
                </Link>
            )
        
    )
}

export default NavLink