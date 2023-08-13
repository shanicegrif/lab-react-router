import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            <h3>
              Northwest <span>Animal Hospital</span>
            </h3>
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <Link to="/staff">
            <li>
              <h2>All Staff</h2>
            </li>
          </Link>
          <Link to="/pets">
            <li>
              <h2>All Pets</h2>
            </li>
          </Link>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
