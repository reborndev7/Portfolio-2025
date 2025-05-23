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
  const firstArrowHead = useRef(null);
  const secondArrowRef = useRef(null);

  useEffect(() => {
    if (innoImgRef.current) {
      gsap.fromTo(
        innoImgRef.current,
        {
          scale: 0.7,
          rotate: 0,
        },
        {
          scale: 1,
          rotate: 5,
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
        },
        {
          scale: 1,
          rotate: -5,
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
      const drawAnimation = gsap.to(firstArrowPath.current, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".arrow",
          start: "top bottom-=100",
          end: "bottom center",
          scrub: 1,
          markers: true,
        }
      });
    }

    if (secondArrowRef.current) {
      gsap
        .timeline({
          defaults: { duration: 1, ease: "none" },
          scrollTrigger: {
            trigger: secondArrowRef.current,
            scrub: 1,
            start: "top bottom-=100",
            end: "bottom center",
          },
        })
        .fromTo(
          secondArrowRef.current,
          { drawSVG: "100% 100%" },
          { drawSVG: "0% 100%" },
          0
        );
    }

    gsap.utils.toArray(".timeline-title h3").forEach((element) => {
      gsap.set(element, {
        fontVariationSettings: '"ytuc" 100',
      });

      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "center center",
          scrub: 1,
        },
        duration: 0.4,
        y: "-0.15em",
        fontVariationSettings: '"ytuc" 0',
      });
    });

    gsap.utils.toArray(".timeline-content").forEach((element) => {
      gsap.fromTo(
        element,
        {
          scale: 0.8,
          opacity: 0.5,
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
          className="arrow"
          width="253"
          height="438"
          viewBox="0 0 253 438"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={firstArrowPath}
            d="M54.9897 432.168C18.9291 385.504 4.49536 351.847 3.0461 327.249C2.31033 314.76 4.922 304.627 9.73897 296.269C14.5672 287.891 21.6765 281.185 30.0905 275.67C46.6887 264.79 68.0506 258.732 86.1532 253.598L87.0845 253.334C96.1712 250.756 104.436 248.383 110.655 245.712C113.766 244.375 116.456 242.927 118.512 241.279C120.573 239.628 122.119 237.677 122.695 235.33C123.802 230.82 121.691 226.827 118.117 223.376C114.514 219.897 109.115 216.653 102.799 213.591C92.6446 208.668 79.8159 204.075 67.589 199.699C64.5949 198.627 61.637 197.568 58.7632 196.52C51.4323 193.848 44.6469 191.25 39.1414 188.684C33.5851 186.095 29.5213 183.622 27.4661 181.27C26.4477 180.104 26.0641 179.127 26.0573 178.332C26.0511 177.602 26.3626 176.719 27.4382 175.626C28.5397 174.507 30.3457 173.278 33.0622 171.972C35.762 170.674 39.2746 169.342 43.7149 167.977C47.23 166.897 51.1218 165.718 55.3293 164.444C93.9469 152.748 159.157 132.998 203.734 107.243C216.108 100.093 226.963 92.4428 235.241 84.3217C243.512 76.2066 249.312 67.5213 251.378 58.3061C255.548 39.7049 244.343 20.1981 211.525 0L209.88 2.69114C242.606 22.8325 252.231 41.3842 248.536 57.8686C246.669 66.1963 241.362 74.3106 233.355 82.1655C225.355 90.0145 214.759 97.5044 202.515 104.579C158.282 130.136 93.4399 149.778 54.7655 161.494C50.5611 162.768 46.666 163.947 43.1403 165.031C38.6136 166.423 34.945 167.807 32.0577 169.195C29.1871 170.575 26.9999 172 25.5106 173.513C23.9954 175.052 23.1183 176.779 23.1341 178.644C23.1494 180.446 23.9984 182.05 25.2313 183.461C27.6789 186.263 32.1931 188.923 37.7564 191.515C43.3703 194.131 50.2458 196.762 57.5834 199.437C60.4917 200.497 63.4723 201.564 66.4794 202.641C78.7 207.015 91.3582 211.547 101.378 216.405C107.625 219.433 112.729 222.536 116.035 225.728C119.37 228.948 120.574 231.949 119.868 234.826C119.537 236.173 118.602 237.519 116.882 238.897C115.158 240.279 112.767 241.592 109.771 242.88C103.774 245.455 95.7201 247.775 86.5726 250.37C86.1938 250.478 85.8132 250.586 85.4308 250.694C67.4735 255.785 45.7262 261.952 28.7158 273.102C20.0018 278.814 12.4504 285.882 7.27624 294.859C2.09095 303.856 -0.641288 314.659 0.128264 327.72C1.63227 353.248 16.5142 387.477 52.6754 434.264C53.3755 435.169 54.7996 436.995 54.7996 436.995L57.1255 434.914C56.4053 433.994 55.6934 433.078 54.9897 432.168Z"
            fill="url(#paint0_linear_4_4)"
          />
          <path
            ref={firstArrowHead}
            d="M57.411 436.019C57.3026 436.867 56.5662 437.526 55.7663 437.491L42.7305 436.911C41.9305 436.876 41.3699 436.159 41.4783 435.311C41.5867 434.462 42.323 433.803 43.1229 433.839L52.6754 434.264C53.3755 435.169 54.7996 436.995 54.7996 436.995L57.1255 434.914C56.4053 433.994 55.6934 433.078 54.9897 432.168L56.2804 422.066C56.3888 421.218 57.1251 420.559 57.925 420.594C58.725 420.63 59.2856 421.346 59.1772 422.195L57.411 436.019Z"
            fill="url(#paint1_linear_4_4)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4_4"
              x1="22.2981"
              y1="253.295"
              x2="281.397"
              y2="201.62"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AB83FE" />
              <stop offset="1" stopColor="#FBAE96" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_4_4"
              x1="22.2981"
              y1="253.295"
              x2="281.397"
              y2="201.62"
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
              I earned my B.Tech in Electronics and Communication Engineering
              degree at Narula Institute of Technology, while discovering my
              passion for web development. The creative blend of technology and
              design captivated me, leading me to dive deep into crafting
              engaging digital experiences through modern web technologies and
              thoughtful UI design.
            </p>
          </div>
        </div>
        <svg
          width="169"
          height="423"
          viewBox="0 0 169 423"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={secondArrowRef}
            d="M1.27217 416.815C0.555745 416.498 0.25627 415.593 0.603258 414.794L6.25742 401.777C6.60438 400.978 7.46642 400.588 8.18282 400.906C8.89922 401.224 9.19869 402.129 8.85174 402.927L3.82581 414.498L14.2031 419.1C14.9195 419.417 15.219 420.322 14.872 421.121C14.525 421.92 13.663 422.31 12.9466 421.992L1.27217 416.815ZM134.132 3.01078C133.857 2.22759 134.24 1.30542 134.987 0.951049C135.734 0.59668 136.562 0.944308 136.837 1.7275L134.132 3.01078ZM1.42742 413.94C98.2638 370.127 144.245 304.292 159.695 231.129C175.174 157.822 160.053 76.9059 134.132 3.01078L136.837 1.7275C162.832 75.8324 178.17 157.417 162.503 231.609C146.806 305.946 100.037 372.611 2.37338 416.799L1.42742 413.94Z"
            fill="url(#paint0_linear_784_72790)"
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
              At{" "}
              <a href="https://www.innoraft.ai/" target="_blank">
                Innoraft
              </a>
              , I got the oppurtunity to deep dive in the world of Web
              Development and Software Engineering. I learned many technologies
              and worked with multiple great teams and projects for big brands.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Journey;
