// Search.tsx
import React, {useState} from 'react';
import {AutoComplete} from 'antd';
import SearchItem from './SearchItem';
import cl from "@components/UI/Header/SearchHeader/Search/Search.module.scss";
import mockData from './mock'

const Search: React.FC = () => {
    const [options, setOptions] = useState([]);

    const getSearchedValue = (query: string) =>
        query
            ? mockData
                .filter((item) =>
                    `${item.name} ${item.author} ${item.img} ${item.price}`
                        .toLowerCase()
                        .includes(query.toLowerCase())
                )
                .map((item) => ({
                    value: item.name,
                    label: <SearchItem key={item.name} item={item}/>,
                }))
            : [];

    return (
        <AutoComplete
            className={cl.Search}
            options={options}
            onSelect={(value) => console.log('Selected:', value)}
            onSearch={(query) => setOptions(getSearchedValue(query))}
            placeholder="Я ищу..."
            optionLabelProp="label"
        />
    );
};

export default Search;
