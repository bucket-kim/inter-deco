import HomeStyleContainer from "./HomeStyleContainer";

const Home = () => {
  return (
    <HomeStyleContainer>
      <h2>BLOG</h2>
      {/* <nav>
        <div>
          {loggedIn ? (
            <Link to={"/post/new"}>
              <h2>New Post</h2>
            </Link>
          ) : (
            <Link to={"/login"}>
              <h2>Login</h2>
            </Link>
          )}
        </div>
      </nav>
      <main>
        <h1>Latest Posts</h1>
        <div className="post-container">
          {posts.map((post: any) => (
            <Link to={`/post/${post.slug}`} key={post.post_id}>
              <h1>{post.title}</h1>
            </Link>
          ))}
        </div>
        <LogOut />
      </main> */}
    </HomeStyleContainer>
  );
};

export default Home;
