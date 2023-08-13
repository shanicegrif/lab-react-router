import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <h3>
            <Link to="/">
              Northwest <span>Animal Hospital</span>
            </Link>
          </h3>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/staff">
              <h2>All Staff</h2>
            </Link>
          </li>
          <li>
            <Link to="/pets">
              <h2>All Pets</h2>
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
