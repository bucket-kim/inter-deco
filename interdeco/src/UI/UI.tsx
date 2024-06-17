import axios from "axios";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../state/useGlobalState";
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NewPost from "./Components/NewPost/NewPost";
import PopupDetail from "./Components/PopupDetail/PopupDetail";

const UI = () => {
  const { newPostShow } = useGlobalState((state) => {
    return {
      newPostShow: state.newPostShow,
    };
  }, shallow);

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_API_URL}/api/posts`,
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <Fragment>
      {newPostShow && <NewPost />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Details datas={posts} />
      <PopupDetail datas={posts} />
    </Fragment>
  );
};

export default UI;
