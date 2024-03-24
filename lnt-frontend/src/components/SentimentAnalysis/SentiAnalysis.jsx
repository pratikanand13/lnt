import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { FaTwitter } from "react-icons/fa";
// import { Tweet } from "react-tweet";
import { useLocation } from "react-router-dom";
import DropDown from "../DropDown/DropDown";
import Loader from "../Loader/Loader";
import PieActiveArc from "./PieActiveArc";

export default function SentiAnalysis() {
  const location = useLocation();
  const receivedData = location.state && location.state.data;
  const [data, setData] = useState(null);
  const [openDropDownId, setOpenDropDownId] = useState(null);
  console.log(receivedData);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setData({
        message: receivedData.message,
        noNegative: receivedData.noNegative,
        noNeutral: receivedData.noNeutral,
        noPositive: receivedData.noPositive,
        percNegative: Math.round(receivedData.percNegative),
        percNeutral: Math.round(receivedData.percNeutral),
        percPositive: Math.round(receivedData.percPositive),
        topNegative: receivedData.topNegative.map((value, index) => ({
          id: value.tweetId,
        })),
        topPositive: receivedData.topPositive.map((value, index) => ({
          id: value.tweetId,
        })),
        topNeutral: receivedData.topPositive.map((value, index) => ({
          id: value.tweetId,
        })),
      });
    }, 2000);

    return () => clearTimeout(timeout);
  }, [receivedData]);

  if (!data) {
    return (
      <div className="w-[100%] h-[100%] flex ">
        <Loader />
      </div>
    );
  }

  const senti = [
    {
      label: "POSITIVE",
      value: data.percPositive,
      color: "#15803d",
      text: " Brillent effort guys! ",
    },
    {
      label: "NEUTRAL",
      value: data.percNeutral,
      color: "#0369a1",
      text: " Good Job but I will expect more in future.",
    },
    {
      label: "NEGATIVE",
      value: data.percNegative,
      color: "#f43f5e",
      text: " Totally dissatisfied with the service.",
    },
  ];
  const handleDropDownToggle = (id) => {
    setOpenDropDownId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flex h-[90vh] bg-[#F7F9F9]">
      <div className="flex w-[21%] flex-col h-full   relative border">
        <div className="flex flex-col gap-4 h-full px-2 overflow-y-auto p-4">
          <DropDown
            id={1}
            isOpen={openDropDownId === 1}
            onToggle={handleDropDownToggle}
            data={data}
            emotion={data.topPositive}
            comment="Positive Tweets"
          />
          <DropDown
            id={2}
            isOpen={openDropDownId === 2}
            onToggle={handleDropDownToggle}
            data={data}
            emotion={data.topNeutral}
            comment="Neutral Tweets"
          />
          <DropDown
            id={3}
            isOpen={openDropDownId === 3}
            onToggle={handleDropDownToggle}
            data={data}
            emotion={data.topNegative}
            comment="Negative Tweets"
          />

          {/* <DropDown key={3} data={data} emotion={data.topNegative} /> */}
        </div>
      </div>
      <div className="w-[78%] relative">
        <div className="absolute h-full w-full flex items-center justify-center ">
          <FaTwitter className="text-[200px] text-[#1D9BF0] text-blue-100" />
        </div>
        {/* <div className="absolute h-full w-full flex mx-[200px] items-center">{data.message}</div> */}
        <div className=" mt-1 flex flex-col xl:flex-row justify-center   ">
          {senti.map((sentiment, index) => (
            <div key={index} className="relative ">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: sentiment.value, color: sentiment.color },
                      { id: 1, value: 100 - sentiment.value, color: "#9ca3af" },
                    ],
                    innerRadius: 70,
                    outerRadius: 85,
                    paddingAngle: 1,
                    cornerRadius: 5,
                    startAngle: -180,
                    endAngle: 180,
                    cx: 150,
                    cy: 150,
                  },
                ]}
                width={300}
                height={300}
              ></PieChart>

              <p
                className={`absolute w-full h-full left-0 top-0 ml-2 mt-2 flex justify-center items-center text-lg font-sans text-center subpixel-antialiased font-bold`}
              >
                {sentiment.label} <br />
                {sentiment.value}%
              </p>
              {/* <p className="absolute w-full text-center">{sentiment.text}</p> */}
            </div>
          ))}
        </div>
        <div className="text-current absolute w-full h-full left-0 top-0 ml-2  flex justify-center items-center text-xl font-sans text-center subpixel-antialiased">
          <p className="font-bold">Enlightenment : </p>
          <p>{data.message}</p>
        </div>
        <div className="absolute flex w-full bottom-3  mb-[30px] justify-center ">
          <div className=" p-1 w-[45%]">
            {" "}
            <PieActiveArc
              noPositive={(data.noPositive)}
              noNeutral={data.noNeutral}
              noNegative={data.noNegative}
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
