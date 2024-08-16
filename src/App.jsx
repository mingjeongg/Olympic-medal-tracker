import React, { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

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

  //정렬 함수
  const sortCountries = (sortCountries) => {
    // 인자를 배열로 받아옴
    // 받아오는 인자가 뭔진 모르지만, sortCountires로 이름 붙여 사용할거다
    return sortCountries.sort((a, b) => {
      return b.gold - a.gold;
    });
  };

  //추가함수
  const addCountries = (e) => {
    e.preventDefault();

    const isIncluded = countries.some((country) => {
      return country.country === countryInput;
    });
    //some함수 - 조건에 맞는게 배열에 있냐
    // some 쓰는 이유 - 같은게 있느냐 없느냐가 포인트
    // 근데 수정함수에서 find 쓰는 이유는 뭐가 같냐 그래서 뭘 수정해야하냐가 포인트라서 find 씀
    // 같은게 있으면 true 반환, 같은게 없으면 false 반환

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
      //배열을 정렬해서 countries에 담아줄거다
      // setcountries([...countries, newCountry].sort((a,b)=>{return b.gold-a.gold}))
      // 이렇게 해줘도 되지만 updateCountires 배열에서도 쓸거기 때문에 반복적으로 쓰는걸 줄이기 위해 sort 함수 만들어서 사용
    }
  };

  //업데이트함수
  const updateCountries = (e) => {
    e.preventDefault();
    // find 함수 쓰면 map처럼 전체 안찍어도 되고 하나 발견되면 거기서 끝. 더 경제적
    // 존재하는지 물어본
    const targetCountry = countries.find((country) => {
      return country.country === countryInput;
    });
    if (!targetCountry) {
      //그냥 alert() 하면 밑으로 흐른다, return alert() 해줘야 밑으로 안흐르고 함수를 빠져나감
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
  //삭제함수
  const deleteCountry = (a) => {
    // 같은 경우를 빼고 배열을 새로 만든다

    const undeletedCountries = countries.filter((country) => {
      return country.country !== a;
    });
    setcountries(undeletedCountries);
  };

  return (
    <div>
      <form>
        <label>국가명</label>
        <input
          type="text"
          onChange={countryInputHandler}
          value={countryInput}
        />
        <label>금메달</label>
        <input type="text" onChange={goldInputHandler} value={goldInput} />
        <label>은메달</label>
        <input type="text" onChange={silverInputHandler} value={silverInput} />
        <label>동메달</label>
        <input type="text" onChange={bronzeInputHandler} value={bronzeInput} />
        <button onClick={addCountries}>추가하기</button>
        <button onClick={updateCountries}>업데이트</button>
      </form>
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
            // .sort((a,b)=>{b.gold-a.gold})
            //만들어진 배열을 sort 해서 뿌려주면 안될까?
            //useState 통해서 나오는 변수들은 관리하는 거는 직접적으로 건드리지마라, set 통해서만 변경 가능하다
            // 근데 toSorted는 됨. 이건 원본 배열을 놔두고 복사본을 고침

            //map은 배열의 각 요소의 index를 두번째 인자로 받음
            .map((country, index) => {
              return (
                <tr key={crypto.randomUUID()}>
                  {/* 근데 index는 0부터 시작이니까 +1 해줘야함 */}
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
    </div>
  );
};
export default App;
