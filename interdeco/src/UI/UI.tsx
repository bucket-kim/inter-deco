import { Fragment } from "react/jsx-runtime";
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import NewPost from "./Components/NewPost/NewPost";

const UI = () => {
  return (
    <Fragment>
      <Home />
      <Details />
      <NewPost />
      {/* <Login /> */}
    </Fragment>
  );
};

export default UI;
