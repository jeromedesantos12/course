// Child 1 = kondisi dalam fungsi
function ArticleStatus({ status }) {
  return status && <b>--UPDATE!!</b>;
}

// Child 2 = kondisi di luar fungsi
function NewArticle() {
  return <b>--UPDATE!!</b>;
}

// Parent
function Article({ title, date, tags, isNew }) {
  return (
    <>
      <h3>{title}</h3>
      <small>
        Date: {date}, tags: {tags.join(", ")} <ArticleStatus status={isNew} />{" "}
        {/* {isNew && <NewArticle />} */}
      </small>
    </>
  );
}

export default Article;
