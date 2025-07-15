import { useNavigate } from "react-router-dom";

export const useRouterHandler = () => {
  const navigate = useNavigate();
  return (route: string, options?: { state?: object }) => navigate(route, options);
};
