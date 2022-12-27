import { Outlet } from "react-router-dom"
import { Header } from "../../components"

export const Homepage = () => {

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}