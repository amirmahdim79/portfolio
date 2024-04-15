"use client"

import Link from "next/link";
import styles from "./index.module.scss"
import { default as cs } from "classnames"
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className={cs(styles['navbar'])}>
            <label>Raven Development Group</label>

            <Link
                className={cs({
                    [styles['active']]: pathname === '/team',
                })}
                href={'/team'}
            >
                Team
            </Link>
            <Link
                className={cs({
                    [styles['active']]: pathname === '/',
                })}
                href={'/'}
            >
                Home
            </Link>
            <Link
                className={cs({
                    [styles['active']]: pathname === '/projects',
                })}
                href={'/projects'}
            >
                Projects
            </Link>
        </nav>
    )
}