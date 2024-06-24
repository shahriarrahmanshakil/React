import React from "react";

const information = [
  {
    fullName : "Shahriar Rahman Shakil",
    age : 27,
    phone : [
      {
        home : 123456,
        office : 9776555,
      }
    ]
  },
  {
    fullName : "Raihan Molla Raju",
    age : 29,
    phone : [
      {
        home : 1465874656,
        office : 9578456555,
      }
    ]
  },
  {
    fullName : "Shahriar Rahman Shakil",
    age : 27,
    phone : [
      {
        home : 123456,
        office : 9776555,
      }
    ]
  },
]


function App() {
  return (
    <div>
      {information.map((info,index)=>{
        return <article key={index}>
            <h1>{info.fullName}</h1>
            <h2>{info.age}</h2>
            {info.phone.map((p,i)=> <section key={i}>
                <p>{p.home}</p>
                <p>{p.office}</p>
            </section>)}
        </article>
      })}
    </div>
  );
}

export default App;
