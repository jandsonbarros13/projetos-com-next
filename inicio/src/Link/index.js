import Link from "next/link";

export default function Link({children, href, ...props}) {
    return (
        <Link href={href} passHref>
            <a>{children}</a>
        </Link>

    )
}