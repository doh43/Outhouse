import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./links.module.css"
import NavLink from "./navlink/NavLink"

const Links = () => {
    const pathName = usePathname()

    const links = [
        {
            title: "Profile",
            path: "/profile",
        },
        {
            title: "My List",
            path: "/mylist",
        },
        {
            title: "Favourites",
            path: "/favourites",
        },
    ]

    // TEMPORARY
    const session = false
    const isAdmin = true

    return (
        <ul className={styles.linkList}>
            {links.map((link => (
                <NavLink link={link} key={link.title} />
            )))}{
                session ? (
                    <div className={styles.sessionStatus}>
                        {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
                        <button className={styles.logoutButton}>Logout</button>
                    </div>
                ) : (
                    <div className={styles.sessionStatus}>
                        <NavLink link={{ title: "Login", path: "/login" }} />
                    </div>
                )
            }
        </ul>
    )
}

export default Links