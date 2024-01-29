import {JSX} from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from '@components/Layouts/Layout.tsx';
import Main from '@components/Main/Main.tsx';

function AppRouter(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout type="default" element={<Main />} />
                    }
                />
            </Routes>
        </Router>
    );
}

export default AppRouter;
