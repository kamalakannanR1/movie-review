const Filters = ({ onFilter }) => {
  return (
    <div className="flex gap-4 mb-4">
      <select
        onChange={(e) => onFilter("year", e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Years</option>
        <option value="2022">2022</option>
        <option value="2020">2020</option>
        <option value="2010">2010</option>
      </select>

      <select
        onChange={(e) => onFilter("rating", e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Ratings</option>
        <option value="7">7+</option>
        <option value="8">8+</option>
      </select>
    </div>
  );
};

export default Filters;