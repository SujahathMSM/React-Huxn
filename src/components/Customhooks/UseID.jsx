import { useId } from "react";

const UseID = () => {
  const id = useId();
  return (
    <div>
      UseID
      <p>-------------</p>
      <label htmlFor={`${id}-email`}>Email</label>
      {}
      <input type="email" name="" id={`${id}-email`} />
      <p>--------------</p>
      <label htmlFor={`${id}-password`}>Password</label>
      {}
      <input type="password" name="" id={`${id}-password`} />
      <br />
    </div>
  );
};

export default UseID;
