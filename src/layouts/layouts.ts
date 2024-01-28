import DefaultLayout from "@components/Layouts/Variations/DefaultLayout.tsx";
import {FC, PropsWithChildren} from "react";

const layoutComponentByTypeMap: Record<string, FC<PropsWithChildren>> = {
    default: DefaultLayout
}

export default layoutComponentByTypeMap