import Link from 'next/link'
import Image from 'next/image'

function Header() {
    return (
        <header>
            <div className="header container">
                <h1 className="logo">
                    <Link href="/">
                        <a>
                            <img className="img-logo" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" />
                            Katalog
                        </a>
                    </Link>
                </h1>
                <div className="search">
                    <Image src="/assets/svg/search.svg" height={18} width={18} />
                </div>
            </div>
        </header>
    )
}
export default Header