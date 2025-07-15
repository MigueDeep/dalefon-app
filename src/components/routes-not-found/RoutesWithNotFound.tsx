import { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const RoutesWithNotFound = ({children}: {children: ReactNode}) => (
    <Routes>
        {children}
        <Route path="*" element={<Navigate to={"/404"} />} />
        <Route path="/404" element={<h1>Pagina no encontrada</h1>} />
    </Routes>
)