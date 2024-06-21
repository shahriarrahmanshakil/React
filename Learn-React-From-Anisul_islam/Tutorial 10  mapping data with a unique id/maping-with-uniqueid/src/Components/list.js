import React from "react";
import { v4 as uuidv4 } from 'uuid';

const information = [
    {
        id : uuidv4(),
        Name : "Shahriar Rahman Shakil",
        Address : 'Jamalpur',
    },
    {
        id : uuidv4(),
        Name : "Rakibul Islam",
        Address : 'Barishal',
    },
    {
        id : uuidv4(),
        Name : "Raihan Molla Raju",
        Address : 'Rajshahi',
    },
    {
        id : uuidv4(),
        Name : "Md. Jakir Hossain",
        Address : 'Bagura',
    },
    {
        id : uuidv4(),
        Name : "Abdulla Al Mamun",
        Address : 'Sirajganj',
    }
]

function List(){
    return <>
            <div>
                {information.map((info) => {
                    const {id,Name,Address} = info;
                    return <div key = {id}>
                        <h3>{Name}</h3>
                        <h3>{Address}</h3>
                        <h3>------------------</h3>
                    </div>
                })}
            </div>
        </>
}
export default List;