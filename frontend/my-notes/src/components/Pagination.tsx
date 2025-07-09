import * as React from "react";
import { useState } from "react";
import './Pagination.css';

const Pagination = ({ totalNotes, notesPerPage, currentPage }: any) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
        pageNumbers.push(i)
    }

  

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                            <button
                                className={`page-link ${currentPage === number ? 'active' : ''}`}
                            >
                                {number}
                            </button>
                            
                           
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Pagination