import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const { id } = useParams();
    const existingNotes = JSON.parse(localStorage.getItem('notes'));
    const data = existingNotes.find((item) => item.id == id);
    const [title, setTitle] = useState(data.title);
    const [desc, setDesc] = useState(data.desc);
    const navigate = useNavigate();

    const handleNotes = () => {
        // let newNote = {
        //     id: existingNotes.length > 0 ? +existingNotes[existingNotes.length - 1].id + 1 : 0,
        //     title: title,
        //     desc: desc,
        //     date: new Date().toLocaleString()
        // };

        // Add the new note to the existing notes array
        // existingNotes.push(newNote);

        existingNotes.forEach(element => {
            if (element.id == id) {
                element.id = +id;
                element.title = title;
                element.desc = desc;
                element.date = new Date().toLocaleString();
            }
        });

        // Store the updated notes array back in localStorage
        localStorage.setItem("notes", JSON.stringify(existingNotes));

        //now move to home page
        navigate('/');
    }

    const noteDeleteHandler = () => {
        let newNotes = existingNotes.filter((element) => element.id != id);
        localStorage.setItem("notes", JSON.stringify(newNotes));
        navigate('/');
    }

    return (
        <div className='container'>
            <nav className='header-nav'>
                <div onClick={() => navigate('/')}>
                    <img className='icon-img' src="/arrow-white.svg" alt="return button" />
                </div>
                <button className='btn' onClick={handleNotes}>Save</button>
                <div onClick={noteDeleteHandler}>
                    <img className='icon-img' src="/delete-white.svg" alt="delete button" />
                </div>
            </nav>
            <div className="note">
                <div className="title">
                    <input type="text" value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="desc">
                    <textarea type="text" value={desc} placeholder='Note details...' onChange={(e) => setDesc(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default Edit