import "./Main.scss";
import Hero from "../../components/Hero/Hero";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  return (
    <div className="main-container">
      <Topbar className="topbar-over"></Topbar>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
};

export default Main;
