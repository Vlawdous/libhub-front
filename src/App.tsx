import '@styles/App.scss'
import {JSX} from "react"
import AppRouter from "@components/Routers/AppRouter.tsx"

function App(): JSX.Element {
    return (
        <div className="App">
            <AppRouter />
        </div>
    )
}

export default App
