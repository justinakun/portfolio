import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Navbar from "../Navbar/Navbar";
import "./Burger.scss";

const Burger = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [crossClicked, setCrossClicked] = useState(true);

  const openAndCloseNav = () => {
    setBurgerClicked(!burgerClicked);
    setCrossClicked(!crossClicked);
  };

  return (
    <div>
      {!burgerClicked && crossClicked && (
        <CiMenuBurger className="burger-icon" onClick={openAndCloseNav} />
      )}
      {burgerClicked && !crossClicked && (
        <div className="cross-icon-container">
          <RxCross2 className="cross-icon" onClick={openAndCloseNav} />
          <Navbar />
        </div>
      )}
    </div>
  );
};

export default Burger;
