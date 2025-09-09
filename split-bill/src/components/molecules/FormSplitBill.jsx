import { useState } from "react";

export default function FormSplitBill({
  selectedFriend: { name },
  onSplitBill,
}) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const friendBill = amount ? amount - myBill : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }

  return (
    <form action="" className="form-split-bill">
      <h2>Patungan Bareng si {name}</h2>
      <label>💵Total Tagihan</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label>🙋🏼‍♂️Tagihan Kamu</label>
      <input
        type="text"
        value={myBill}
        onChange={(e) => setMyBill(e.target.value)}
      />
      <label>🙋🏼Tagihan {name}</label>
      <input type="text" value={friendBill} disabled />
      <label>🤑Ditalangin sama</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">Kamu</option>
        <option value="friend">{name}</option>
      </select>
      <button className="button" onClick={handleSubmit}>
        Tambah
      </button>
    </form>
  );
}
