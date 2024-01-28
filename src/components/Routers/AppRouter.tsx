import {JSX} from 'react';
import {Route, Routes} from "react-router";
import Layout from "@components/Layouts/Layout.tsx";
import Main from "@components/Main/Main.tsx";
import BookRoutes from "@components/Routers/BookRoutes.tsx";

function AppRouter(): JSX.Element {
    return (
        <Routes>
            <Route path='/' element={
                <Layout type="default" element={Main()}/>
            }/>
            <BookRoutes />
        </Routes>
    )
}

export default AppRouter;