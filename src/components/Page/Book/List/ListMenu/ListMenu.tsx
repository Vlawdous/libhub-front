import {JSX} from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import css from "./ListMenu.module.scss"
import {getMenuItem} from "@utils/Menu/MenuUtils.ts"

const items: MenuProps['items'] = [
    getMenuItem('Фантастика', 'sub1', [
        getMenuItem('Научная', 'g1', [getMenuItem('Option 1', '1'), getMenuItem('Option 2', '2')], 'group'),
        getMenuItem('Не научная', 'g2', [getMenuItem('Option 3', '3'), getMenuItem('Option 4', '4')], 'group'),
    ]),

    getMenuItem('Научная', 'sub2', [
        getMenuItem('Программирование', '5'),
        getMenuItem('Кулинария', '6'),
        getMenuItem('Прикол', 'sub3', [getMenuItem('Option 7', '7'), getMenuItem('Option 8', '8')]),
    ]),

    getMenuItem('Журнальчики', 'sub4', [
        getMenuItem('Кек 1', '9'),
        getMenuItem('Кек 2', '10'),
        getMenuItem('Кек 3', '11'),
        getMenuItem('Кек 4', '12'),
    ])
];

function ListContent(): JSX.Element {
    return (
        <Menu
            className={css.ListMenu}
            style={{ width: 256 }}
            mode="inline"
            items={items}
        />
    );
}

export default ListContent