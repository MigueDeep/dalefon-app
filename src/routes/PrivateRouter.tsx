import { RoutesWithNotFound } from "@components/routes-not-found/RoutesWithNotFound";
import { UserPage } from "@features/users/pages/UserPage";
import { Navigate, Route } from "react-router-dom";

export const PrivateRouter = () => {
  return (
    <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={"/users"} />} />
        <Route path="/users" element={<UserPage />} />
    </RoutesWithNotFound>
  );
};
