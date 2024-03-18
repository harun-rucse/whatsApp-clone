import { createContext, useContext, useEffect, useState } from "react";
import { contactList } from "../data";

const AppContext = createContext();

function AppProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    setContacts(contactList);
  }, []);

  function handleSelectContact(contact) {
    setSelectedContact(contact);
  }

  return (
    <AppContext.Provider
      value={{ contacts, selectedContact, handleSelectContact }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext was used outside of App Provider");

  return context;
}

export { AppProvider, useApp };
