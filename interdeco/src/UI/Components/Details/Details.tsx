import axios from "axios";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../state/useGlobalState";
import DetailsStyleContainer from "./DetailsStyleContainer";

const Details = () => {
  const [posts, setPosts] = useState<any[]>([]);

  const { episode, setBlogId } = useGlobalState((state) => {
    return {
      episode: state.episode,
      setBlogId: state.setBlogId,
    };
  }, shallow);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_API_URL}/api/posts`,
        );
        setPosts(response.data);

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleClick = (post: any) => {
    setBlogId(post._id);
  };

  return (
    <DetailsStyleContainer>
      {posts.map((post, idx) => (
        <div key={idx} className="container">
          <div className="content-container">
            <h2>{post.title}</h2>
            <div className="img-container">
              <img src={post.imageUrl} alt={post.title} />
            </div>
            {/* <p>
              {post.content.length > 30
                ? post.content.substring(0, 76) + "..."
                : post.content}
            </p> */}
            <div className="footer-container">
              <p
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(post)}
              >
                read s'more
              </p>

              <p>EP {episode}</p>

              <small>
                {new Date(post.createdAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </small>
            </div>
          </div>
        </div>
      ))}
    </DetailsStyleContainer>
  );
};

export default Details;
