const title = "This is Title";
const Description  = "This is Description";
const date = new Date();
let fulldate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

function Card(){
  return  <div className='card'>
            <p className='title'>{title}</p>
            <p className='Descripttion'>{Description}</p>
            <p className='Date'>{"Date : " + fulldate}</p>
          </div>
}
export default Card;