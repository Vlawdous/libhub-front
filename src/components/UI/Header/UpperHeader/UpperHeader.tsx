import cl from './UpperHeader.module.css'
import {JSX} from "react";

function UpperHeader(): JSX.Element {
    return (
        <div className={cl.UpperHeader}>
            <span>info here</span>
        </div>
    )
}

export default UpperHeader