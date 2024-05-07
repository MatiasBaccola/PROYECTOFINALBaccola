import "./CategoryList.css";
import {NavLink} from "react-router-dom"

function CategoryList() {
  return (
    <nav>
      <ul className="category--list">
      <li>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to={"/inicio"}>Inicio</NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to={"/computadoras"}>Computadoras</NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to={"/celulares"}>Celulares</NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to={"/smarttv"}>Smart Tv</NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to={"/electrodomesticos"}>Electrodomesticos</NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to={"/ubicacion"}>Ubicacion</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default CategoryList;
