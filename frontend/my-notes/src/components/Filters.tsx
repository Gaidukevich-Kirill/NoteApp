import * as React from "react";
import './Filters.css';

export default function Filters({ filter, setFilter }: any) {


console.log(filter.startSearchDate)
  return (
    <div>
      <h1 className="">Фильтры</h1>

      <div>
        <input
          className="dateSearch"
          type="date"
          min="2000-01-01"
          max="2099-12-31"
          onChange={(e) => setFilter({ ...filter, startSearchDate: e.target.value }) }
        ></input>
        
        <input
          className="dateSearch"
          type="date"
          min="2000-01-01"
          max="2099-12-31"
          onChange={(e) => setFilter({ ...filter, endSearchDate: e.target.value })}
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