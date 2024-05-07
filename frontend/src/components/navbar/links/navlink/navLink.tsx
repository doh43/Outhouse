"use client"

import Link from "next/link"
import styles from "./navLink.module.css"
import { usePathname } from "next/navigation"

const navLink = ({ link }) => {

    const pathName = usePathname()

    return (
        <Link href={link.path} className={`${styles.linkContainer} ${pathName === link.path && styles.active}`}>
            {link.title}
        </Link>
    )
}