import React, { useState } from "react";
import "./App.css";
import Table from "./components/table";
import data from "./components/data/Table Contents.json";
function App() {
  const [searchInput, setSearchInput] = useState("");
  const [multiplier, setMultiplier] = useState({
    active: false,
    value: 0,
    inputValue: 0,
  });
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleMultiplierInputChange = (event) => {
    setMultiplier({ ...multiplier, inputValue: event.target.value });
  };
  const handleApply = () => {
    setMultiplier({
      ...multiplier,
      active: !multiplier.inputValue == 0,
      value: multiplier.inputValue,
    });
  };
  const handleReset = () => {
    setMultiplier({ active: false, value: 0, inputValue: 0 });
  };
  const tableData = [];
  data.forEach((record) => {
    if (record.A.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())) {
      tableData.push({
        ...record,
        D: multiplier.active ? record.C * multiplier.value : record.D,
      });
    }
  });
  return (
    <div className="App">
      <div className="controllers">
        <div className="searchBar">

        </div>
        <input
          className="input"
          placeholder={"Search Table Data"}
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <div className="multiplier">
          <input
            className="input"
            type="number"
            placeholder={"Enter Multiplier"}
            value={multiplier.inputValue}
            onChange={handleMultiplierInputChange}
          />
          <button
            className="button"
            onClick={handleApply}
            disabled={multiplier.inputValue == 0}
          >
            {"Apply"}
          </button>
          <button className="button" onClick={handleReset}>
            {"Reset"}
          </button>
        </div>
      </div>
      <Table tableData={tableData} />
    </div>
  );
}

export default App;
