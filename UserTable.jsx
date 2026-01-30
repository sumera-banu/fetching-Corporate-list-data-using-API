import React from 'react';
import { useState, useEffect } from 'react';
import {corporateList} from '../actions/Api.js'


const UserTable = () => {
  const[data, setData]=useState([]);
  const[error,setError]=useState(null)
  
const fetchData = async() => {
  const response = await corporateList();
  if(response?.rows?.length>0) {
   // console.log(response.rows, 'respose....');
    setData(response.rows);
  }
}
//   const fetchData=async()=>{
//     try{
//  const response=await fetch('https://dev.floatr.in/serversuite/admin/corporates');
//     const json=response.json;
//     setData(json);
//     }
//    catch(error){
//     setError(error);
//    }

//   }
useEffect(()=>{
    fetchData();
  },[])
  
console.log(data, 'data....')
  return (
<div>
    <h2>Coorporate List</h2>
    <table className="my-table">
      <thead className="head">
        <tr>
          <th>brandname</th>
          <th>city</th>
          <th>gold_status</th>
          <th>mf_status</th>
          <th>name</th>
          <th>salary_credit_status</th>
          <th>total_count </th>
        </tr>
      </thead>
      <tbody className="table-body">
        {data.map((user, index) => (
          <tr key={index}>
            <td>{user.brandname}</td>
            <td>{user.city}</td>
            <td>{user.gold_status}</td>
            <td>{user.mf_status}</td>
            <td>{user.name}</td>
            <td>{user.salary_credit_status}</td>
            <td>{user.total_count}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default UserTable;
