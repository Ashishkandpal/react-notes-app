import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({ id, title, desc, date }) => {
    const navigate = useNavigate();


    return (
        <div className='card-container' onClick={() => navigate(`/edit/${id}`)}>
            <div className='card-title'>{title}</div>
            <div>{date}</div>
        </div>
    )
}

export default Card;