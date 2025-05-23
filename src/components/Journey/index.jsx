import "./journey.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/all";
import innoImage from "../../assets/inno.jpg";
import clgImage from "../../assets/clg.jpg";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

const Journey = () => {
  const innoImgRef = useRef(null);
  const clgImgRef = useRef(null);
  const firstArrowPath = useRef(null);
  const secondArrowPath = useRef(null);

  useEffect(() => {
    if (innoImgRef.current) {
      gsap.fromTo(
        innoImgRef.current,
        {
          scale: 0.7,
          rotate: 0,
          opacity: 0,
        },
        {
          scale: 1,
          rotate: 5,
          opacity: 1,
          scrollTrigger: {
            trigger: innoImgRef.current,
            start: "top+=50 bottom",
            end: "bottom+=50 bottom",
            scrub: 1,
          },
        }
      );
    }

    if (clgImgRef.current) {
      gsap.fromTo(
        clgImgRef.current,
        {
          scale: 0.7,
          rotate: 0,
          opacity: 0,
        },
        {
          scale: 1,
          rotate: -5,
          opacity: 1,
          scrollTrigger: {
            trigger: clgImgRef.current,
            start: "top+=50 bottom",
            end: "bottom+=50 bottom",
            scrub: 1,
          },
        }
      );
    }

    if (firstArrowPath.current) {
      var action = gsap
        .timeline({
          defaults: { duration: 2, ease: "none" },
          scrollTrigger: {
            trigger: "#arrow1",
            scrub: 1,
            start: "top bottom-=200",
            end: "bottom bottom",
          },
        })
        .fromTo(
          firstArrowPath.current,
          { drawSVG: "0%" },
          { drawSVG: "100%" },
          0
        );
    }

    if (secondArrowPath.current) {
      var action = gsap
        .timeline({
          defaults: { duration: 1, ease: "none" },
          scrollTrigger: {
            trigger: "#arrow2",
            scrub: 1,
            start: "top bottom-=200",
            end: "bottom bottom",
          },
        })
        .fromTo(
          secondArrowPath.current,
          { drawSVG: "0%" },
          { drawSVG: "100%" },
          0
        );
    }

    const timelineTitles = document.querySelectorAll(".timeline-title");
    if (timelineTitles) {
      timelineTitles.forEach((title, index) => {
        gsap.fromTo(
          title,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: title,
              start: "top bottom",
              end: "center center",
              scrub: 1,
              toggleActions: "play none play reverse",
            },
            duration: 0.4,
          }
        );
      });
    }

    gsap.utils.toArray(".timeline-content").forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section className="journey">
      <section className="scroll-heading">
        <h2 className="js-scroll-heading medium-heading caps">
          <span>
            My
            <br />
            Journey
          </span>
        </h2>
      </section>
      <section className="journey-container">
        <svg
          id="arrow1"
          width="282"
          height="501"
          viewBox="0 0 282 501"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={firstArrowPath}
            d="M216 2C251.407 25.6175 270.074 45.018 276.33 61.902C279.437 70.289 279.488 78.0693 277.089 85.3637C274.681 92.6876 269.77 99.6187 262.798 106.207C248.829 119.406 226.854 130.982 201.284 141.394C175.746 151.793 146.781 160.972 118.939 169.44C91.1288 177.898 64.406 185.658 43.4705 193.196C33.0004 196.966 23.9225 200.7 16.8473 204.463C9.82695 208.197 4.5559 212.072 1.96261 216.221C0.640394 218.336 -0.018705 220.575 0.200882 222.907C0.419514 225.229 1.49314 227.474 3.32971 229.641C6.95825 233.923 13.7931 238.168 24.1354 242.517C44.8858 251.245 80.5816 260.721 136 270C167.236 277.62 186.352 281.928 196.173 285.24C198.622 286.066 200.438 286.812 201.704 287.485C203.035 288.193 203.52 288.7 203.644 288.929C203.677 288.989 203.641 288.947 203.659 288.86C203.671 288.8 203.683 288.853 203.526 289.013C203.18 289.367 202.411 289.841 201.041 290.385C198.356 291.45 194.083 292.513 188.487 293.67C182.917 294.822 176.151 296.045 168.529 297.451C153.304 300.258 134.737 303.78 115.861 308.855C96.9901 313.929 77.7539 320.57 61.1973 329.64C44.6477 338.707 30.6698 350.259 22.4663 365.205C5.95294 395.291 13.2725 438.124 67.5 499.5"
            stroke="url(#paint0_linear_2_8)"
            strokeWidth="2"
            fill="none"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_8"
              x1="26.2928"
              y1="290.076"
              x2="313.148"
              y2="234.504"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AB83FE" />
              <stop offset="1" stopColor="#FBAE96" />
            </linearGradient>
          </defs>
        </svg>

        <div className="timeline-block">
          <div className="timeline-img" aria-hidden="true">
            <figure ref={clgImgRef}>
              <img src={clgImage} alt="Narula" />
              <figcaption className="pen">
                Convocation at Narula Institute ✨ (2021)
              </figcaption>
            </figure>
          </div>
          <div className="timeline-title">
            <h3>Graduation</h3>
            <span>(2017 - 2021)</span>
          </div>
          <div className="timeline-content pen">
            <p>
              I earned my B.Tech in Electronics and Communication Engineering at Narula Institute of Technology, where I unexpectedly discovered my true calling—web development. The creative blend of technology and design captivated me, sparking a passion that would reshape my entire career path. What started as engineering coursework evolved into late-night explorations of code, design, and the endless possibilities of crafting engaging digital experiences.
            </p>
          </div>
        </div>
        <svg
          id="arrow2"
          width="169"
          height="423"
          viewBox="0 0 169 423"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={secondArrowPath}
            d="M135.5 2C144.245 76.9059 159.366 157.822 143.887 231.129C128.437 304.292 82.455 370.127 2 415"
            stroke="url(#paint0_linear_784_72790)"
            strokeWidth="2"
            fill="none"
          />
          <defs>
            <linearGradient
              id="paint0_linear_784_72790"
              x1="-23.5881"
              y1="254.808"
              x2="198.544"
              y2="172.449"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BFF0FF" />
              <stop offset="1" stopColor="#82B4FF" />
            </linearGradient>
          </defs>
        </svg>
        <div className="timeline-block">
          <div className="timeline-img" aria-hidden="true">
            <figure ref={innoImgRef}>
              <img src={innoImage} alt="Innoraft" />
              <figcaption className="pen">
                Diwali at Innoraft 🪔 (2023)
              </figcaption>
            </figure>
          </div>
          <div className="timeline-title">
            <h3>Innoraft</h3>
            <span>(2021 - Present)</span>
          </div>
          <div className="timeline-content pen">
            <p>
              At {" "}
              <a href="https://www.innoraft.ai/" target="_blank">Innoraft</a>,
              my real journey began. What started as a trainee position became an incredible deep dive into the world of web development and software engineering. I didn't just learn technologies—I mastered them while collaborating with amazing teams and bringing digital visions to life for major brands like <a href="https://cummins.com/" target="_blank">Cummins</a>, <a href="https://www.hcltech.com/" target="_blank">HCLTech</a>, and <a href="https://www.o2ebrands.com/" target="_blank">O2E Brands</a>. From building my first component to leading entire frontend architectures, every project became a stepping stone to something bigger.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Journey;
