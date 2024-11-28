import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuthenticationCheck = () => {
  const navigate = useNavigate();
  const [isAuthenticated, seiIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      seiIsAuthenticated(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return isAuthenticated;
}

export default useAuthenticationCheck;