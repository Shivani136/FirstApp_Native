import React, { useEffect, useState } from 'react';
import client from "./client";

const login = (username, password) => client.post("/api/v1/token", {username, password });
  // const {user, token} = response.data
  //.then(response => console.log(response.data));  

export default {
  login,
};




// const login = () => {
// const item = { 
//     username : "jhonmanager",
//     password : "123456",
//    };
//   axios.post('/login', item)
//       // .then(response =>setData(response.data));
//       .then(response => console.log(response.data));
// //};
 //}
