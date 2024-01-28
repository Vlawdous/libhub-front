import {FC, JSX, PropsWithChildren} from 'react'
import layoutComponentByTypeMap from "layouts/layouts.ts";

interface LayoutProps {
    type: string
    element: JSX.Element
}
function Layout(props: LayoutProps): JSX.Element {
    const LayoutComponent: FC<PropsWithChildren> = layoutComponentByTypeMap[props.type]

    return (
        <LayoutComponent>
            {props.element}
        </LayoutComponent>
    )
}

export default Layout