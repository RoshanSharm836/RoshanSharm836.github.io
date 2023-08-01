import "./App.css";
function Social() {
  return (
    <div className="socialsite">
      <div className="socialsite-icon">
        <a
          href="https://github.com/Roshanrocked"
          alt="github"
          id="contact-github"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="github"
            src="https://wac-cdn.atlassian.com/dam/jcr:4925019e-7cd0-44ba-b902-30a4666a1a14/github-grey.png?cdnVersion=1765"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/roshan-kumar-831194245/"
          target="_blank"
          id="contact-linkedin"
          rel="noreferrer"
        >
          <img
            alt="linkedIn"
            src="https://th.bing.com/th/id/R.d51da72e1f4675ba5aef9c956ed4c562?rik=FmeldpqK57Pqdw&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fofficial-linkedin-logo----17.png&ehk=D2%2b5urO8gseetYQhxdSGq2qyTRbSvoavbbmoGEuOepo%3d&risl=&pid=ImgRaw&r=0"
          />
        </a>
        <a
          target="_blank"
          href="mailto:roshan836sharma@gmail.com"
          id="contact-email"
          rel="noreferrer"
        >
          <img alt="mail" src="./gmail.png" />
        </a>
        <a
          target="_blank"
          class="chakra-link work__tag-text css-sv0pe6"
          href="tel:6207412616"
          id="contact-phone"
          rel="noreferrer"
        >
          <img alt="phone" src="./phone-call.png" />
        </a>
      </div>
    </div>
  );
}

export default Social;
