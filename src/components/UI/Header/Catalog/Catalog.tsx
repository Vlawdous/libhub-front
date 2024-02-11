import {Dropdown} from "antd";
import cl from "@components/UI/Header/Catalog/Catalog.module.scss";
import {MenuUnfoldOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const items = [
    {
        key: 1,
        label: <Link to="/text1">Text 1</Link>
    },
    {
        key: 2,
        label: <Link to="/text2">Text 2</Link>
    },
    {
        key: 3,
        label: <Link to="/text3">Text 3</Link>
    }
];
const Catalog = () => {

    return (
        <Dropdown menu={{items}} placement="bottomLeft" arrow>

            <button className={cl.Catalog}>
                <MenuUnfoldOutlined
                    className={cl.CatalogImg}
                />
                Каталог
            </button>

        </Dropdown>
    );
};

export default Catalog;