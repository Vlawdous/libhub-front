import {Key, ReactNode} from "react";
import type {MenuProps as MenuProps} from "antd/es/menu/menu";

type MenuItem = Required<MenuProps>['items'][number];

export function getMenuItem(
    label: ReactNode,
    key: Key,
    children?: MenuItem[],
    type?: 'group'
): MenuItem {
    return {
        key,
        children,
        label,
        type,
    }
}