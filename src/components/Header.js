import Link from "next/link"

function Header() {
    return (
        <header>
            <div className="container">

                <h1 className="logo">
                    <Link href="/">
                        <a> Blog </a>
                    </Link>
                </h1>
            </div>
        </header>
    )
}
export default Header