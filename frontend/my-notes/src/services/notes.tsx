import axios from "axios"

export const fetchPaginateNotes = async (filter: any, pageNumber: number) => {
    try {
        var response = await axios.get("http://localhost:5000/notes/paginatenotes", {
            params: {
                search: filter?.search,
                sortItem: filter?.sortItem,
                sortOrder: filter?.sortOrder,
                pageNumber: pageNumber,
                pageSize: filter?.pageSize
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