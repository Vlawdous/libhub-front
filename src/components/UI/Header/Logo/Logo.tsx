import cl from "@components/UI/Header/Logo/Logo.module.scss";
import {JSX} from "react";
import {Link} from "react-router-dom";

function Logo(): JSX.Element {
    return (
        <Link to="/" className={cl.logo} />
    );
}
export default Logo;