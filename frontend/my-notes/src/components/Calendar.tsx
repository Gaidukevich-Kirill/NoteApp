import * as React from 'react';
import { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarForm() {
    const [calendarValue, onChangeCalendarValue] = useState<Value>(new Date());

    return (
        <div>
            <Calendar
                onChange={onChangeCalendarValue}
                value={calendarValue}
            />
        </div>
    );
}