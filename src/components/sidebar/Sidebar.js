import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selectedButton, setSelectedButton] = useState("Home");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="sidebarContainer">
      <Link
        to="/"
        style={{ textDecoration: 'none', color: 'inherit' }}
        className={selectedButton === "Home" ? "selected" : ""}
        onClick={() => handleButtonClick("Home")
      }
      >
        <button>Home</button>
      </Link>
      <Link
        to="/aboutUs"
        style={{ textDecoration: 'none', color: 'inherit' }}
        className={selectedButton === "About Us" ? "selected" : ""}
        onClick={() => handleButtonClick("About Us")}
      >
        <button>About</button>
      </Link>
      <button
        className={selectedButton === "Logout" ? "selected" : ""}
        onClick={() => handleButtonClick("Logout")}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
