import { Link } from "react-router-dom";

// Child = kondisi dalam fungsi
function ArticleStatus({ status }) {
  return status && <b> --COMPLETED!!</b>;
}

// Parent
function Article({ id, title, completed }) {
  return (
    <>
      <div>
        <Link to={`/post/${id}`}>Pages {id}</Link>: {title}
        <ArticleStatus status={completed} />{" "}
      </div>
    </>
  );
}

export default Article;
