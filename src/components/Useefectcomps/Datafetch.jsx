import { useState, useEffect } from "react";

const Datafetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
    };
    getData();
    console.log(data);
  }, []);
  return (
    <div>
      <h1>Fetch Data -- Users</h1>
      {data.map((data) => (
        <li key={Math.random()}>{data.name} - {data.website}</li>
      ))}
    </div>
  );
};

export default Datafetch;
