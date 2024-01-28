import React from 'react';
import cl from './SearchHeader.module.css'

const SearchHeader = () => {
    return (
        <div className={cl.SearchHeader}>
            <div className={cl.SearchHeaderContent}>
                <button className={cl.Catalog}>
                    Каталог
                </button>
                <input className={cl.Search} placeholder="Я ищу..."/>
                <button className={cl.SearchBtn}>
                    <div className={cl.SearchBtnImg}></div>
                </button>
            </div>
        </div>
    );
};

export default SearchHeader;