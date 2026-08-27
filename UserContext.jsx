import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

/**
 * Holds the visitor's chosen portal (Pet Owner / Veterinarian / Animal Shelter)
 * and their first name for the duration of the session, as required by the SRS.
 * Not persisted to storage — resets on full page reload, matching a "session" scope.
 */
export function UserProvider({ children }) {
  const [userType, setUserType] = useState(null); // "owner" | "vet" | "shelter"
  const [firstName, setFirstName] = useState("");

  const selectUser = (type, name) => {
    setUserType(type);
    setFirstName(name?.trim() || "");
  };

  const clearUser = () => {
    setUserType(null);
    setFirstName("");
  };

  return (
    <UserContext.Provider value={{ userType, firstName, selectUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within a UserProvider");
  return ctx;
}
