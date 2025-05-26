import "./Sidebar.css";
import { MdDashboardCustomize } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa6";
import { FcStatistics } from "react-icons/fc";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";


export default function Sidebar() {
  return (
    <main className="sidebar-main">
      <h1>
        <span id="h1-span1">Health</span>
        <span>care.</span>
      </h1>
      <nav>
        <ul id="general">
          <p>General</p>
          <li className="active">
            <MdDashboardCustomize />
            DashBoard
          </li>
          <li>
            <MdHistory />
            History
          </li>
          <li>
            <SlCalender />
            Calender
          </li>
          <li>
            <FaRegStar />
            Appointments
            </li>
          <li>
            <FcStatistics />
Statistics</li>
        </ul>
        <ul id="tools">
          <p>Tools</p>
          <li><IoChatbubbleEllipses />
Chat</li>
          <li><IoIosCall />
Support</li>
        </ul>
        <ul id="settings">
          <li><IoIosSettings />
Settings</li>
        </ul>
      </nav>
    </main>
  );
}
