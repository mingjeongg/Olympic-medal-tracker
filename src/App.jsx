import React, { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

const App = () => {
  const [countries, setcountries] = useState([]);

  return (
    <>
      <Input countries={countries} setcountries={setcountries} />
      <List countries={countries} setcountries={setcountries} />
    </>
  );
};
export default App;
