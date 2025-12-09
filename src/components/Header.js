import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  // let btnName = "Login";     normal javascript variable

  let [reactBtn, setReactBtn] = useState("Login");

  console.log("header render");

  // if no dependency array => useEffect is called on every render
  //  useEffect(() => {
  //   console.log("useEffect Called");
  // });
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is [reactBtn] => useEffect is called everytime reactBtn is updated;
  useEffect(() => {
    console.log("useEffect Called");
  }, [reactBtn]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button
            className="Login-btn"
            onClick={() => {
              reactBtn === "Login"
                ? setReactBtn("Logout")
                : setReactBtn("Login");
            }}
          >
            {reactBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
