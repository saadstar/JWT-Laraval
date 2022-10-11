import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Home
        </Link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" to="/login">
                Log In
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
