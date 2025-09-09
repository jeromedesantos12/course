export default function Friend({
  id,
  image,
  name,
  balance,
  onSelected,
  selectedFriend,
}) {
  const isSelected = selectedFriend?.id === id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          Kamu berhutang Rp.{Math.abs(balance)} ke {name}
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} berhutang Rp.{Math.abs(balance)} ke kamu
        </p>
      )}
      {balance === 0 && <p>kamu dan {name} tidak ada hutang</p>}
      <button
        className="button"
        onClick={() => onSelected({ id, image, name, balance })}
      >
        {isSelected ? "Tutup" : "Pilih"}
      </button>
    </li>
  );
}
