import { useLoaderData } from "react-router-dom";

function SinglePost() {
  const post = useLoaderData();

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}

export default SinglePost;
