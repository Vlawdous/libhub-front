import React from 'react';
import { Avatar } from 'antd';
import cl from "@components/UI/Header/SearchHeader/Search/Search.module.scss";

interface SearchItemProps {
    item: {
        name: string;
        author: string;
        imgUrl?: string;
        price: string;
    };
}

const SearchItem: React.FC<SearchItemProps> = ({ item }) => (
    <div className={cl.SearchItem}>
        <Avatar src={item.imgUrl} size="small" />
            <div className={cl.name}>{item.name}</div>
            <div className={cl.author}>{item.author}</div>
        <div className={cl.price}>{item.price}</div>
    </div>
);

export default SearchItem;
