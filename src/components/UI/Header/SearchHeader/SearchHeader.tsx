import cl from './SearchHeader.module.scss'
import {SearchOutlined} from "@ant-design/icons";
import Catalog from "@components/UI/Header/SearchHeader/Catalog/Catalog";
import Search from "@components/UI/Header/SearchHeader/Search/Search";

const SearchHeader = () => {
    return (
        <div className={cl.SearchHeader}>
            <div className={cl.SearchHeaderContent}>
                <Catalog />
                <Search />
                <button className={cl.SearchBtn}>
                    <SearchOutlined style={{fontSize: '32px'}}/>
                </button>
            </div>
        </div>
    )
}

export default SearchHeader