import badgeText from "../../data/badgeText.json";
import Badge from "../atoms/Badge";

function Highlight() {
  return (
    <div className="buttons">
      {badgeText.map((data, index) => (
        <Badge {...data} key={index} />
      ))}
    </div>
  );
}

export default Highlight;
