import Navbar from './navbar'
import Footer from './footer'
import Socials from './socials'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Socials />
            <main>{children}</main>
        </>
    )
}