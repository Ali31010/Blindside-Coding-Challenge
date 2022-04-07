import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  let navigate = useNavigate();

  const handleClick = () => navigate("/");

  return (
    <div>
      <header>
        <nav>
          <div class="logo">
            <a href="#">LOGO</a>
          </div>
          <ul>
            <li style={{color: 'white'}}>
              <a onClick={() => handleClick()}>Sign in</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
