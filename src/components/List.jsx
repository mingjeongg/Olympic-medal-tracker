import React from "react";

const List = ({ countries, setcountries }) => {
  //삭제함수
  const deleteCountry = (a) => {
    const undeletedCountries = countries.filter((country) => {
      return country.country !== a;
    });
    setcountries(undeletedCountries);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>순위</th>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => {
          return (
            <tr key={crypto.randomUUID()}>
              <td>{index + 1}</td>
              <td>{country.country}</td>
              <td>{country.gold}</td>
              <td>{country.silver}</td>
              <td>{country.bronze}</td>
              <td>
                <button onClick={() => deleteCountry(country.country)}>
                  삭제
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
