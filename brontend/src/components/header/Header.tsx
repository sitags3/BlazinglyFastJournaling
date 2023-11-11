import Link from "next/link";
import { FC } from "react";

type Props = {}

const links = [
    '/',
    '/journal',
    'carousel'
]

const Header: FC<Props> = () => {
    return (
        <header className="flex gap-10 space-x-10">
            this is header
            {links.map(link => {
                return (
                    <Link key={link} className="p-4 bg-yellow-100" href={link}>{link}</Link>
                )
            })}
        </header>
    )
}

export default Header;