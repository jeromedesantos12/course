import { FooterOpenHour, FooterCloseHour } from "../atoms/FooterHour.jsx";

function Footer() {
  const jam = new Date().getHours();
  const jamBuka = 12;
  const jamTutup = 22;
  const isOpen = jam >= jamBuka && jam <= jamTutup;

  if (isOpen) {
    return <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  } else {
    return <FooterCloseHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }
}

export default Footer;
