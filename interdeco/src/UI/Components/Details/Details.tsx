import axios from "axios";
import { useEffect, useState } from "react";
import DetailsStyleContainer from "./DetailsStyleContainer";

const Details = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://blog-backend-zh2z.onrender.com/api/posts",
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <DetailsStyleContainer>
      {posts.map((post, idx) => (
        <div key={idx} className="container">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div className="img-container">
            <img
              src={post.imageUrl}
              alt={post.title}
              width={100}
              height={100}
            />
          </div>
          <small>
            {new Date(post.createdAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </small>
        </div>
      ))}
    </DetailsStyleContainer>
  );
};

export default Details;
