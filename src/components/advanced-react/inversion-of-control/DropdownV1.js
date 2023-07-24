import React, { useState } from "react";

const Dropdown = ({
  options,
  placeholder = "Please select your job",
  inputPlaceholder,
  onChange = () => {},
  visibleIconCheck = false,
  visibleSearch = false,
}) => {
  const [show, setShow] = useState(false);
  const handleToogleDropdown = () => {
    setShow(!show);
  };
  return (
    <div className="relative inline-block w-full max-w-[300px]">
      <div
        className="flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer placeholder"
        onClick={handleToogleDropdown}
      >
        {placeholder}
      </div>
      {show && (
        <div className="border border-gray-300 rounded option">
          {options &&
            options.length > 0 &&
            options.map((option) => (
              <div
                className="flex items-center justify-between p-4 option-item"
                key={option.title}
                onClick={option.onCLick}
              >
                <span>{option.title}</span>
                {visibleIconCheck && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                )}
              </div>
            ))}
          {visibleSearch && (
            <div className="p-2 m-1 border border-gray-200 rounded">
              <input
                type="text"
                onChange={onChange}
                placeholder={inputPlaceholder}
                className="w-full p-4 outline-none"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
