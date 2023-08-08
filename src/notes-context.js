import { createContext, useState } from "react";

export const NotesContext = createContext();

const ContextProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    let id;
    let date;
    return (
        <NotesContext.Provider value={{ id, notes, setNotes, date }}>
            {children}
        </NotesContext.Provider>
    );
}

export default ContextProvider;