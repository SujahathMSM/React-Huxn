import { useEffect } from "react";
import { useState } from "react";
import useFetch from "./useFetch";

const Chook = () => {
  
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')
  return (
    <div>
      {data && data.map(data => {
        return <p key={data.id}>{data.title}</p>
      })}
    </div>
  );
};

export default Chook;
