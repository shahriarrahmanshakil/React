// import React from 'react';
import '../index.css';

const date = new Date();
const fulldate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

export default function Card(props) {
    const {title,description} = props; //Destructuring 
    return (
            <>
                <div className="card">
                    <h2 className='cardTitle'>{title}</h2>
                    <p className='cardDescription'>{description}</p>
                    <p className='cardDate'>{fulldate}</p>
                </div>   
            </>)
}
