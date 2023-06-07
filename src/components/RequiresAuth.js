import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { ProductContext } from "..";

export function RequiresAuth({ children }) {
  const { isLoggedIn } = useContext(ProductContext);
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
