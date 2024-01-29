import cl from "./Header.module.css"
import UpperHeader from "@components/Header/UpperHeader/UpperHeader"
import SearchHeader from "@components/Header/SearchHeader/SearchHeader"

const Header = () => {
    return (
        <div className={cl.Header}>
            <UpperHeader></UpperHeader>
            <div className={cl.HeaderContent}>
                <div
                    className={cl.logo}>
                </div>

                <SearchHeader></SearchHeader>

                {/*todo убрать чутка позже*/}
                <div className={cl.profile}>
                    <button className={cl.user}></button>
                    <button className={cl.cart}></button>
                </div>
            </div>
        </div>
    );
};

export default Header