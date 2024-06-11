import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../state/useGlobalState";
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NewPost from "./Components/NewPost/NewPost";

const UI = () => {
  const { newPostShow } = useGlobalState((state) => {
    return {
      newPostShow: state.newPostShow,
    };
  }, shallow);
  return (
    <Fragment>
      {newPostShow && <NewPost />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Details />
    </Fragment>
  );
};

export default UI;
