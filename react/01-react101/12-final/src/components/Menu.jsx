import { foods } from "../data/foods.js";
import Food from "../atoms/Food.jsx";

function Menu() {
  const numFoods = foods.length;

  return (
    <div className="menu">
      <h2>Menu Kita</h2>
      {numFoods > 0 ? (
        <>
          <p>
            Aneka makanan Indonesia yang disajikan oleh warteg mang udin sebagai
            pemenuhan makanan kesehatan yang diperlukan dalam kehidupan
            sehari-hari.
          </p>
          <ul className="foods">
            {foods.map((food, index) => (
              <Food {...food} key={index} />
            ))}
          </ul>
        </>
      ) : (
        <p>Kosong, gan! Besok dateng lagi..</p>
      )}
    </div>
  );
}
export default Menu;
