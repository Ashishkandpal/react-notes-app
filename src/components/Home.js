import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const Home = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const [searchToggler, setSearchToggler] = useState(false);
    const [shouldFilterNotes, setShouldFilterNotes] = useState(true);
    const [filteredNotes, setFilteredNotes] = useState([]);

    //get the data if there is in local storage
    const existingNotes = JSON.parse(localStorage.getItem('notes'));

    useEffect(() => {
        if (shouldFilterNotes && existingNotes) {
            const filteredData = existingNotes.filter((elt) => elt.title.includes(keyword) || elt.desc.includes(keyword));
            setFilteredNotes(filteredData);
            setShouldFilterNotes(false);
        }
    }, [keyword, existingNotes, shouldFilterNotes])

    useEffect(() => {
        setShouldFilterNotes(true);
    }, [keyword]);

    return (
        <div className='container'>
            <nav className='header-nav'>
                <h1>My Notes</h1>
                <div className='search-input' >
                    {searchToggler && <input type='text' value={keyword} onChange={(e) => setKeyword(e.target.value)} />}
                    <img className='icon-img' src="/white-search.svg" alt="search" onClick={() => setSearchToggler((prev) => !prev)} />
                </div>
            </nav>

            {filteredNotes &&
                <div className="content">
                    {filteredNotes.map((item) => {
                        return <Card key={item.id} id={item.id} title={item.title} desc={item.desc} date={item.date} />
                    })
                    }</div>}

            {!existingNotes && <div className='no-notes'>No notes found</div>}
            <div className='add-icon' onClick={() => navigate('/create')}>
                <img className='icon-img' src="./plus-white.svg" alt="add-note" />
            </div>
        </div>
    )
}

export default Home