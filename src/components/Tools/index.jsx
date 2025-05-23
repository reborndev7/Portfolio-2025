import "./tools.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import MeSVG from "../MeSVG";
import reactIcon from "../../assets/icons/tools/react.svg";
import jsIcon from "../../assets/icons/tools/javascript.svg";
import cssIcon from "../../assets/icons/tools/css.svg";
import htmlIcon from "../../assets/icons/tools/html.svg";
import nodeIcon from "../../assets/icons/tools/nodejs.svg";
import bootstrapIcon from "../../assets/icons/tools/bootstrap.svg";
import phpIcon from "../../assets/icons/tools/php.svg";
import drupalIcon from "../../assets/icons/tools/drupal.svg";

gsap.registerPlugin(MotionPathPlugin);

const Tools = () => {
  const toolsRef = useRef(null);

  return (
    <section className="tools">
      <section className="scroll-heading">
        <h2 className="js-scroll-heading medium-heading caps">
          <span>Tools</span>
        </h2>
      </section>
      <section className="tools-container">
        <div className="me">
          <MeSVG />
        </div>
        <div className="tools-orbit" ref={toolsRef}>
          <svg
          aria-hidden="true"
          className="motionpath"
          viewBox="0 0 1474 782"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M723.5 35.0001C1144.17 -39.9999 1836.8 -41.2999 1242 553.5C498.5 1297 -832.5 -25.9997 723.5 35.0001Z"></path>
        </svg>
          <div className="tool-item" aria-hidden="true">
            <img alt="" src={reactIcon} />
          </div>
          <div className="tool-item" aria-hidden="true">
            <img alt="" src={jsIcon} />
          </div>
          <div className="tool-item" aria-hidden="true">
            <img alt="" src={cssIcon} />
          </div>
          <div className="tool-item" aria-hidden="true">
            <img alt="" src={htmlIcon} />
          </div>
          <div className="tool-item" aria-hidden="true">
            <img alt="" src={nodeIcon} />
          </div>
          <div className="tool-item" aria-hidden="true">
            <img alt="" src={bootstrapIcon} />
          </div>
          <div className="tool-item" aria-hidden="true">
            <img alt="" src={phpIcon} />
          </div>
          <div className="tool-item" aria-hidden="true">
            <img alt="" src={drupalIcon} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Tools;
