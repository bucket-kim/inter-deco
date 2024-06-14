import { Link } from "react-router-dom";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../state/useGlobalState";
import LogOut from "../Login/LogOut";
import HomeStyleContainer from "./HomeStyleContainer";

const Home = () => {
  const { loggedIn, setNewPostShow } = useGlobalState((state) => {
    return {
      loggedIn: state.loggedIn,
      setNewPostShow: state.setNewPostShow,
    };
  }, shallow);

  return (
    <HomeStyleContainer>
      <h2 className="title">GOL-B RECORDs</h2>
      <nav>
        <div className="nav-login">
          {loggedIn ? (
            <>
              <button onClick={() => setNewPostShow(true)}>
                <h2>New Post</h2>
              </button>
              <LogOut />
            </>
          ) : (
            <Link to={"/login"}>
              <h2>Login</h2>
            </Link>
          )}
        </div>
      </nav>
      <main>
        <div className="post-container"></div>
      </main>
    </HomeStyleContainer>
  );
};

export default Home;
