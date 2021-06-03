import Link from "next/link"

function Header() {
    return (
        <header>
            <div className="container">
                <h1 className="logo">
                    <Link href="/">
                        <a>
                            <img className="img-logo" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" />
                            Katalog
                        </a>
                    </Link>
                </h1>
            </div>
        </header>
    )
}
export default Header