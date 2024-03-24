import React from "react";
import CustomDropdown from "../DropDown/CustomDropDown";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function Tweet() {
  return (
    <div className="flex justify-center items-center h-screen">
      <CustomDropdown options={options} />
    </div>
  );
}
