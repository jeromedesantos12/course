import socialMedia from "../../data/socialMedia.json";
import SocialButton from "../atoms/SocialButton";

function Header() {
  const middleIndex = Math.ceil(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, middleIndex);
  const socialRight = socialMedia.slice(middleIndex);

  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((data, index) => (
          <SocialButton {...data} key={index} />
        ))}
      </div>
      <div className="social-buttons right">
        {socialRight.map((data, index) => (
          <SocialButton {...data} key={index} />
        ))}
      </div>
    </>
  );
}

export default Header;
