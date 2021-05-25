import Header from '@components/Header'
import Footer from '@components/Footer'

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                {children}
            </div>
            <Footer />
        </>
    )
}
export default Layout