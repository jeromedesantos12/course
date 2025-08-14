function FooterOpenHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().getFullYear()} Warung Mank Udin | jam buka {jamBuka} | jam
          tutup {jamTutup}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function FooterCloseHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          Maaf gan masih tutup. Coba dateng lagi sekitar jam buka {jamBuka} |
          jam tutup {jamTutup}.
        </p>
      </div>
    </footer>
  );
}

export { FooterOpenHour, FooterCloseHour };
