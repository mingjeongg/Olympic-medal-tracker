import React, { useState } from "react";

const Input = ({ countries, setcountries }) => {
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

      setcountries(sortCountries([...countries, newCountry]));
    }
  };

  //업데이트함수
  const updateCountries = (e) => {
    e.preventDefault();

    const targetCountry = countries.find((country) => {
      return country.country === countryInput;
    });
    if (!targetCountry) {
      return alert("등록된 국가가 아님");
    }
    const updatedMedal = countries.map((country) => {
      if (targetCountry) {
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
    setcountries(sortCountries([...updatedMedal]));
  };

  const sortCountries = (sortCountries) => {
    return sortCountries.sort((a, b) => {
      return b.gold - a.gold;
    });
  };

  return (
    <form>
      <label>국가명</label>
      <input type="text" onChange={countryInputHandler} value={countryInput} />
      <label>금메달</label>
      <input type="text" onChange={goldInputHandler} value={goldInput} />
      <label>은메달</label>
      <input type="text" onChange={silverInputHandler} value={silverInput} />
      <label>동메달</label>
      <input type="text" onChange={bronzeInputHandler} value={bronzeInput} />
      <button onClick={addCountries}>추가하기</button>
      <button onClick={updateCountries}>업데이트</button>
    </form>
  );
};

export default Input;
