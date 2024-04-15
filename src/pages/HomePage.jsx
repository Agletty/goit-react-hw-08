import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { isSignedIn } = useAuth();

  return (
    <div>
      <h1>Welcome to home page</h1>

      {isSignedIn ? (
        <Link to="/contacts" relative="path">
          You can go to contacts page
        </Link>
      ) : (
        <Link to="/login" relative="path">
          You should go to Login page
        </Link>
      )}
    </div>
  );
};

export default Home;
