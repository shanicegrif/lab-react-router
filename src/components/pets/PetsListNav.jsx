import React from "react";
import "./PetsListNav.css";
import { Link } from "react-router-dom";

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <Link to="/pets/cats">
          <li>
            <p>See All Cats ({cats.length})</p>
          </li>
        </Link>
        <Link to="/pets/dogs">
          <li>
            <p>See All Dogs ({dogs.length})</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default PetsListNav;
