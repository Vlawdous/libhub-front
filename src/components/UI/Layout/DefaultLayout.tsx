import {JSX} from "react"
import Header from "@components/UI/Header/Header.tsx";
import {Outlet} from "react-router";
import Footer from "@components/UI/Footer/Footer";

function DefaultLayout(): JSX.Element {
    return (
        <div className="layout default-layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default DefaultLayout