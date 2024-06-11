// import "./index.css" //import from src/index.css file
const date = new Date();
const full_date = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();


function Card(props){
    // console.log(props);
    const {todo_title,todo_des} = props;
    return <div className='card'>
             <h3 className='cardTitle'>{todo_title}</h3>
             <p  className='cardDes'>{todo_des}</p>
             <p  className='time'>{full_date}</p>
            </div>
}
export default Card;