import cl from "./Header.module.scss"
import SearchHeader from "@components/UI/Header/SearchHeader/SearchHeader.tsx"
import {Flex, Layout} from "antd"
import UpperHeader from "@components/UI/Header/UpperHeader/UpperHeader.tsx"
import {JSX} from "react"
import Logo from "@components/UI/Header/Logo/Logo";
import Catalog from "@components/UI/Header/Catalog/Catalog";

function Header(): JSX.Element {
    return (
        <>
            <UpperHeader/>
            <Layout.Header className={cl.Header}>
                <Flex className={cl.HeaderContainer}>
                    <Logo />
                    <Catalog />
                    <SearchHeader />
                    {/*todo убрать чутка позже*/}
                    <div className={cl.profile}>
                        <button className={cl.user}></button>
                        <button className={cl.cart}></button>
                    </div>
                </Flex>
            </Layout.Header>
        </>
    )
}

export default Header