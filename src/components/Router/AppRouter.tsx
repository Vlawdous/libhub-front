import {JSX} from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import MainPage from '@components/Main/MainPage.tsx'
import DefaultLayout from "@components/UI/Layout/DefaultLayout.tsx"
//import BookRoutes from "@components/Router/BookRoutes.tsx";
import ErrorPage from "@components/Error/ErrorPage.tsx";

function AppRouter(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path="/" element={DefaultLayout()} errorElement={ErrorPage()}>
                    <Route index element={MainPage()}/>
                    {/*<BookRoutes/>*/}
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter
