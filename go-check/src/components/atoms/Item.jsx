function Item({ id, title, done, onDeleteItem, onToggleItem }) {
  return (
    <li key={id}>
      <input type="checkbox" value={done} onChange={() => onToggleItem(id)} />
      <span style={{ textDecoration: done ? "line-through" : "none" }}>
        {title}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}

export default Item;
