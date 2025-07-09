import * as React from "react";
import './Note.css';

interface NoteProps {
    title: string;
    description: string;
    createdAt: Date;
}

function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0'); // Получаем день
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Получаем месяц (0-11)
    const year = date.getFullYear(); // Получаем год
    const hours = String(date.getHours()).padStart(2, '0'); // Получаем часы
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Получаем минуты
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`; // Форматируем строку
}

export default function Note({title, description, createdAt}:NoteProps){
    return (
        <div className="note">
            <div className="noteHeader">
                <h3>{title}</h3>
            </div>
            <div className="divider"></div>
            <div className="noteBody">
                <p>{description}</p>
            </div>
            <div className="divider"></div>
            <div className="noteFooter">
                {formatDate(new Date(createdAt))}
            </div>
        </div>
    );
}

