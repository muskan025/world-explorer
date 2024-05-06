import React, { useEffect, useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import { ShimmerCountryList, ShimmerCountry } from "./ShimmerCountryList";

const CountriesContainer = ({ query}) => {
  const [countries,setCountries] = useState([])

  const filteredList = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(query) ||  country.region.toLowerCase().includes(query)
  );
  



// useEffect(()=>{
//   const updatedList=filteredList.length>0 ?filteredList:queryList
//   setCountries(updatedList)
// },[countries])

// countries.sort((a,b)=>{
//   let nameA = a.name.common.toLowerCase()
//   let nameB = b.name.common.toLowerCase()

//   if(nameA<nameB) return -1;
//   if(nameA>nameB) return 1;
//   if(nameA===nameB) return 0;

// })

  return (
    <>
      {!countriesData.length ? (
        <ShimmerCountryList />
      ) : (
        <div className="countries-container">
          {filteredList.map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                region={country.region}
                population={country.population}
                capital={country.capital?.[0]}
                data={country}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default CountriesContainer;
