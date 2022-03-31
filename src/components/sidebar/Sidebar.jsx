import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreIcon from "@mui/icons-material/Store";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">prahlad timalsina</span>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineOutlinedIcon className="icon" />
                <span>Users</span>
              </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <li>
                <StoreIcon className="icon" />
                <span>Products</span>
              </li>
            </Link>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>

            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>

            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Logs</span>
            </li>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Settings</span>
            </li>
            <p className="title">USER</p>

            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
          {/* <div className="colorOption"></div>
          <div className="colorOption"></div> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
