import '../index.css'

const description = "This app offers nearly every function you could want in a to-do list app ensconced in a clean, intuitive interface. A subscription is required for reminders and other key features, though.";
const date = new Date();
const fulldate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();


export default function Card() {
  return (
        <>
            <div className="card">
                <h2 className='cardTitle'>Call Family</h2>
                <p className='cardDescription'>{description}</p>
                <p className='cardDate'>{fulldate}</p>
            </div>   
         </>)
}
