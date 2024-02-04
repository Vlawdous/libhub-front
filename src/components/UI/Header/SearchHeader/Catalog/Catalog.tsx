import {Dropdown} from "antd";
import cl from "@components/UI/Header/SearchHeader/Catalog/Catalog.module.css";
import {MenuUnfoldOutlined} from "@ant-design/icons";

const items = [
    {
        key: 1,
        label: 'text 1'
    },
    {
        key: 2,
        label: 'text 2'
    },
    {
        key: 3,
        label: 'text 3'
    }
];
const Catalog = () => {
    return (
        <Dropdown menu={{items}} placement="bottomLeft" arrow>
            <button className={cl.Catalog}>
                Каталог <MenuUnfoldOutlined/>
            </button>
        </Dropdown>
    );
};

export default Catalog;