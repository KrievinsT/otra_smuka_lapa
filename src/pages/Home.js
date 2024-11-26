import React from "react";
import SearchBar from "../components/SearchBar";
function Home() {
  return (
      <>
        <div className="relative w-full bg-white py-8 bg-[linear-gradient(to_bottom,_#09261D_50%,_#ffffff_50%)]">
          <div className="max-w-7.5xl mx-auto px-4 sm:px-6">
            <div className="w-full flex items-center justify-center">
              <SearchBar />
            </div>
          </div>
        </div>
      </>
  );
}

export default Home;
