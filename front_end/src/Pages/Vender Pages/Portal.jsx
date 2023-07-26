import React from 'react'
import Dashboard from "../../Component/Vender Component/Dashboard";
import CurrentMenus from "../../Component/Vender Component/CurrentMenus";
import image from "../../Image Component/A2KR.jpg";
import Profile from '../../Component/Vender Component/Profile';

function Portal() {
  return (
    <div className="vender-portal">
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills sidebar"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link side-btn"
            id="v-pills-home-tab"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            <img
              src={image}
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-egg-fill d-inline-block align-text-top"
              viewBox="0 0 16 16"
            />
          </button>
          <button
            className="nav-link active side-btn"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Dashboard
          </button>
          <button
            className="nav-link side-btn"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Current Menus
          </button>
          <button
            className="nav-link side-btn"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Profile
          </button>
          <button
            className="nav-link side-btn"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Log Out
          </button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <Dashboard />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <CurrentMenus/>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            <Profile/>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            fuck 4
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portal