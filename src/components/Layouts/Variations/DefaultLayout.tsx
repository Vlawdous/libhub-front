import {JSX, PropsWithChildren} from "react"
import Header from "@components/Header/Header.tsx";

function DefaultLayout(props: PropsWithChildren): JSX.Element {
    return (
        <div className="layout default-layout">
            <Header/>
            {props.children}
        </div>
    )
}

export default DefaultLayout