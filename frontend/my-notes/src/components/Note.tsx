import * as React from "react";
import './Note.css';
import { deleteNoteAsync } from "~services/notes";

interface NoteProps {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    callbackOnDelete: any
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

const handleDeleteAsync = async (id: string, callbackOnDelete: any) => {
    await deleteNoteAsync(id);
    await callbackOnDelete();
};

export default function Note({ id, title, description, createdAt, callbackOnDelete }: NoteProps) {
    return (
        <div className="note">
            <div className="noteHeader">
                <h3>{title}</h3>
                <div className="noteDropDownMenu">
                    <button className="noteDropDownButton">•••</button>
                    <div className="content">
                        <button onClick={async () => await handleDeleteAsync(id, callbackOnDelete)}>Удалить</button>
                    </div>
                </div>
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

