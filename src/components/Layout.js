import Header from '@components/Header'
import Footer from '@components/Footer'

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <div className="container">
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout