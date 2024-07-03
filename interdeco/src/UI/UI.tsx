import axios from "axios";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../state/useGlobalState";
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import Loading from "./Components/Loading/Loading";
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_API_URL}/api/posts`,
        );
        if (response.status !== 200) {
          setIsLoading(true);
        } else {
          console.log("GET DATA!");
        }
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Fragment>
      {newPostShow && <NewPost />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Loading isLoading={isLoading} />
      <Details datas={posts} isLoading={isLoading} />
      <PopupDetail datas={posts} />
    </Fragment>
  );
};

export default UI;
