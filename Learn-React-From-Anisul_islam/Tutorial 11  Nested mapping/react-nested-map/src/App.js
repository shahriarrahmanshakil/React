import React from "react";

const users = [
  {
    fullName : "Shahriar Rahman Shakil",
    age : 27,
    Phone : [
      { home : "0191345678"},
      {office : "0131456789"},
    ]
  },
  {
    fullName : "Raihan Molla Raju",
    age : 37,
    Phone : [
      { home : "0171345678"},
      {office : "0141456789"},
    ]
  },
  {
    fullName : "Rakibul Islam",
    age : 29,
    Phone : [
      {home : "01913346738"},
      {office : "01317635365"},
    ]
  }
]

function App(){
  return (
    <div>
      {users.map((user,index)=>
          <article key={index}>
            <h1>Full Name : {user.fullName}</h1>
            <h1>Age : {user.age}</h1>
            {user.Phone.map((phn,index) => 
              <div key={index}>
                <p>{phn.home}</p>
                <p>{phn.office}</p>
              </div>
            )}
          </article>
      )}
    </div>
  );
}
export default App;


// function user (u,i){
//   return <div>
//         <article key={i}>
//           <h1>{u.fullName}</h1> 
//           <p>{u.age}</p>
//           {user.Phone.map(mynumber)}
//         </article>
//       </div>
// }

// function mynumber(phn,index){
//   return <div>
//     <p>{phn.home}</p>
//   </div>
// }

