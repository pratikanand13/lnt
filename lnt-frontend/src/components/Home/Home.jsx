/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../assets/banner.png";
// import ModelViewer from "../models/ModelViewer"/;
import ModelViewer from "../models/ModelViewer";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-gray-300">
      <div className="h-[90vh] flex items-center justify-center overflow-x-hidden">
        <ModelViewer />
        <img className="max-h-[600px]" src={banner} alt="" />
      </div>
    </div>
  );
}
