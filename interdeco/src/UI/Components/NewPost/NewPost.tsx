import axios from "axios";
import { useState } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../state/useGlobalState";
import NewPostStyleContainer from "./NewPostStyleContainer";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [episode, setEpisode] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<any>(null);

  const { setNewPostShow } = useGlobalState((state) => {
    return {
      setNewPostShow: state.setNewPostShow,
    };
  }, shallow);

  const ImageUpload = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!image) return;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("episode", episode);
    formData.append("content", content);
    formData.append("image", image);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/post`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      console.log(response.data);
      if (response.status === 201) {
        setTitle("");
        setEpisode("");
        setContent("");
        setImage(null);
        setNewPostShow(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NewPostStyleContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          placeholder="title"
          required
        />
        <input
          type="text"
          value={episode}
          onChange={(e: any) => setEpisode(e.target.value)}
          placeholder="episode"
          required
        />
        <input
          type="text"
          value={episode}
          onChange={(e: any) => setEpisode(e.target.value)}
          placeholder="episode"
          required
        />
        <textarea
          value={content}
          onChange={(e: any) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <input
          type="file"
          accept="image/*"
          name="photo"
          onChange={ImageUpload}
        />
        <button type="submit">Post</button>
      </form>
    </NewPostStyleContainer>
  );
};

export default NewPost;
