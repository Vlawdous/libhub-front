import {JSX} from "react"
import Header from "@components/UI/Header/Header.tsx"
import {Outlet} from "react-router"
import Footer from "@components/UI/Footer/Footer.tsx"
import {Layout} from "antd"

function DefaultLayout(): JSX.Element {
    return (
        <Layout className="layout">
            <Header/>
            <Layout.Content>
                <Outlet/>
            </Layout.Content>
            <Footer/>
        </Layout>
    )
}

export default DefaultLayout