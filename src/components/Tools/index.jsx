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
import tailwindIcon from "../../assets/icons/tools/tailwindcss.svg";

gsap.registerPlugin(MotionPathPlugin);

const Tools = () => {
  const toolsOrbit = useRef(null);
  const toolsRef = useRef(null);

  useEffect(() => {
    const tools = toolsRef.current?.querySelectorAll(".tool-item");
    if (tools) {
      gsap.set(tools, {
        transformOrigin: "50% 50%",
      });
      const totalTools = tools.length;
      const animations = [];

      tools.forEach((tool, index) => {
        console.log(tool);
        const animation = gsap.to(tool, {
          motionPath: {
            path: ".toolspath path",
            align: ".toolspath path",
            alignOrigin: [0.5, 0.5],
            start: index / totalTools + 1,
            end: index / totalTools,
          },
          duration: 10,
          repeat: -1,
          ease: "linear",
        });
        animations.push(animation);

        tool.addEventListener("mouseenter", () => {
          console.log("Mouse enter:", index);
          animation.pause();
        });

        tool.addEventListener("mouseleave", () => {
          console.log("Mouse leave:", index);
          animation.play();
        });
      });

      // Cleanup event listeners on component unmount
      return () => {
        tools.forEach((tool, index) => {
          tool.removeEventListener("mouseenter", () => {
            animations[index].pause();
          });
          tool.removeEventListener("mouseleave", () => {
            animations[index].play();
          });
        });
      };
    }
  }, []);

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
        <div className="tools-orbit" ref={toolsOrbit}>
          <svg
            className="toolspath"
            viewBox="0 0 486 292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M478.99 139.841C460.462 178.64 447.733 202.691 422.829 223.979C374.069 265.673 314.127 291.414 248.354 291.988C184.294 292.579 121.973 270.873 71.7976 230.497C44.2896 208.259 28.2034 179.966 10.7657 147.64C-5.12444 118.199 -5.80016 50.5984 25.021 26.7687C55.8421 2.93904 98.0414 -19.4103 208.335 27.4205C318.628 74.2513 357.852 -14.5604 422.829 12.219C487.807 38.9984 494.488 107.295 478.99 139.841Z" />
          </svg>

          <div className="tools-wrap" ref={toolsRef}>
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
            <div className="tool-item" aria-hidden="true">
              <img alt="" src={tailwindIcon} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Tools;
