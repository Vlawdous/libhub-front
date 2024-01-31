import cl from "./Header.module.css"
import SearchHeader from "@components/UI/Header/SearchHeader/SearchHeader.tsx"
import {Flex, Layout} from "antd"
import UpperHeader from "@components/UI/Header/UpperHeader/UpperHeader.tsx"
import {JSX} from "react"

function Header(): JSX.Element {
    return (
        <>
            <UpperHeader/>
            <Layout.Header className={cl.Header}>
                <Flex align="center" wrap="wrap" gap={10}>
                    <div className={cl.logo}/>
                    <SearchHeader></SearchHeader>
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