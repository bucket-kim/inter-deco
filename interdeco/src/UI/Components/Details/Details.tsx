import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../utils/firebase";
import DetailsStyleContainer from "./DetailsStyleContainer";

const Details = () => {
  const [posts, setPosts] = useState<any[]>([]);

  const getContent = async () => {
    const querySnapShot = await getDocs(collection(db, "posts"));

    const posts: any[] = [];
    querySnapShot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });

    return posts;
  };

  useEffect(() => {
    getContent();
    const fetchPosts = async () => {
      const postsData = await getContent();
      setPosts(postsData);
    };

    fetchPosts();
  }, [posts]);

  return (
    <DetailsStyleContainer>
      <p>new post</p>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <small>
            {new Date(post.createAt.seconds * 1000).toLocaleDateString()}
          </small>
        </div>
      ))}
    </DetailsStyleContainer>
  );
};

export default Details;
