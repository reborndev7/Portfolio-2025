import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__top">
        <a className="large-hero caps font-bold" href="/">
          Debjyoti Saha
        </a>
        <div className="right">
          <p className="small-heading caps font-bold">Frontend Developer </p>
        </div>
      </div>
      <div className="footer__middle">
        <p className="footer__contact large-body font-bold">
          <span className="caps">Want to Connect?</span>
          <br />
          <span className="email">
            <a className="font-regular" href="mailto:reborndev7@gmail.com">
              reborndev7@gmail.com
            </a>
          </span>
        </p>
      </div>
      <div className="footer__bottom caps medium-body">
        <div className="footer__socials">
          <ul className="socials">
            <li>
              <strong>Socials</strong>
            </li>
            <li>
              <a href="https://github.com/reborndev7" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://codepen.io/reborndev7" target="_blank">
                Codepen
              </a>
            </li>
            <li>
              <a href="http://linkedin.com/in/debjyoti-saha" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <p className="copyright">© 2025 Debjyoti Saha</p>
      </div>
    </footer>
  );
};

export default Footer;
