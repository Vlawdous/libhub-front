import {JSX} from "react";
import css from "./ListPage.module.scss";
import {Breadcrumb, Layout} from "antd";
import ListMenu from "@components/Book/List/ListMenu/ListMenu.tsx";
import ListContent from "@components/Book/List/ListContent/ListContent.tsx";

function ListPage(): JSX.Element {
    const categoryRoute: {title: string}[] = [
        {
            title: 'Главная',
        },
        {
            title: 'Популярные новинки'
        }
    ]

    return (
        <Layout className={css.List + " layout"}>
            <Layout.Header className={css.ListHeader}>
                <Breadcrumb items={categoryRoute}/>
                <h1>Популярные новинки</h1>
            </Layout.Header>
            <Layout className="layout" hasSider={true}>
                <ListMenu/>
                <ListContent/>
            </Layout>
        </Layout>
    )
}

export default ListPage