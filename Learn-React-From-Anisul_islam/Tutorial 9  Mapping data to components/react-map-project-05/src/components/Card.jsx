// import React from 'react';
import '../index.css';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
>>>>>>> 97b9c7c38d91c88a566bfa81be61bf7fb4a9e2c4

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
<<<<<<< HEAD
=======
Card.propTypes = {
    title: PropTypes.string,description: PropTypes.string,
  };
>>>>>>> 97b9c7c38d91c88a566bfa81be61bf7fb4a9e2c4
