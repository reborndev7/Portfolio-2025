import "./tools.css";
import MeSVG
 from "../MeSVG";
const Tools = () => {
  return (
    <section className="tools">
      <section className="scroll-heading">
        <h2 className="js-scroll-heading medium-heading caps">
          <span>Tools</span>
        </h2>
      </section>
      <section className="me">
        <MeSVG />
      </section>
    </section>
  );
};

export default Tools;
