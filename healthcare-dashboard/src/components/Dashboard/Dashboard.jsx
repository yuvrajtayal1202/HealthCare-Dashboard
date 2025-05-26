import "./Dashboard.css";
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import Activity from "./Activity";
import bodyImg from "../../assets/body.png";
export default function Dashboard() {
  return (
    <main className="dashboard-outer">
      <main className="dashboard-main">
        <div className="input">
          <FiSearch />

          <input type="text" placeholder="Search" />
          <IoMdNotifications />
        </div>

        <div className="heading">
          <h1>Dashboard</h1>
          <span>This Week</span>
        </div>
        <div className="main-dash">
          <div className="main-dash-left">
            <img src={bodyImg} alt="" />
            <span id="span-1">❤️ Healthy Heart</span>
            <span id="span-2">🦵 Healthy Leg</span>
            <div class="bottom-bar">
              {" "}
              <p></p>
            </div>
          </div>
          <div className="main-dash-right">
            <div className="main-dash-right-com">
              <h2>🫁 Lungs</h2>
              <span>Date: 26 Oct 2021</span>
              <div className="percent">
                {" "}
                <p></p>
              </div>
            </div>
            <div className="main-dash-right-com">
              <h2>🦷 Teeth</h2>
              <span>Date: 26 Oct 2021</span>
              <div className="percent">
                {" "}
                <p style={{color: "green"}}></p>
              </div>
            </div>
            <div className="main-dash-right-com">
              <h2>🦴 Bone</h2>
              <span>Date: 26 Oct 2021</span>
              <div className="percent">
                {" "}
                <p></p>
              </div>
            </div>
            <span className="details">Details</span>
          </div>
        </div>
      </main>
      <Activity/>
    </main>
  );
}
