import Link from "next/link"
import styles from "./links.module.css"

const Links = () => {

    const links = [
        {
            title: "Profile",
            path: "/profile",
            className: "profileLink"
        },
        {
            title: "MyList",
            path: "/mylist",
            className: "mylistLink"
        },
        {
            title: "Favourites",
            path: "/favourites",
            className: "favouritesLink"
        },
    ]

    return (
        <ul className={styles.linkList}>
            {links.map((link => (
                <Link href={link.path} key={link.title} className={styles[link.className]}>
                    <li>{link.title}</li>
                </Link>
            )))}
        </ul>
    )
}

export default Links