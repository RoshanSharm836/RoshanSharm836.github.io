import "./App.css";
import Heading from "./Heading";
import Mail from "./Mail";
function Contact() {
  return (
    <div className="portfolio-contact" id="contact">
      <Heading title="contact" />
      <div className="contact-flex">
        <img src="contact.svg" alt="" srcset="" />
        <Mail />
      </div>
    </div>
  );
}
export default Contact;
