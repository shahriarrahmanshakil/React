import React from "react";

  const users = [
                    {
                      fullName : "Shahriar Rahman Shakil",
                      Age : 27,
                      phones: [
                        {
                          Home : "01312345677",
                          Office : "01514278399",
                        }
                      ]
                    },
                    {
                      fullName : "Abbas Uddin",
                      Age : 27,
                      phones: [
                        {
                          Home : "01912890677",
                          Office : "01514242399",
                        }
                      ]
                    },
                    {
                      fullName : "Sarfaraj Khan",
                      Age : 27,
                      phones: [
                        {
                          Home : "01612345677",
                          Office : "01514242399",
                        }
                      ]
                    },
                ];

  export default function App() {
    return( <>
          <div>
              {
                users.map((user,index) => (
                  <article key={index}>
                    <h4>{user.fullName}</h4>
                    <h5>Age : {user.Age}</h5>
                    {
                      user.phones.map((phone,index)=><div>
                          <p>Home : {phone.Home}</p>
                          <p>Office : {phone.Office}</p>
                        </div>
                      )
                    }
                  </article>
                  
                ))
              }
          </div>
    </>
    );
  }

