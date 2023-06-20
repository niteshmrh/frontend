import React from "react";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout.jsx/Layout";

function Dashboard(props) {
  return (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Details</h5>
              <Layout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
