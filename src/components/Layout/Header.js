import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import React from "react";
import HeaderCardButton from "./HeaderCardButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton>Cart</HeaderCardButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};
export default Header;