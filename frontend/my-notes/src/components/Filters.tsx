import * as React from "react";
import './Filters.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


export default function Filters({ filter, setFilter }: any) {
  const [value, onChange] = React.useState<Value>(new Date());
  return (
    <div>
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
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