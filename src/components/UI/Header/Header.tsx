import cl from "./Header.module.css"
import UpperHeader from "@components/UI/Header/UpperHeader/UpperHeader.tsx"
import SearchHeader from "@components/UI/Header/SearchHeader/SearchHeader.tsx"

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