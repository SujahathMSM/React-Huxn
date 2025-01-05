import { useRef } from "react"

const Refer = () => {
    const inputElement = useRef(null);

    const handleFocus = () => {
        inputElement.current.focus();
    }
  return (
    <div>
      <h1>useRef</h1>
      <input type="text" ref={inputElement} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default Refer
