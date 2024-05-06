import React, {useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesContainer from "./CountriesContainer";
import { useTheme } from "../hooks/useTheme";
import "../App.css";
 

const Home = () => {
  const [query, setQuery] = useState("");
 const [isDark] = useTheme()
  return (
    <main className={isDark ? "dark" : ""}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu  setQuery={setQuery} />
      </div>
     
       <CountriesContainer query={query}  />
    </main>
  );
};

export default Home;
