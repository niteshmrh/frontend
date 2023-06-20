import React from "react";
import { NavLink } from "react-router-dom";
import AddUser from "../../model/AddUser";
import logo from "../../assets/images/logo.png";

function Header(props) {
  return (
    <nav className="bg-body-danger py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex  justify-content-between">
              <div className="logo fw-bold fs-4 text-danger">
                <NavLink to="/" className="linker">
                  <img
                    src={logo}
                    alt="logo"
                    width={69}
                    height={55}
                    className="d-inline-block align-text-top ms-1"
                  />
                  <span className="ms-3 mb-3 fs-10 text-decoration-none">
                    User Management
                  </span>
                </NavLink>
              </div>
              <div className="menu-bar">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#addUser"
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddUser />
    </nav>
  );
}

export default Header;
