import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        name=""
        id=""
        className="w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm"
        placeholder="Search..."
      />
      <IoSearch className="absolute left-3 top-2 text-gray-500 h-5 w-5" />

    </div>
  );
};

export default Search;
