import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
  }, [token, navigate]);

  return children;
};

export default ProtectedComponent;
