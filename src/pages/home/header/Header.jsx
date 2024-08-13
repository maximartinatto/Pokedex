import React from "react";
import * as FaIcons from "react-icons/fa";
import css from "./Header.module.scss";
import logo from "../../../assets/pokemon.png";

export default function Header({ obtenerSearch }) {
  return (
    <nav className={css.header}>
      <div className={css.divHeader}>
        <div className={css.divLogo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={css.divSearch}>
          <div>
            <FaIcons.FaSearch />
          </div>
          <input
            type="search"
            onChange={(event) => obtenerSearch(event.target.value)}
          />
        </div>
      </div>
    </nav>
  );
}