import {JSX} from "react"
import Header from "@components/UI/Header/Header.tsx";
import {Outlet} from "react-router";

function DefaultLayout(): JSX.Element {
    return (
        <div className="layout default-layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>123</footer>
        </div>
    )
}

export default DefaultLayout