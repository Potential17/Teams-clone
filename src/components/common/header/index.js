import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-menu">
        <i class="fi-rr-layout-fluid"></i>
      </div>
      <div className="header-leftFold">
        <label className="header-label">Microsoft Teams</label>
      </div>
      <div className="header-rightFold">
        <div className="header-search">
          <i class="fi-rr-search"></i>
          <input placeholder="Search" />
        </div>
        <div className="header-profile">
          <div className="profile-options">
            <i class="fi-rr-menu-dots"></i>
          </div>
          <img
            className="header-avatar"
            src="https://img-premium.flaticon.com/png/128/706/premium/706807.png?token=exp=1624182303~hmac=9788db415530a6881c8ecb9cc316a61f"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
