import "./header.css";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const headerRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);
  const email = "reborndev7@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Remove copied state after 2 seconds
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      gsap.to(window, {
        scrollTo: { y: targetSection },
        duration: 1,
        ease: "power2.out",
      });
    }

    // Collapse the header
    if (headerRef.current) {
      headerRef.current.classList.remove("is-open");
    }
  };

  const handleMenuClick = () => {
    if (headerRef.current) {
      headerRef.current.classList.toggle("is-open");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".header__link");

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header__left large-body caps font-bold">
        <Link to="/" className="header__logo vf">
          Dev
        </Link>
        <div className="header__email">
          <button
            className={`copy-email ${isCopied ? 'is-copied' : ''}`}
            onClick={handleCopyEmail}
          >
            <span className="sr-only">{isCopied ? 'Email copied!' : 'Copy email'}</span>
            <svg viewBox="0 0 716 543" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M75 72C75 32.2355 107.236 0 147 0H644C683.765 0 716 32.2355 716 72V396C716 435.765 683.765 468 644 468H641V473C641 511.66 609.66 543 571 543H70C31.3401 543 0 511.66 0 473V145C0 106.34 31.3401 75 70 75H75V72ZM75 115H70C53.4315 115 40 128.431 40 145V473C40 489.569 53.4315 503 70 503H571C587.569 503 601 489.569 601 473V468H147C107.235 468 75 435.764 75 396V115ZM115 72C115 66.1986 116.544 60.7578 119.243 56.0659C125.34 63.2175 133.081 72.2485 142.071 82.6308C165.049 109.167 196.235 144.593 228.995 180.057C261.686 215.447 296.238 251.195 325.888 278.216C340.671 291.687 354.659 303.38 366.859 311.826C372.951 316.043 379.009 319.74 384.805 322.45C390.267 325.004 397.189 327.5 404.544 327.5C411.93 327.5 418.841 324.986 424.287 322.403C430.051 319.67 436.037 315.946 442.026 311.712C454.016 303.233 467.683 291.51 482.07 278.026C510.931 250.979 544.42 215.208 576.045 179.811C607.739 144.338 637.859 108.904 660.036 82.3631C665.569 75.7413 670.611 69.6691 675.063 64.2833C675.675 66.7547 676 69.3395 676 72V396C676 413.673 661.673 428 644 428H147C129.327 428 115 413.673 115 396V72ZM158.136 40H643.239C639.077 45.0314 634.418 50.6391 629.341 56.7149C607.332 83.0546 577.517 118.128 546.216 153.161C514.847 188.272 482.282 223.007 454.717 248.84C440.892 261.797 428.753 272.107 418.932 279.052C414.015 282.529 410.093 284.864 407.146 286.262C405.9 286.853 405.042 287.173 404.527 287.343C403.991 287.171 403.081 286.839 401.747 286.215C398.706 284.794 394.673 282.431 389.626 278.938C379.547 271.96 367.062 261.619 352.831 248.651C324.454 222.791 290.816 188.032 258.377 152.915C226.006 117.872 195.122 82.7912 172.311 56.4471C167.143 50.479 162.392 44.9625 158.136 40Z"
              ></path>
            </svg>
          </button>
          <a href="mailto:reborndev7@gmail.com">{email}</a>
        </div>
      </div>
      <div className="header__inner">
        <button className="header__trigger" onClick={handleMenuClick}>
          <span className="sr-only">Menu</span>
          <span className="icon">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <g>
                <rect width="8" height="8"></rect>
                <rect x="12" width="8" height="8"></rect>
                <rect x="24" width="8" height="8"></rect>
                <rect y="12" width="8" height="8"></rect>
                <rect x="12" y="12" width="8" height="8"></rect>
                <rect x="24" y="12" width="8" height="8"></rect>
                <rect y="24" width="8" height="8"></rect>
                <rect x="12" y="24" width="8" height="8"></rect>
                <rect x="24" y="24" width="8" height="8"></rect>
              </g>
            </svg>
          </span>
        </button>
        <nav className="header__nav nav--top" aria-label="Top navigation">
          <ul className="header__list">
            <li className="header__item large-body caps font-bold">
              <a
                className="header__link"
                href="#my-journey"
                onClick={(e) => handleLinkClick(e, "#my-journey")}
              >
                My Journey
              </a>
            </li>
            <li className="header__item large-body caps font-bold">
              <a
                className="header__link"
                href="#projects"
                onClick={(e) => handleLinkClick(e, "#projects")}
              >
                Projects
              </a>
            </li>
            <li className="header__item large-body caps font-bold">
              <a
                className="header__link"
                href="#tools"
                onClick={(e) => handleLinkClick(e, "#tools")}
              >
                Tools
              </a>
            </li>
            <li aria-hidden="true" className="mobile-only">
              <hr />
            </li>
            <li className="header__item medium-body caps font-bold mobile-only">
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
                  <a
                    href="http://linkedin.com/in/debjyoti-saha"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </li>
            <li aria-hidden="true" className="mobile-only">
              <hr />
            </li>
            <li className="header__item medium-body caps font-bold mobile-only">
              <a href="mailto:reborndev7@gmail.com">reborndev7@gmail.com</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
