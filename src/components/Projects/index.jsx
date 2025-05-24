import StamfordImg from "../../assets/Stamford.jpg";
import BrandStandardsImg from "../../assets/Brandstandards.jpg";
import "./projects.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const selectedWorkRef = useRef(null);

  useEffect(() => {
    const selectedWorkSection = selectedWorkRef.current;
    if (selectedWorkSection) {
      const workThumbnails =
        selectedWorkSection.querySelectorAll(".work-thumb");
      const scrollTicks = selectedWorkSection.querySelectorAll(".scroll-tick");

      gsap.to(workThumbnails, {
        rotate: "random(2deg, -2deg)",
      });

      scrollTicks.forEach((scrollTick, index) => {
        const animationTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: scrollTick,
            start: "top top",
            end: "bottom top",
            scrub: true,
            toggleActions: "play none play reverse",
          },
        });

        animationTimeline.set(workThumbnails[index], {
          rotate: "random(2deg, -2deg)",
          duration: 0.25,
        });

        if (index !== workThumbnails.length - 1) {
          animationTimeline.to(workThumbnails[index], {
            translateZ: "30px",
            left: "52%",
            rotateY: "2deg",
          });

          animationTimeline.to(
            workThumbnails[index].querySelector("img"),
            {
              scale: 1.1,
              x: "-1%",
            },
            "<"
          );

          animationTimeline.to(
            workThumbnails[index],
            {
              left: 0,
              rotateY: "-70deg",
              x: "-200%",
            },
            "+=.25"
          );

          animationTimeline.to(
            workThumbnails[index].querySelector("img"),
            {
              scale: 1.1,
              x: "10%",
            },
            "<"
          );
        }
      });

      workThumbnails.forEach((workThumbnail, index) => {
        workThumbnail.querySelector("a").addEventListener("focus", (event) => {
          event.preventDefault();
          event.stopPropagation();
          setTimeout(
            () => {
              ys.scrollTo(scrollTicks[index], {
                duration: 3,
              });
            },
            index === 0 ? 100 : 0
          );
        });
      });
    }
  }, []);

  useEffect(() => {
    const workThumbLinks = document.querySelectorAll(".work-thumb a");

    if (workThumbLinks.length) {
      workThumbLinks.forEach((link) => {
        let isClicked = false;

        link.addEventListener("click", (event) => {
          if (!isClicked) {
            event.preventDefault();
            isClicked = true;
          }

          const workThumb = link.closest(".work-thumb");
          const thumbTitle = workThumb.querySelector(".js-thumb-h3");
          const thumbMedia = workThumb.querySelector(".js-thumb-media");
          const selectedWorkSection = document.querySelector(".selected-work");

          if (selectedWorkSection) {
            selectedWorkSection.style.setProperty("--vt-name", "selected-work");
          }

          gsap.to(thumbMedia.querySelector("img"), {
            animation: "none",
            scale: 1,
            x: 0,
            duration: 0.25,
            ease: "power2.inOut",
            onComplete: () => {
              if (event.target.tagName === "A") {
                window.location.href = event.target.href;
              } else {
                const targetLink = event.target
                  .closest(".work-thumb")
                  .querySelector("a");
                window.location.href = targetLink.href;
              }
            },
          });

          thumbTitle.style.setProperty(
            "--vt-name",
            thumbTitle.dataset.vt.replace("--vt-name:", "")
          );
          thumbMedia.style.setProperty(
            "--vt-name",
            thumbMedia.dataset.vt.replace("--vt-name:", "")
          );
        });
      });
    }
  }, []);

  return (
    <section ref={selectedWorkRef} className="selected-work">
      <section className="scroll-heading">
        <h2 className="js-scroll-heading medium-heading caps">
          <span>
            Selected
            <br />
            work
          </span>
        </h2>
      </section>
      <div className="selected-work__items">
        <article
          className="work-thumb"
          style={{
            "animation-timeline": "--entry0",
            "--color-accent": "#d80a0a",
            "--custom-rotate": "-4deg",
            "--z-index": 0,
          }}
        >
          <div className="work-thumb__inner">
            <div className="work-thumb__side work-thumb__side--front">
              <div
                className="work-thumb__image js-thumb-media"
                data-vt="work-media-410"
              >
                <img fetchPriority="high" decoding="async" src={StamfordImg} />
              </div>
              <div className="work-thumb__text">
                <h3 className="work-thumb__title medium-heading caps">
                  <a
                    href="http://stamford-avk.com/"
                    className="js-thumb-h3"
                    data-vt="work-title-410"
                  >
                    <span>Stamford AVK</span>
                  </a>
                </h3>
                <div className="labels">
                  <span className="label caps font-bold small-body">2023 </span>
                  <span className="label caps font-bold small-body">
                    Drupal{" "}
                  </span>
                  <span className="label caps font-bold small-body">SCSS </span>
                </div>
              </div>
            </div>
            <div className="work-thumb__side work-thumb__side--back"></div>
          </div>
        </article>
        <article
          className="work-thumb"
          style={{
            "animation-timeline": "--entry1",
            "--color-accent": "#01463c",
            "--custom-rotate": "4deg",
            "--z-index": 1,
          }}
        >
          <div className="work-thumb__inner">
            <div className="work-thumb__side work-thumb__side--front">
              <div
                className="work-thumb__image js-thumb-media"
                data-vt="work-media-410"
              >
                <img
                  fetchPriority="high"
                  decoding="async"
                  src={BrandStandardsImg}
                />
              </div>
              <div className="work-thumb__text">
                <h3 className="work-thumb__title medium-heading caps">
                  <a
                    href="https://brandstandards.cummins.com/"
                    className="js-thumb-h3"
                    data-vt="work-title-410"
                  >
                    <span>Brand Standards</span>
                  </a>
                </h3>
                <div className="labels">
                  <span className="label caps font-bold small-body">2024 </span>
                  <span className="label caps font-bold small-body">
                    Drupal{" "}
                  </span>
                  <span className="label caps font-bold small-body">SCSS </span>
                </div>
              </div>
            </div>
            <div className="work-thumb__side work-thumb__side--back"></div>
          </div>
        </article>
      </div>
      <div className="scroll-ticks">
        <div className="scroll-tick" style={{ "view-timeline": "--entry0 y" }}></div>
        <div className="scroll-tick" style={{ "view-timeline": "--entry1 y" }}></div>
      </div>
    </section>
  );
};

export default Projects;
