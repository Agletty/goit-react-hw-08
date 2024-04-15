import { useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm/LoginForm";
import { apiLoginUser } from "../redux/auth/operations";

const Login = () => {
  const dispatch = useDispatch();
  const onLogin = (formData) => {
    dispatch(apiLoginUser(formData));
  };

  return <LoginForm onLogin={onLogin} />;
};

export default Login;
