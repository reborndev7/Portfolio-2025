import Intro from "../../components/Intro";
import Journey from "../../components/Journey";
import Projects from "../../components/Projects";
import Tools from "../../components/Tools";

const Home = () => {
  return (
    <div className="main" id="main">
      <Intro />
      <Journey />
      <Projects />
      <Tools />
    </div>
  )
}

export default Home;