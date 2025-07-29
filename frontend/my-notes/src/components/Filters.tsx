import * as React from "react";
import './Filters.css';
import { useEffect, useState } from "react";

export default function Filters({ filter, setFilter }: any) {
  const [startSearchDate, setStartSearchDate] = useState();
  const [endSearchDate, setEndSearchDate] = useState();

  const handleStartDateChange = (event: any) => {
    setStartSearchDate(event.target.value);
  };

  const handleEndDateChange = (event: any) => {
    setEndSearchDate(event.target.value);
  };


  return (
    <div>
      <h1 className="">Фильтры</h1>

      <div>
        <input
          className="dateSearch"
          type="date"
          id="start"
          min="2000-01-01"
          max="2099-12-31"
          value={startSearchDate}
          onChange={handleStartDateChange}
        ></input>

        <input
          className="dateSearch"
          type="date"
          id="start"
          min="2000-01-01"
          max="2099-12-31"
          value={endSearchDate}
          onChange={handleEndDateChange}
        ></input>

      </div>
      <div>
        <input
          placeholder="Поиск по заголовку"
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        />
      </div>
      <div>
        <select onChange={(e) => setFilter({ ...filter, sortOrder: e.target.value })}>
          <option value={"desc"}>Сначала новые</option>
          <option value={"asc"}>Сначала старые</option>
        </select>
      </div>
    </div>
  );
}