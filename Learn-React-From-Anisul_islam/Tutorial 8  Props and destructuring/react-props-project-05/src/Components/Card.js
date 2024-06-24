import React from "react";

let date = new Date();
let fullDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(); 

function Card(props){
    console.log(props);
    return <div className="card">
    <h3 className="cardtitle">{props.title}</h3>
    <p className="cardbody">{props.Description}</p>
    <p className="carddate">{fullDate}</p>
    </div>
}
export default Card;