import { useState } from "react";
import { Tel } from "./Tel";
import "./PersonInfo.css";

export const PersonInfo = (props) => {
  let stayArray = useState(false);
  let isExpanded = stayArray[0];
  let setIsExpanded = stayArray[1];

  const expandButton = (
    <button
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {isExpanded ? "Ukryj" : "Pokaż"}
    </button>
  );

  const deleteButton = (
    <button onClick={() => props.onRemovePerson(props)}>Usuń kontakt</button>
  );

  return (
    <li className={isExpanded ? "active" : ""}>
      <h2>
        <strong>{props.name}</strong>
      </h2>
      {expandButton}
      {isExpanded && (
        <>
          <h3>
            Telefon: <Tel tel={props.tel} />
          </h3>
          {props.city && <h3>Miasto: {props.city}</h3>}
          {deleteButton}
        </>
      )}
    </li>
  );
};
