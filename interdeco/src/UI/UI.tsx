import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { shallow } from "zustand/shallow";
import { db } from "../firebase/firebase";
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
  const [isLoading, setIsLoading] = useState(false);

  const fetchPost = async () => {
    try {
      const queryDoc = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
      );

      await getDocs(queryDoc).then((snapshot) => {
        const datas = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        // setBlogs(datas);

        setPosts(datas);
      });
    } catch (error) {
      console.log("Error fetching posts: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
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

      <Details datas={posts} isLoading={isLoading} />
      <PopupDetail datas={posts} />
    </Fragment>
  );
};

export default UI;
