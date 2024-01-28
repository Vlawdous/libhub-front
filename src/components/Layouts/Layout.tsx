import {FC, JSX, PropsWithChildren} from 'react'
import DefaultLayout from "@components/Layouts/Variations/DefaultLayout.tsx";

interface LayoutProps {
    type: string
    element: JSX.Element
}

const layoutComponentByTypeMap = {
    default: DefaultLayout
}
function Layout(props: LayoutProps): JSX.Element {
    const LayoutComponent: FC<PropsWithChildren> = layoutComponentByTypeMap[props.type as keyof typeof layoutComponentByTypeMap]

    return (
        <LayoutComponent>
            {props.element}
        </LayoutComponent>
    )
}

export default Layout