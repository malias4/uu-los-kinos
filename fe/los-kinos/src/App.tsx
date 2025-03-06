import { Outlet } from "react-router-dom"
import { GeneralLayout } from "./layouts/GeneralLayout"
import { UserProvider } from "./layouts/providers/UserProvider"

export const App = () => {
    return (
        <UserProvider>
            <GeneralLayout>
                <Outlet />
            </GeneralLayout>
        </UserProvider>
    )
}