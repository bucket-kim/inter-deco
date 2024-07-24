import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { shallow } from "zustand/shallow";
import { db, storage } from "../../../firebase/firebase";
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

  const addPosts = async (e: any) => {
    e.preventDefault();
    try {
      const storageRef = ref(storage, `images/${image.name}`);

      const snapshot = await uploadBytes(storageRef, image);

      const downloadURL = await getDownloadURL(snapshot.ref);

      const postRef = await addDoc(collection(db, "posts"), {
        title: title,
        episode: episode,
        content: content,
        image: downloadURL,
        createdAt: Timestamp.fromDate(new Date(Date.now())),
      });

      console.log("Document written with ID: ", postRef.id);
      setTitle("");
      setEpisode("");
      setContent("");
      setImage(null);
      setNewPostShow(false);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <NewPostStyleContainer>
      <form onSubmit={addPosts}>
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
