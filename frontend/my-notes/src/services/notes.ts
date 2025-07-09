import axios from "axios"

export const fetchNotes = async (filter:any) => {
    try{
        var response = await axios.get("https://localhost:44310/notes", {
            params: {
                search: filter?.search,
                sortItem: filter?.sortItem,
                sortOrder: filter?.sortOrder,
            },  
        });
        return response;
    }catch (e){
        console.error(e);
    }
}

export const createNote = async (note:any) => {
    try{
        var response = await axios.post("https://localhost:44310/notes", note);

        return response.status;
    }catch (e){
        console.error(e);
    }
}