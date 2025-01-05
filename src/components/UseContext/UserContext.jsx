import { createContext, useState } from "react";

const userContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: "Sujahath"})
    const [age, setAge] = useState(25);

    const updateName = (newName) => {
        setUser({name: newName})
    }

    const updateAge = (newAge) => {
        setAge(newAge);
    }
    return <userContext.Provider value={{user, age, updateName, updateAge}}>
        {children}
    </userContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export {userContext, UserProvider}