import "./intro.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/all";
import cursorIcon from "../../assets/icons/cursor.svg";
import eyesIcon from "../../assets/icons/eyes.svg";
import lightIcon from "../../assets/icons/light.svg";
import planetIcon from "../../assets/icons/planet.svg";
import pointerIcon from "../../assets/icons/pointer.svg";
import awardIcon from "../../assets/icons/award.svg";
import plantIcon from "../../assets/icons/plant.svg";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, MorphSVGPlugin);

const Intro = () => {
  const headingRef = useRef(null);
  const tickerRef = useRef(null);
  const moonsRef = useRef(null);
  const ellipseRef = useRef(null);
  const titlesRef = useRef(null);

  useEffect(() => {
    const ticks = tickerRef.current?.querySelectorAll(".homepage-header__tick");
    const titles = titlesRef.current;
    const titleElements = titles?.querySelectorAll(".homepage-header__title");
    const headingSpans = headingRef.current?.querySelectorAll("span");

    // Heading scroll animation
    if (
      !CSS.supports("animation-timeline", "view(y 100lvh 50px)") &&
      headingSpans
    ) {
      headingSpans.forEach((span) => {
        gsap.to(span, {
          scrollTrigger: {
            trigger: span,
            endTrigger:
              window.innerWidth > 1024 ? span : span.closest("section"),
            start: "top top+=24",
            end: window.innerWidth > 1024 ? "center top" : "bottom top",
            toggleActions: "play none play reverse",
            scrub: window.innerWidth > 1024,
          },
          duration: 0.3,
          scale: window.innerWidth > 1024 ? 0.3 : 0.5,
          ease: "none",
        });
      });
    }

    if (ticks) {
      const timeline = gsap.timeline({
        repeat: -1,
      });

      ticks.forEach((tick, index) => {
        timeline
          .to(
            tick,
            {
              y: "0",
              duration: 0.5,
              delay: 3 * index,
              ease: "back.out(1)",
            },
            `-=${3 * index}`
          )
          .to(
            tick,
            {
              y: "-1.1em",
              duration: 0.5,
              ease: "back.out(1)",
            },
            `<+3`
          );
      });
    }

    const moons = moonsRef.current?.querySelectorAll(".item");

    if (moons) {
      gsap.set(moons, {
        transformOrigin: "50% 50%",
      });

      const totalMoons = moons.length;
      moons.forEach((moon, index) => {
        gsap.to(moon, {
          motionPath: {
            path: ".motionpath path",
            align: ".motionpath path",
            start: index / totalMoons,
            end: index / totalMoons + 1,
          },
          duration: 16,
          repeat: -1,
          ease: "linear",
        });
      });
    }

    var path = ellipseRef.current?.querySelectorAll("clipPath path"),
      ellipse = gsap.timeline({
        repeat: -1,
        yoyo: !0,
      });

    ellipse.to(path[0], {
      duration: 20,
      morphSVG: path[1],
      ease: "power4.out",
      delay: 1,
    }),

    ellipse.to(path[0], {
      duration: 20,
      morphSVG: path[0],
      ease: "power4.out",
    });

    // Perspective animations
    if (titles && titleElements) {
      const perspectiveX = gsap.quickTo(titleElements, "--perspective-x", {
          duration: 0.4,
          ease: "power1",
        }),
        perspectiveY = gsap.quickTo(titleElements, "--perspective-y", {
          duration: 0.4,
          ease: "power1",
        }),
        rotationX = gsap.quickTo(titles, "rotationX", {
          duration: 0.4,
          ease: "power1",
        }),
        rotationY = gsap.quickTo(titles, "rotationY", {
          duration: 0.4,
          ease: "power1",
        });

      // Mouse move handler for perspective effect
      const handleMouseMove = (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        rotationX(15 * y);
        rotationY(15 * x);
        perspectiveX(x * 2);
        perspectiveY(y * 2);
      };

      // Add mouse move handler only if motion is not reduced
      const mediaQuery = window.matchMedia(
        "(prefers-reduced-motion: no-preference)"
      );
      if (mediaQuery.matches) {
        titles.addEventListener("mousemove", handleMouseMove);
      }

      // Scroll animations for titles if CSS view timeline is not supported
      if (!CSS.supports("animation-timeline", "view(y 100lvh 50px)")) {
        // Top title animation
        gsap.set(titleElements[0], {
          fontVariationSettings: '"ytuc" 100',
        });

        gsap.to(titleElements[0], {
          scrollTrigger: {
            trigger: titles,
            start: "24px top",
            end: "bottom",
            scrub: window.innerWidth > 1024,
            toggleActions: "play none play reverse",
          },
          duration: 0.4,
          y: "-0.15em",
          fontVariationSettings: '"ytuc" 0',
        });

        // Bottom title animation
        gsap.set(titleElements[1], {
          fontVariationSettings: '"ytuc" 0',
        });

        gsap.to(titleElements[1], {
          scrollTrigger: {
            trigger: titles,
            start: "top top-=24",
            end: "bottom",
            scrub: window.innerWidth > 1024,
            toggleActions: "play none play reverse",
          },
          duration: 0.4,
          y: "-0.5em",
          fontVariationSettings: '"ytuc" 100',
        });
      }

      // Cleanup
      return () => {
        titles.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <section className="homepage-header">
      <section className="scroll-heading">
        <h2 className="js-scroll-heading medium-heading caps" ref={headingRef}>
          <span>
            Debjyoti
            <br />
            Saha
          </span>
        </h2>
      </section>
      <div className="homepage-header__titles" ref={titlesRef}>
        <h1 className="sr-only">Frontend Developer </h1>
        <h1
          className="homepage-header__title homepage-header__title--top huge-hero vf caps"
          aria-hidden="true"
        >
          Frontend
        </h1>
        <div className="moons" ref={moonsRef}>
          <div className="item" aria-hidden="true">
            <img alt="" src={cursorIcon} />
          </div>
          <div className="item" aria-hidden="true">
            <img alt="" src={eyesIcon} />
          </div>
          <div className="item" aria-hidden="true">
            <img alt="" src={lightIcon} />
          </div>
          <div className="item" aria-hidden="true">
            <img alt="" src={planetIcon} />
          </div>
          <div className="item" aria-hidden="true">
            <img alt="" src={pointerIcon} />
          </div>
          <div className="item" aria-hidden="true">
            <img alt="" src={awardIcon} />
          </div>
          <div className="item" aria-hidden="true">
            <img alt="" src={plantIcon} />
          </div>
        </div>

        <svg
          aria-hidden="true"
          className="motionpath"
          viewBox="0 0 1474 782"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M723.5 35.0001C1144.17 -39.9999 1836.8 -41.2999 1242 553.5C498.5 1297 -832.5 -25.9997 723.5 35.0001Z"></path>
        </svg>

        <svg
          aria-hidden="true"
          className="homepage-header__ellipse"
          ref={ellipseRef}
          viewBox="0 0 1718.10407 1082.34997"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <clipPath id="clip-clop">
              <path
                d="M1679.18 536.76 C1683.31 536.76 1687.44 536.76 1691.57 536.76 1610.16 1018.66 1364.22 1015.6 862.89 1070.27 110.89 1152.27 0 735.06 0 599.06 0 463.06 61.3 41.27 1035.11 1.27 1434.44 -19.39 1690.2 297.68 1691.57 536.75 1687.44 536.75 1683.31 536.75 1679.18 536.75 1652.34 291.99 1447.11 -0.06 1035.11 15.27 417.11 38.27 20 300.06 20 599.06 20 898.06 340.89 1118.27 862.89 1055.27 1328.55 1000.91 1572.54 1021.5 1679.18 536.76 "
                className="transform-0"
                data-original="M1708,275.627991 L1717,275.627991 C1687,786.567482 1330.33333,1017.96132 829,1072.62799 C77,1154.62799 0,669.627991 0,533.627991 C0,397.627991 13,60.6279919 908,3.62799184 C1307.33333,-17.0386748 1708,47.5674823 1717,275.567482 L1708,275.567482 C1682,43.5674823 1320,2.2946585 908,17.6279919 C290,40.6279919 20,234.627991 20,533.627991 C20,832.627991 307,1120.62799 829,1057.62799 C1298.33333,1018.29466 1657,775.567482 1708,275.627991 Z"
              ></path>
              <path
                d="M1674,583.785575 L1687,583.785575 C1596.33333,1060.45224 1370.33333,1015.17941 869,1069.84608 C117,1151.84608 0,746.846084 0,610.846084 C0,474.846084 70,37.7855753 1058,0.846084822 C1457.33333,-19.8205818 1687,342.725066 1687,583.785575 L1674,583.785575 C1647,336.725066 1470,-0.487248518 1058,14.8460849 C440,37.8460849 20,311.846084 20,610.846084 C20,909.846084 347,1117.84608 869,1054.84608 C1334,997.785575 1557.33333,1065.78558 1674,583.785575 Z"
                className="transform-1"
              ></path>
            </clipPath>
          </defs>
          <path
            d="M1708,275.627991 L1717,275.627991 C1687,786.567482 1330.33333,1017.96132 829,1072.62799 C77,1154.62799 0,669.627991 0,533.627991 C0,397.627991 13,60.6279919 908,3.62799184 C1307.33333,-17.0386748 1708,47.5674823 1717,275.567482 L1708,275.567482 C1682,43.5674823 1320,2.2946585 908,17.6279919 C290,40.6279919 20,234.627991 20,533.627991 C20,832.627991 307,1120.62799 829,1057.62799 C1298.33333,1018.29466 1657,775.567482 1708,275.627991 Z"
            clipPath="url(#clip-clop)"
            fill="none"
            strokeWidth="500"
            id="dash-offset"
          ></path>
        </svg>
        <h1
          className="homepage-header__title homepage-header__title--bottom huge-hero vf caps"
          aria-hidden="true"
        >
          Developer
        </h1>
      </div>
      <div
        className="homepage-header__ticker caps small-heading font-bold"
        ref={tickerRef}
      >
        <p className="homepage-header__tick">
          Frontend Developer with a passion to turn ideas into realities
          <svg viewBox="0 0 226 228" xmlns="http://www.w3.org/2000/svg">
            <path d="M226 103C160.5 103 140.5 82.9997 140.5 3.5C140.5 83 120.5 103 56.5 103C120.5 103 140.5 123 142.5 216C140.5 123 160.5 103 226 103Z"></path>
            <path d="M29 172.696C61.0737 172.696 70.8673 162.908 70.8673 124C70.8673 162.908 80.6608 172.696 112 172.696C80.6608 172.696 70.8673 182.485 69.8879 228C70.8673 182.485 61.0736 172.696 29 172.696Z"></path>
            <path d="M0 48.6964C26.2773 48.6964 34.3009 38.9082 34.3009 0C34.3009 38.9083 42.3245 48.6964 68 48.6964C42.3245 48.6964 34.3009 58.4847 33.4985 104C34.3009 58.4847 26.2771 48.6964 0 48.6964Z"></path>
          </svg>
        </p>
        <p className="homepage-header__tick">
          I turn designs into rich experiences
        </p>
        <p className="homepage-header__tick">
          I build creative, accessible websites
        </p>
      </div>
    </section>
  );
};

export default Intro;
