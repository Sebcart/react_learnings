import { useState } from "react";
import { Form } from "./components/Form";
import { PersonInfo } from "./components/Personinfo";

import "./App.css";

const initialPeople = [
  { name: "Seba", tel: "123456789", city: "New York" },
  { name: "Mario", tel: "987654321", city: "Los Angeles" },
  { name: "Luigi", tel: "555666777" },
];

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [people, setPeople] = useState(initialPeople);

  const handleShowFormClick = () => setIsFormShown(true);

  const addPerson = (data) => {
    const newPeople = [...people, data];
    setPeople(newPeople);
    setIsFormShown(false);
  };

  const removePerson = (data) => {
    const newPeople = people.filter((person) => person.tel !== data.tel);
    setPeople(newPeople);
  };

  return (
    <>
      <h1>Lista kontaktów</h1>
      {isFormShown ? (
        <Form onAddPerson={addPerson} />
      ) : (
        <button onClick={handleShowFormClick}>Pokaż formularz</button>
      )}
      <ul>
        {people.map((person) => (
          <PersonInfo
            name={person.name}
            tel={person.tel}
            city={person.city}
            key={person.tel}
            onRemovePerson={removePerson}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
