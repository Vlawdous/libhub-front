import {JSX} from "react";
import {Route} from "react-router-dom";
import ListPage from "@components/Book/List/ListPage.tsx";
import ViewPage from "@components/Book/View/ViewPage.tsx";

function BookRoutes(): JSX.Element {
    return (
        <>
            <Route path="books" element={<ListPage/>}/>
            <Route path="books/:id" element={<ViewPage/>}/>
        </>
    )
}

export default BookRoutes