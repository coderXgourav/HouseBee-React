import { Link,useLocation } from "react-router-dom";
import logo from "../../../assets/web/image 4.png";

import "../sidebar.css";
import { useState,useEffect } from "react";

const Sidebar = ({ children }) => {
  
  const menuChange = (changeMenu) => {
      setMenu(changeMenu);
  };

  const location = useLocation();
  const [menu, setMenu] = useState(null);
  // const [expandedMenu, setExpandedMenu] = useState(null);

  const isActive = (path) => location.pathname === path;

    useEffect(() => {
      if (isActive("/lender/dashboard")) {
        setMenu(0);
      } else if (isActive("/lender/lead-management")) {
        setMenu(1);
      }
      else if (isActive("/lender/setting")) {
        setMenu(2);
      }
    }, [location.pathname]);

  return (
    <div className="d-flex">
      <div className="col-md-2 sidebar bg-light vh-100 border">
        <div>
          <img src={logo} alt="logo" className="sideLogo" />
        </div>
        <div>
          <div className="row">
            <div className="mt-5"></div>
            <div className="col-md-2"></div>
            <div className="col-md-10">
              {/* Overview Menu Item */}
              <div
                className={`bg p-3 ${menu === 0 ? "round" : ""}`}
                onClick={() => menuChange(0)}
              >
                <Link to={"/lender/dashboard"} className="sidebarLinks">
                  <div className="d-flex align-items-center">
                    {/* <i className="fa fa-chart-pie me-2"></i> */}
                    Overview
                  </div>
                </Link>
              </div>

              {/* Lead Management Menu Item */}
              <div className="sidebar-menu-container">
                <div
                  className={`bg p-3 ${menu === 1 ? "round" : ""}`}
                  onClick={() => menuChange(1)}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <Link to={"/lender/lead-management"} className="sidebarLinks">
                      <div className="d-flex align-items-center">
                        {/* <i className="fa fa-users me-2"></i> */}
                        My Lead Management
                      </div>
                    </Link>
                    <i className={`text-secondary`}></i>
                  </div>
                </div>
              </div>

              {/* User Management Menu Item */}
              <div className="sidebar-menu-container"></div>

              <div
                className={`bg p-3 ${menu === 2 ? "round" : ""}`}
                onClick={() => menuChange(2)}
              >
                <Link to={"/lender/setting"} className="sidebarLinks">
                  <div className="d-flex align-items-center">Setting</div>
                </Link>
              </div>
            </div>
            <div className="topGap"></div>
            <div className="col-md-2"></div>
            <div className="col-md-10">
              <div className="p-3 logout">
                <Link to={""} className="text-light underlineNone">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.1251 12C16.1251 11.8011 16.0461 11.6103 15.9054 11.4697C15.7647 11.329 15.574 11.25 15.3751 11.25H4.40207L6.36307 9.57C6.43792 9.50591 6.49942 9.42771 6.54405 9.33986C6.58868 9.25201 6.61557 9.15622 6.62319 9.05798C6.6308 8.95973 6.61899 8.86095 6.58843 8.76727C6.55787 8.67359 6.50915 8.58685 6.44507 8.512C6.38098 8.43714 6.30278 8.37565 6.21493 8.33101C6.12708 8.28638 6.0313 8.25949 5.93305 8.25188C5.83481 8.24426 5.73603 8.25607 5.64235 8.28664C5.54867 8.3172 5.46192 8.36591 5.38707 8.43L1.88707 11.43C1.80473 11.5004 1.73863 11.5878 1.69331 11.6862C1.64798 11.7846 1.62451 11.8917 1.62451 12C1.62451 12.1083 1.64798 12.2154 1.69331 12.3138C1.73863 12.4122 1.80473 12.4996 1.88707 12.57L5.38707 15.57C5.53824 15.6994 5.73464 15.7635 5.93305 15.7481C6.13147 15.7327 6.31564 15.6392 6.44507 15.488C6.5745 15.3368 6.63857 15.1404 6.62319 14.942C6.60781 14.7436 6.51424 14.5594 6.36307 14.43L4.40307 12.75H15.3751C15.574 12.75 15.7647 12.671 15.9054 12.5303C16.0461 12.3897 16.1251 12.1989 16.1251 12Z"
                      fill="#F7F9FC"
                    />
                    <path
                      d="M9.375 8C9.375 8.702 9.375 9.053 9.544 9.306C9.61679 9.41478 9.71022 9.50821 9.819 9.581C10.072 9.75 10.423 9.75 11.125 9.75H15.375C15.9717 9.75 16.544 9.98705 16.966 10.409C17.3879 10.831 17.625 11.4033 17.625 12C17.625 12.5967 17.3879 13.169 16.966 13.591C16.544 14.0129 15.9717 14.25 15.375 14.25H11.125C10.423 14.25 10.072 14.25 9.819 14.418C9.71012 14.4911 9.61668 14.5849 9.544 14.694C9.375 14.947 9.375 15.298 9.375 16C9.375 18.828 9.375 20.243 10.254 21.121C11.132 22 12.546 22 15.374 22H16.374C19.204 22 20.617 22 21.496 21.121C22.375 20.243 22.375 18.828 22.375 16V8C22.375 5.172 22.375 3.757 21.496 2.879C20.617 2.001 19.203 2 16.375 2H15.375C12.546 2 11.132 2 10.254 2.879C9.375 3.757 9.375 5.172 9.375 8Z"
                      fill="#F7F9FC"
                    />
                  </svg>{" "}
                  &nbsp; Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 bg-light">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-12 bg-light border ">
              <div className="row header">
                <div className="col-md-4 userWelcome">
                  <p>Good Morning, Adam </p>
                  <span className=" userTestText">
                    Here is your daily preview
                  </span>
                </div>
                <div className="col-md-8">
                  <div className="row rightNav">
                    <div className="col-md-7">
                      <div className="iconBtn">
                        <div className="searchInputDiv">
                          <input
                            type="search"
                            className="searchInput"
                            placeholder="Search..."
                          />
                        </div>
                        <div>
                          <i className="fa-regular fa-bell bellIcon"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 iconBtn">
                      <div>
                        <button className="redBtn">Export Report</button>
                      </div>
                      <div className="">
                        <img src="/web/profile.png" alt="" />
                        &nbsp;
                        <i className="fa-solid fa-angle-down"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
