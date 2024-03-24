import * as React from "react";
import MyChart from "../BarFiles/MyChart.jsx";
import { useLocation } from "react-router-dom";
import DayTimeImage from "../../assets/day_team.jpeg";
import OSITimage from "../../assets/OSIT.jpeg";
import QuaterDepartmentImage from "../../assets/quarter_department.jpeg";

export default function Bars() {
  const location = useLocation();
  const receivedData = location.state && location.state.data;
  const selectedTeam = parseInt(
    location.state && location.state.additionalData
  );

  const maxTeamValue = Math.max(...receivedData);
  console.log(maxTeamValue);

  const data = receivedData.map((value, index) => ({
    name: `Team-${index + 1}`, // Generating name based on index
    value: value,
    color:
      value === maxTeamValue
        ? "#22c55e"
        : index + 1 === selectedTeam
        ? "#0284c7"
        : "#9ca3af", // Conditional color setting
  }));

  return (
    // bg-gradient-to-br from-sky-200 to-gray-400 via-transparent
    <div className="w-full h-screen font-mono bg-[#F7F9F9]">
      <div className=" flex">
        <div className="w-[40%] p-2 border">
          <h1 className="text-center mb-5">Past 3 Years Data Analysis</h1>
          <div className="">
            <img
              src={DayTimeImage}
              className=" mb-2 border shadow-sm"
              alt="Logo"
            />
          </div>
          <div className="">
            <img
              src={OSITimage}
              className="mb-2 border shadow-sm"
              alt="Logo1"
            />
          </div>
          <div className="">
            <img
              src={QuaterDepartmentImage}
              className="mb-2 border shadow-sm"
              alt="Logo2"
            />
          </div>
        </div>
        <div className="w-[60%] flex flex-col gap-2 items-center  ">
          <h1 className="text-center my-5">Team Productivity Chart</h1>

          <MyChart data={data} />

          <div className=" flex gap-5">
            <div className="flex gap-2 text-sm items-center">
              <div className="h-[25px] w-[25px] bg-[#22c55e]"></div>
              <p>Maximum Productive</p>
            </div>
            <div className="flex gap-2 text-sm items-center">
              <div className="h-[25px] w-[25px] bg-[#0284c7]"></div>
              <p>Selected Team</p>
            </div>
            <div className="flex gap-2 text-sm items-center">
              <div className="h-[25px] w-[25px] bg-[#9ca3af]"></div>
              <p>Other Teams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
