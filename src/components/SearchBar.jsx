import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    onSearch(val);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Search movies..."
      className="border p-2 w-full mb-4 rounded"
    />
  );
};

export default SearchBar;