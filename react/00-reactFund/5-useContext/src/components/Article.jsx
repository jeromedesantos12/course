import { useContext } from "react";
import { GlobalContext } from "../context";

// Child = kondisi dalam fungsi
function ArticleStatus({ status }) {
  return status && <b> --COMPLETED!!</b>;
}

// Parent
function Article({ title, completed }) {
  const { role } = useContext(GlobalContext);
  return (
    <>
      <div>
        - <b>{role}</b>: {title}
        <ArticleStatus status={completed} />{" "}
      </div>
    </>
  );
}

export default Article;
