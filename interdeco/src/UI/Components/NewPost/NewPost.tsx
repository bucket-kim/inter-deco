import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../state/useGlobalState";
import { db } from "../../../utils/firebase";
import NewPostStyleContainer from "./NewPostStyleContainer";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { setNewPostShow } = useGlobalState((state) => {
    return {
      setNewPostShow: state.setNewPostShow,
    };
  }, shallow);

  const saveContent = async (title: string, content: string) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        title,
        content,
        createAt: new Date(),
      });
      console.log(`Document written with ID: ${docRef.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await saveContent(title, content);
    setTitle("");
    setContent("");
    setNewPostShow(false);
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
        <textarea
          value={content}
          onChange={(e: any) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <button type="submit">Post</button>
      </form>
    </NewPostStyleContainer>
  );
};

export default NewPost;
