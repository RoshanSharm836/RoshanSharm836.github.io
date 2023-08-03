import "./App.css";
import Heading from "./Heading";
import Social from "./Social";
function Contact() {
  return (
    <div className="portfolio-contact" id="contact">
      <Heading title="contact" />
      <div className="contact-flex">
        <div className="contact-info">
          <div className="what">
            <span className="contact-headingtitle">contact info</span>
            <hr className="hr1" />
            <hr className="hr2" />
          </div>
          <div className="what">
            <i className="icon">
              <img alt="" src="./gmail.png" />
            </i>
            <a
              className="contact_lable"
              target="_blank"
              href="mailto:roshan836sharma@gmail.com"
              id="contact-email"
              rel="noreferrer"
            >
              roshan836sharma@gmail.com
            </a>
          </div>
          <div className="what">
            <i className="icon">
              <img alt="6207412616" src="./phone-call.png" />
            </i>
            <a
              className="contact_lable"
              target="_blank"
              class="chakra-link work__tag-text css-sv0pe6"
              href="tel:6207412616"
              id="contact-phone"
              rel="noreferrer"
            >
              6207412616
            </a>
          </div>
          <div className="what">
            <i className="icon">
              <img alt="" src="./address.png" />
            </i>
            <span className="contact-title">Patna,Bihar</span>
          </div>

          <Social />
        </div>
        {/* <form className="contact-form" action="">
          <span> contact us</span>
          <input type="text" placeholder="name"></input>
          <input type="mail" placeholder="gmail"></input>
          <input type="number" placeholder="number"></input>
          <textarea placeholder="Message..." rows="5"></textarea>
          <button className="btm">submit</button>
        </form> */}
      </div>
    </div>
  );
}
export default Contact;
