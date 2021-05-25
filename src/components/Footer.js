import Link from "next/link"

function Footer() {
    return (
        <footer>
            <div className="container">
                <Link href="/">
                    <a>© 2021</a>
                </Link>
            </div>
        </footer>
    )
}
export default Footer