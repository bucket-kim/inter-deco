const fetchAllPosts = (setLoading: any, setPosts: any) => {
  fetch("http://localhost:4000/posts")
    .then((res) => res.json())
    .then((data) => {
      setLoading(false);
      setPosts(data.posts);
    })
    .catch((err) => console.log(err));
};

const fetchPostContent = (slug: any, setLoading: any, setPost: any) => {
  fetch("http://localhost:4000/post/details", {
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
