import React from "react";

const Input = () => {
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
