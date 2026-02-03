import { useState } from "react";
import "./Form.css";

export const Form = ({ onAddPerson }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddPerson({ name, tel, city });
      }}
    >
      <div>
        <input
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Imię"
        />
        <input
          defaultValue={tel}
          onChange={(e) => setTel(e.target.value)}
          type="tel"
          name="tel"
          placeholder="Telefon"
        />
        <input
          defaultValue={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          name="city"
          placeholder="Miasto"
        />
      </div>
      <div>
        <button disabled={!name || !tel || !city}>Dodaj kontakt</button>
      </div>
    </form>
  );
};
