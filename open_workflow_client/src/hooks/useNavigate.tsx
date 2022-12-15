import { Navigate } from "react-router-dom";

const useNavigate = (url: string) => {
  const navigate = Navigate();
  return navigate(url);
};

export default useNavigate;
