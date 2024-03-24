import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../utils/cn";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

//Text variants Framer Motion
const textVariants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
  },
};

export function DesignForm() {
  const [responseData, setResponseData] = useState(null);
  const [sendData, setSendData] = useState({
    teamNumber: 1,
    day: [1, 0, 0, 0, 0, 0, 0],
    department: [1, 0],
    no_of_workers: 0,
    over_time: 0,
    incentive: 0,
    smv: 0,
    quarter: 0,
    targeted_productivity: 0,
  });
  const [formData, setFormData] = useState({
    teamNumber: "1",
    day: "Monday",
    department: "Brickwork",
    no_of_workers: "0",
    overtime: "0",
    incentive: "0",
    smv: "0",
    quarter: 0,
    targetedProductivity: "0",
  });
  const additionalData = formData.teamNumber;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    // console.log(e.target.name);
    // console.log(e.target.value);
    let updatedValue: string | number | number[] = value; // Default to value directly
    if (name === "day") {
      const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      const selectedIndex = days.indexOf(value);
      updatedValue = Array(7).fill(0); // Initialize with all zeros
      if (selectedIndex !== -1) {
        updatedValue[selectedIndex] = 1; // Set the selected day to 1
      }
    } else if (name === "department") {
      updatedValue = value === "Brickwork" ? [1, 0] : [0, 1]; // Set array based on selected department
    }
    setFormData({
      ...formData,
      [name]: value,
    });
    setSendData({
      ...sendData,
      [name]: updatedValue,
    });
  };

  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Convert targetedProductivity to float, others to integer
    const updatedValue =
      name === "targetedProductivity" ? parseFloat(value) : parseInt(value, 10);

    // Check if parsed value is a valid number, if not, set to 0
    const sanitizedValue = isNaN(updatedValue) ? 0 : updatedValue;

    // Update both formData and sendData states with the parsed value
    setFormData({
      ...formData,
      [name]: sanitizedValue.toString(), // Convert back to string for formData
    });
    setSendData({
      ...sendData,
      [name]: sanitizedValue,
    });
  };

  // console.log(formData)
  // console.log(sendData);
  const navigate = useNavigate();

  // Use this handleSubmit if you have backend file
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(sendData);
    try {
      const res = await fetch("http://localhost:3000/proj1/pred_Prod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(sendData),
      });
      // console.log(res.body);
      if (!res.ok) {
        throw new Error("Unauthorized");
      }

      const responseData = await res.json();
      console.log({ responseData });
      navigate("/project-1/speedometer", {
        state: { data: responseData, additionalData: additionalData },
      });
      console.log("success");
    } catch (error) {
      console.error(error);
      // Handle error properly, such as showing a message to the user
    }
  };
  return (
    <motion.div
      className=" max-w-md w-full mx-auto rounded-none mb-[90px] md:rounded-2xl p-2  md:p-5 shadow-input bg-white dark:bg-black"
      initial="initial"
      animate="animate"
      variants={textVariants} // Apply variants to motion.div
    >
      <form className="my-3" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="mb-4">
            <label
              htmlFor="teamNumber"
              className=" block text-sm font-medium text-gray-700"
            >
              Team Number
            </label>
            <select
              id="teamNumber"
              name="teamNumber"
              className="cursor-pointer mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => handleChange(e)}
              value={formData.teamNumber}
            >
              {[...Array(12).keys()].map((num) => (
                <option
                  className="cursor-pointer"
                  key={num + 1}
                  value={num + 1}
                >
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="day"
              className="block text-sm font-medium text-gray-700"
            >
              Day
            </label>
            <select
              id="day"
              name="day"
              className="cursor-pointer mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => handleChange(e)}
              value={formData.day}
            >
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <option className="cursor-pointer" key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 flex-grow">
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <select
              id="department"
              name="department"
              className="cursor-pointer mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => handleChange(e)}
              value={formData.department}
            >
              <option className="cursor-pointer" value="Brickwork">
                Brickwork
              </option>
              <option className="cursor-pointer" value="Concreting">
                Concreting
              </option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <LabelInputContainer className="mr-2">
            <Label htmlFor="no_of_workers">Number of Workers</Label>
            <Input
              id="no_of_workers"
              name="no_of_workers"
              placeholder="Number of Workers"
              type="number"
              onChange={(e) => handleChange1(e)}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mr-2">
            <Label htmlFor="quarter">Quater</Label>
            <Input
              id="quarter"
              name="quarter"
              placeholder="Quater"
              type="number"
              onChange={(e) => handleChange1(e)}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="over_time">Overtime</Label>
          <Input
            id="over_time"
            name="over_time"
            placeholder="Overtime"
            type="number"
            onChange={(e) => handleChange1(e)}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="incentive">Incentive</Label>
          <Input
            id="incentive"
            name="incentive"
            placeholder="Incentive"
            type="number"
            onChange={(e) => handleChange1(e)}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="smv">SMV</Label>
          <Input
            id="smv"
            name="smv"
            placeholder="SMV"
            type="number"
            onChange={(e) => handleChange1(e)}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="targeted_productivity">Targeted Productivity</Label>
          <Input
            id="targeted_productivity"
            name="targeted_productivity"
            placeholder="Targeted Productivity"
            type="number"
            step="0.01" // Set the step to 0.01 for finer control
            min="0" // Set the minimum value to 0
            max="1" // Set the maximum value to 1
            onChange={(e) => handleChange1(e)}
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
    </motion.div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
