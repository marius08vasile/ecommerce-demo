'use client';

import { useEffect, useState } from "react";
import css from './navbar.module.scss';
import Link from "next/link";
import useCartState from "@/hooks/useCartState";

const NavBar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [stickyClass, setStickyClass] = useState("");
  const { cartCount } = useCartState();

  const handleTogglerClick = () => {
    setVisibleMenu(!visibleMenu);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setStickyClass(window.scrollY > 10 ? css.sticky : "");
    });
  });

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${!stickyClass && "position-absolute"} w-100 ${stickyClass}`}>
      <div className={`container px-4 px-lg-5`}>
        <Link className="navbar-brand" href="/">Ecommerce demo</Link>
        <button className="navbar-toggler" type="button" onClick={handleTogglerClick}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${visibleMenu ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item"><Link className="nav-link active" aria-current="page" href="/">Shop</Link></li>
          </ul>
          <form className="d-flex">
            <Link className="btn btn-outline-dark" href="/cart">
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;