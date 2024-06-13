import { useEffect } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../state/useGlobalState";
import PopupDetailStyleContainer from "./PopupDetailStyleContainer";

const PopupDetail = () => {
  const { blogId, setBlogId } = useGlobalState((state) => {
    return {
      blogId: state.blogId,
      setBlogId: state.setBlogId,
    };
  }, shallow);

  useEffect(() => {
    const fetchPostId = async () => {
      try {
        fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/posts/${blogId}`);

        // console.log(response);
      } catch (error) {
        console.log("Error fetching Id ", error);
      }
    };
    fetchPostId();
  }, [blogId]);

  const handleCloseClick = () => {
    setBlogId("");
  };

  return (
    <PopupDetailStyleContainer>
      <div className="popup-container">
        <button onClick={handleCloseClick}>X</button>
        <h1>{blogId}</h1>
      </div>
    </PopupDetailStyleContainer>
  );
};

export default PopupDetail;
