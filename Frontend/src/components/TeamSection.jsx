import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import CustomCard from "./CustomCard";

const TeamSection = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Step 1: Add search query state
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Step 2: Filter the data based on the search query
    const filtered = data.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchQuery]);

  return (
    <section className="w-full overflow-y-scroll pb-4 p-6">
      <div className="container w-full flex flex-col mx-auto space-y-8 py-6">
        <div className="flex justify-between items-center w-full px-6 ">
          <div className="text-4xl font-bold  leading-none text-nowrap">
            Our Team
          </div>

          {/* Search bar */}
          <div className="flex items-center w-6/12  text-white">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 text-white flex items-center ps-3 pointer-events-none">
                <SearchIcon className="text-black" color="blue" />
              </div>
              <input
                type="text"
                id="voice-search"
                value={searchQuery} // Step 3: Bind input value to search query state
                onChange={(e) => setSearchQuery(e.target.value)} // Step 4: Update search query on input change
                className="bg-white text-blue-800 text-base rounded-lg placeholder:text-blue-800 block w-full ps-10 p-2.5 focus:outline focus:outline-blue-800"
                placeholder="Search incredible minds here..."
              />
            </div>
          </div>
        </div>

        {/* rahul bhandari */}
        <div className="flex flex-row items-center justify-evenly gap-8 w-full">
          {/* image */}
          <div className="flex flex-col  text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-32 h-32  bg-center bg-cover rounded-full dark:bg-gray-500"
              src="/images/profile/rb.jpg"
            />
            <p className="text-xl font-bold leading-tight mt-2">
              Rahul Bhandari
            </p>
            <sub className="text-sm font-semibold text-blue-800">
              Project Manager
            </sub>
          </div>
          <div>
            <div className="max-w-2xl  dark:text-gray-800 font-bold">
              "Every day may not be good, but there is something good in every
              day."
              <p className="text-end mr-7">- Rahul Bhandari</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="w-full grid grid-cols-4 gap-8 p-6">
          {filteredData.length > 0 ? (
            filteredData.map((user, index) => {
              return (
                <CustomCard key={index} user={user} allUsers={filteredData} />
              );
            })
          ) : (
            <p className="text-center col-span-4">No Members found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
