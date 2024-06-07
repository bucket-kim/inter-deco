import { Hanko, register } from "@teamhanko/hanko-elements";
import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import LoginStyleContainer from "./LoginStyleContainer";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const generateId = () => Math.random().toString(36).substring(2, 10);

  const redirectAfterLogin = useCallback(() => {
    localStorage.setItem("loggedIn", "true");
    if (!localStorage.getItem("u_id")) {
      localStorage.setItem("u_id", generateId());
    }
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    hanko.onAuthFlowCompleted(() => {
      redirectAfterLogin();
    });
  }, [hanko, redirectAfterLogin]);

  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <LoginStyleContainer>
      <hanko-auth />
    </LoginStyleContainer>
  );
};

export default Login;
