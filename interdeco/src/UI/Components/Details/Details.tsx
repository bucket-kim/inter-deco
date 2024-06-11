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
    const fetchPosts = async () => {
      const postsData = await getContent();
      setPosts(postsData);
    };

    fetchPosts();
  }, [posts]);

  return (
    <DetailsStyleContainer>
      {/* {Array.from({ length: 5 }).map((post, idx) => (
        <div key={idx} className="container">
          <h2>hello</h2>
          <p>content</p>
        </div>
      ))} */}
      {posts
        .slice()
        .reverse()
        .map((post) => (
          <div key={post.id} className="container">
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
