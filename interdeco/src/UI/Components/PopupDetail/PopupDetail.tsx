import axios from "axios";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../state/useGlobalState";
import PopupDetailStyleContainer from "./PopupDetailStyleContainer";

interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
}

const PopupDetail = () => {
  const { blogId, setBlogId } = useGlobalState((state) => {
    return {
      blogId: state.blogId,
      setBlogId: state.setBlogId,
    };
  }, shallow);

  const [details, setDetails] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPostId = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_API_URL}/api/posts/${blogId}`,
        );
        setDetails(response.data);
      } catch (error) {
        console.log("Error fetching Id ", error);
      }
    };
    fetchPostId();
  }, [blogId]);

  const handleCloseClick = () => {
    setBlogId("");
    setDetails(null);
  };

  if (!details) return <div>Loading...</div>;

  return (
    <PopupDetailStyleContainer>
      <div className="popup-container">
        <button onClick={handleCloseClick}>X</button>

        <h1>{details.title}</h1>
        <img
          src={details.imageUrl}
          alt={details.title}
          width={100}
          height={100}
        />
        <p>{details.content}</p>
      </div>
    </PopupDetailStyleContainer>
  );
};

export default PopupDetail;
