import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  // let btnName = "Login";     normal javascript variable

  let [reactBtn, setReactBtn] = useState("Login");

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
