import React from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "./DataContext";
import styles from "./ItemComponent.css";

const ItemComponent = () => {
  const { id } = useParams(); // Dohvati ID iz URL-a
  const { data } = useDataContext(); // Dohvati podatke iz konteksta

  const item = data.find((item) => item.uid === id); // Pronađi podatak za odabrani ID

  if (!item) {
    return <p>Item nije pronađen.</p>;
  }

  return (
    <div className={styles.div}>
      {" "}
      {/* Koristite SCSS klasu */}
      <div className="container">
        <img
          src={item.images[0]?.thumb || "https://via.placeholder.com/150"}
          alt={item.title}
        />
        <div className="title">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <p>Hair color: {item.hair || "Nepoznato"}</p>
          <p>Born: {item.dates_of_birth_used?.join(", ")}</p>
          <p>City: {item.place_of_birth}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;
