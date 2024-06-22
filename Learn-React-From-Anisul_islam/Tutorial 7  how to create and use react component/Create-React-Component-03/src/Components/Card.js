import React from "react";


let title = "Call Family";
let Description = "This is Description";
let date = new Date();
let fullDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(); 

function Card(){
    return <div className="card">
    <h3 className="cardtitle">{title}</h3>
    <p className="cardbody">{Description}</p>
    <p className="carddate">{fullDate}</p>
    </div>
}
export default Card;