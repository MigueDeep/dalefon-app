import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { RoutesWithNotFound } from "@components/routes-not-found/RoutesWithNotFound"
import { LoginPage } from "./features/auth/pages/LoginPage"
import { PrivateGuard } from "./guards/PrivateGuard"
import { PrivateRouter } from "./routes/PrivateRouter"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={"/login"}/>} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route element={<PrivateGuard/>}>
                    {/* Private routes */}
                    <Route path="/*" element={<PrivateRouter/>} />
                </Route>
            </RoutesWithNotFound>
        </BrowserRouter>
    )
} 