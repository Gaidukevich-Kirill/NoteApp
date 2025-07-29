import * as React from "react";
import './Filters.css';

export default function Filters({ filter, setFilter }: any) {
  return (
    <div>
      <div>
        <input
          placeholder="Поиск"
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