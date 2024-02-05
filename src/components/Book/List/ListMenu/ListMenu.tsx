import React, {JSX} from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import css from "./ListMenu.module.scss"

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('Фантастика', 'sub1', [
        getItem('Научная', 'g1', [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
        getItem('Не научная', 'g2', [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),

    getItem('Научная', 'sub2', [
        getItem('Программирование', '5'),
        getItem('Кулинария', '6'),
        getItem('Прикол', 'sub3', [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),

    getItem('Журнальчики', 'sub4', [
        getItem('Кек 1', '9'),
        getItem('Кек 2', '10'),
        getItem('Кек 3', '11'),
        getItem('Кек 4', '12'),
    ])
];

function ListContent(): JSX.Element {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <Menu
            className={css.ListMenu}
            onClick={onClick}
            style={{ width: 256 }}
            mode="inline"
            items={items}
        />
    );
}

export default ListContent