import React from "react";
import { Icons } from "../../assets/icons";
import { NavLink } from "react-router-dom";
import "./style.css";

function Layout(props) {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-sm-4 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <table className="table table-sm table-borderless">
                    <tbody>
                      <tr>
                        <td>User Name :</td>
                        <td>
                          <span className="fw-semibold">Vaibhav Jain</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Phone No :</td>
                        <td>
                          <span className="fw-semibold">+91 876876991</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Email :</td>
                        <td>
                          <span className="fw-semibold">support@gmail.com</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="ms-2">
                    <NavLink to="#">
                      <span className="btn btn-primary float-start">
                        {Icons.TfiPencil}
                      </span>
                    </NavLink>
                    <NavLink to="#">
                      <span className=" btn btn-danger float-end">
                        {Icons.MdDelete}
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
