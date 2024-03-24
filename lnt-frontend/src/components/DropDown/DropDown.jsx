import React from "react";
import { Tweet } from "react-tweet";

const DropDown = ({ id, isOpen, onToggle, emotion, comment }) => {
  const handleToggle = () => {
    onToggle(id);
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-sans text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300 ease-in-out "
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        {comment}
        <svg
          className={`${
            isOpen ? "transform rotate-180" : ""
          } -mr-1 ml-2 h-5 w-5 transition duration-300 ease-in-out`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute w-full top-full z-10 right-0 bg-[#f7f9f9] shadow-md ">
          <div className="py-1 divide-y divide-solid">
            {emotion.map((value, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-300 transition duration-300 ease-in-out"
                role="menuitem"
                tabIndex="-1"
              >
                <Tweet id={value.id} />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
