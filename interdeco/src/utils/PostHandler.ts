const fetchAllPosts = (setLoading: any, setPosts: any) => {
  fetch("https://blog-backend-zh2z.onrender.com/api/posts")
    .then((res) => res.json())
    .then((data) => {
      setLoading(false);
      setPosts(data.posts);
    })
    .catch((err) => console.log(err));
};

const fetchPostContent = (slug: any, setLoading: any, setPost: any) => {
  fetch("https://blog-backend-zh2z.onrender.com/api/post/:id", {
    method: "POST",
    body: JSON.stringify({ slug: slug }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data: any) => {
      setLoading(false);
      setPost(data.post);
    })
    .catch((err) => console.log(err));
};

export { fetchAllPosts, fetchPostContent };
