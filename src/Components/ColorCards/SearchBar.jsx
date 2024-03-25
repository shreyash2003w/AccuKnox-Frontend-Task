import React from 'react';
import { FaSistrix } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto mb-10">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <FaSistrix className="w-5 h-5 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search colors..."
        value={value}
        onChange={onChange}
        className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2  border-secondary  focus:ring-blue-500 focus:border-blue-500 shadow-sm"
      />
      <div className="flex absolute inset-y-0 right-0 items-center pr-3">
        {/*clear button */}
        {value && (
        <button
          onClick={() => onChange({ target: { value: '' } })}
          className="flex absolute inset-y-0 right-0 items-center pr-3 text-gray-500"
        >
          <FaXmark className="w-5 h-5" />
        </button>
      )}
      </div>
    </div>
  );
};

export default SearchBar;