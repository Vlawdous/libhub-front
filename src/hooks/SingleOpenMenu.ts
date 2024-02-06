import {useState} from "react";
import {MenuProps} from "antd";

type useSingleOpenMenuReturn = [string[]|undefined, MenuProps['onOpenChange']]
export function useSingleOpenMenu(initialOpenMenuKey: string[] = []): useSingleOpenMenuReturn {
    const [openMenuKeys, setOpenMenuKey] = useState(initialOpenMenuKey)

    return [openMenuKeys, (key: string[]) => {
        console.log(key)
        setOpenMenuKey(key)
    }]
}