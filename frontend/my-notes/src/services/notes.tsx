import axios from "axios"
import { FilterItem } from "../models/filterItem"

export const fetchPaginateNotes = async (filter: FilterItem, pageNumber: number) => {
    try {
        var response = await axios.get("http://localhost:5000/notes/paginatenotes", {
            params: {
                search: filter?.search,
                sortItem: filter?.sortItem,
                sortOrder: filter?.sortOrder,
                pageNumber: pageNumber,
                pageSize: filter?.pageSize,
                startSearchDate: filter.startSearchDate,
                endSearchDate: filter.endSearchDate
            },
        });
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchNotes = async (filter: any) => {
    try {
        var response = await axios.get("http://localhost:5000/notes", {
            params: {
                search: filter?.search,
                sortItem: filter?.sortItem,
                sortOrder: filter?.sortOrder,
            },
        });
        return response;
    } catch (e) {
        console.error(e);
    }
}

export const createNote = async (note: any) => {
    try {
        var response = await axios.post("http://localhost:5000/notes", note);

        return response.status;
    } catch (e) {
        console.error(e);
    }
}

export const deleteNoteAsync = async (id: any) => {
    try {
        var response = await axios.delete("http://localhost:5000/notes", {data:{id:id}});

        return response.status;
    } catch (e) {
        console.error(e);
    }
}