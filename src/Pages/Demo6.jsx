import React from "react";
import { useState, useEffect } from "react";

const Demo6 = () => {
  // const[id, setId]=useState([])
  // const[name, setName]=useState([])
  // const[username, setUsername]=useState([])
  // const[address, setAddress]=useState([])
  // const[phone, setPhone]=useState([])
  // const[website, setWebsite]=useState([])
  // const[company, setCompany]=useState([]);

  const [data, setData] = useState([]);

  console.log(data);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${data}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // setId(data);
        // setName(data);
        // setUsername(data);
        // setAddress(data);
        // setPhone(data);
        // setWebsite(data);
        // setCompany(data)
        setData(data);
      });
  }, []);

  return (
    <div className="container4">
      {data.map((data) => (
        <div className="id" key={data.id}>
          {data.id}
          <div className="name">
            {data.name}
            <div className="username">{data.username}</div>
          </div>
          <div className="email">{data.email}</div>
          <div className="">
            {data.address.street}
            {data.address.suite}
          </div>
          <div className="phone">{data.phone}</div>
          <div className="website">{data.website}</div>
          <div className="website">{data.company.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Demo6;
