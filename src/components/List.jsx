import React from "react";

const List = () => {
  return;
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
      {countries
        // 이렇게하면 왜 정렬 안되는지 모르겠ㅆ어요ㅏ,,,
        .sort((a, b) => {
          b.gold - a.gold;
        })
        .map((country) => {
          return (
            <tr key={crypto.randomUUID()}>
              {/* 정렬해서 순위 넣고 싶은데 어ㄸ떻게 넣어야 할 지 모르갰어요 */}
              <td>{country.index}</td>
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
  </table>;
};

export default List;
