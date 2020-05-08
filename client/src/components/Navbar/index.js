import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import { Col, Row } from "../Grid/index";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center"
      role="navigation"
    >
      <Row>
        
        <Col size="md-12 sm-12">
          <div class="dropdown">
            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <strong>Brian Hernandez</strong>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/saved"
                className={
                  window.location.pathname === "/search"
                    ? "nav-link active"
                    : "dropdown-item"
                }>
                Projects
            </Link>
              <a class="dropdown-item" href="https://www.linkedin.com/in/brianhernandez487/">LinkedIn</a>
              <a class="dropdown-item" href="https://github.com/BrianHdz">GitHub</a>
              <a class="dropdown-item" href="/">Main Page</a>
            </div>
          </div>
          </Col>

      </Row>
    </nav>
  );
}

export default Navbar;
