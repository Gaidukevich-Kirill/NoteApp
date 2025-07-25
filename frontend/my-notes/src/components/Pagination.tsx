import * as React from "react";
import { useState } from "react";
import './Pagination.css';

interface PaginationProps {
    totalNotes: number;
    notesPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void; // Функция обратного вызова
}

//const Pagination = ({ totalNotes, notesPerPage, currentPagee }: any) => {
const Pagination: React.FC<PaginationProps> = ({ totalNotes, notesPerPage, currentPage, onPageChange }) => {

    const pageNumbers: number[] = [];
    const totalPages = Math.ceil(totalNotes / notesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    // const [currentPageState, setCurrentPage] = useState(1);


    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li className="page-item" key={number}>
                        <button
                            className={`page-button ${currentPage === number ? 'active' : ''}`}
                            onClick={() => onPageChange(number)}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination