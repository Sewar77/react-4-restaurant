import { createContext, useState } from "react";

export const userContext = createContext(); //store data globally

// provide these data as parent
export default function UserProvider({ children }) {
  //new state to store the users
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  // store in local storage (set item ======> string) == convert the data into string
  // localStorage.setItem("users", JSON.stringify(users));
  // get from local storage (GET ITEM====> parse ) convert from string to the original type

  const getAllUsers = () => {
    const allUsers = JSON.parse(localStorage.getItem("users"));
    setUsers(allUsers);
  };
  return (
    <userContext.Provider value={{ users, setUsers, getAllUsers }}>
      {/* value => what to provide */}
      {children}
      {/* js code */}
      {/* children => for whome to provide <App /> */}
    </userContext.Provider>
  );
}
// store data globally
// provide theses data globally.
// inhiretince
//
