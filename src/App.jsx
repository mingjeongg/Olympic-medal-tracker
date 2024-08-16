import React, { useState } from "react";
// import Input from "./components/Input"
// import List from "./components/LIst"


const App = () => {
  const [countries, setcountries] = useState([]);

  const [countryInput, setcountryInput] = useState("");
  const [goldInput, setgoldInput] = useState(0);
  const [silverInput, setsilverInput] = useState(0);
  const [bronzeInput, setbronzeInput] = useState(0);

  const countryInputHandler = (e) => {
    setcountryInput(e.target.value);
  };

  const goldInputHandler = (e) => {
    setgoldInput(e.target.value);
  };

  const silverInputHandler = (e) => {
    setsilverInput(e.target.value);
  };

  const bronzeInputHandler = (e) => {
    setbronzeInput(e.target.value);
  };

  //추가함수

  const addCountries = (e) => {
    e.preventDefault();
    const isIncluded = countries.some((country) => {
      return country.country === countryInput;
    });
    if (isIncluded) {
      return alert("이미 등록된 국가다");
    } else {
      const newCountry = {
        country: countryInput,
        gold: goldInput,
        silver: silverInput,
        bronze: bronzeInput,
      };

      setcountries([...countries, newCountry]);
    }
  };

  //업데이트함수
  const updateCountries = (e) => {
    e.preventDefault();

    const isUnIncluded = countries.find((country) => {
      return country.country !== countryInput;
    });

    if (isUnIncluded) {
      alert("등록된 국가가 아님");
    }

    const isIncluded = countries.find((country) => {
      return country.country === countryInput;
    });

    const updatedMedal = countries.map((country) => {
      if (isIncluded) {
        const newMedal = {
          country: countryInput,
          gold: goldInput,
          silver: silverInput,
          bronze: bronzeInput,
        };
        return newMedal;
      } else {
        return country;
      }
    });
    setcountries(updatedMedal);
  };
  //삭제함수
  const deleteCountry = (a) => {
    const undeletedCountries = countries.filter((country) => {
      return country.country !== a;
    });
    setcountries(undeletedCountries);
  };

  return (

   
<Input />
<List />  







  );
};
export default App;
