import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../notes-context';

const Create = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const { notes, setNotes } = useContext(NotesContext);
    const navigate = useNavigate();
    const handleNotes = () => {
        notes.push({ id: notes.length > 0 ? +[notes[notes.length - 1].id] + 1 : 0, title: title, desc: desc, date: new Date().toLocaleString() });
        setNotes(notes);

        let existingNotes = JSON.parse(localStorage.getItem("notes")) || [];

        let newNote = {
            id: existingNotes.length > 0 ? +existingNotes[existingNotes.length - 1].id + 1 : 0,
            title: title,
            desc: desc,
            date: new Date().toLocaleString()
        };

        // Add the new note to the existing notes array
        existingNotes.push(newNote);

        // Store the updated notes array back in localStorage
        localStorage.setItem("notes", JSON.stringify(existingNotes));

        //now move to home page
        navigate('/');
    }
    return (
        <div className='container'>
            <nav className='header-nav'>
                <div onClick={() => navigate('/')}>
                    <img className='icon-img' src="/arrow-white.svg" alt="back-button" />
                </div>
                <button className='btn' onClick={handleNotes}>Save</button>
            </nav>
            <div className="note">
                <div className="title">
                    <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="desc">
                    <textarea type="text" placeholder='Note details...' onChange={(e) => setDesc(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default Create