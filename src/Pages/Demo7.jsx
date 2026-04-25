import React from "react";
import { useState } from "react";

const Demo7 = () => {
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  const [data, setData] = useState("");

  const handleformSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://jsonplaceholder.typicode.com/comments/${location}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  console.log(data);

  return (
    <div className="container">
      <form onSubmit={handleformSubmit}>
        <label for="location">Choose a Location:</label>
        <select
          value={location}
          name="location"
          onChange={handleChange}
          id="location">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {data && <p>{data.postId}</p>}
      {data && <p>{data.id}</p>}
      {data && <p>{data.name}</p>}
      {data && <p>{data.email}</p>}

      {data && <p>{data.body}</p>}
    </div>
  );
};

export default Demo7;
