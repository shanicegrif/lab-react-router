import React from "react";
import "./PetsListNav.css";
import { Link } from "react-router-dom";

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to="/pets/cats">
            <p>See All Cats ({cats.length})</p>
          </Link>
        </li>

        <li>
          <Link to="/pets/dogs">
            <p>See All Dogs ({dogs.length})</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
