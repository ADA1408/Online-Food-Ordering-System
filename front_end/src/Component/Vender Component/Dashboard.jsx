import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function Dashboard() {
  return (
    <div className="sidebar-content">
      <div className="portal-header">
        <h5>Dashboard</h5>
      </div>
      <div className="content">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="card ana-card">
            <div className="card-body">
              <h6 className="card-subtitle mb-2">Orders</h6>
              <h5 className="card-title">0</h5>
              <i class="bi bi-basket-fill"></i>
            </div>
          </div>

          <div className="card ana-card">
            <div className="card-body">
              <h6 className="card-subtitle mb-2">Revenue</h6>
              <h5 className="card-title">Rs 0</h5>
            </div>
          </div>

          <div className="card ana-card">
            <div className="card-body">
              <h6 className="card-subtitle mb-2">Today's Orders</h6>
              <h5 className="card-title">0</h5>
            </div>
          </div>

          <div className="card ana-card">
            <div className="card-body">
              <h6 className="card-subtitle mb-2">Pending Orders</h6>
              <h5 className="card-title">0</h5>
            </div>
          </div>
        </div>

        <div className="analytics-chart">
          <LineChart />
          <PieChart />
        </div>

        <div
          className="dashboard-tables"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <table class="table table-dark pending-order">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Delivery Guy</th>
                <th scope="col">Status</th>
                <th scope="col">Dish Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img
                    src="https://images.unsplash.com/photo-1643834776503-891726ed42c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZiUyMHBob3Rvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{
                      borderRadius: "50%",
                      aspectRatio: "1 1",
                      height: "3rem",
                      width: "3rem",
                      objectFit: "cover",
                    }} 
                  ></img>
                </th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>

          <table class="table table-dark pending-order">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Bank Ack slip</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
