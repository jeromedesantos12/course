function Stats({ items }) {
  const totalItems = items.length;
  const doneItems = items.filter((items) => items.done).length;
  const percentage = Math.round((doneItems / totalItems) * 100);

  if (totalItems === 0) {
    return (
      <footer className="stats">
        <span>🗒️ Yuk mulai buat catatan</span>
      </footer>
    );
  }

  return (
    <footer className="stats">
      <span>
        {percentage === 100
          ? "✅ Kamu sudah melakukan semua"
          : `🗒️ Kamu punya ${totalItems} catatan dan baru ${doneItems} yg di checklist ${percentage}% ✅`}
      </span>
    </footer>
  );
}

export default Stats;
