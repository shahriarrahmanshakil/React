// import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

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
Card.propTypes = {
    title: PropTypes.string,description: PropTypes.string,
  };