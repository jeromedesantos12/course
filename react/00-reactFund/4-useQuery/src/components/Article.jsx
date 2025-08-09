// Child = kondisi dalam fungsi
function ArticleStatus({ status }) {
  return status && <b> --COMPLETED!!</b>;
}

// Parent
function Article({ title, completed }) {
  return (
    <>
      <div>
        - {title}
        <ArticleStatus status={completed} />{" "}
      </div>
    </>
  );
}

export default Article;
