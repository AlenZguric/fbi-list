import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDataContext } from './DataContext';
import "../src/FetchApiComponent.css";

const FetchApi = () => {
  const { data, setData } = useDataContext(); // Dohvaćanje iz konteksta
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (data.length === 0) { // Dohvaćaj podatke samo ako nisu već spremljeni
      setLoading(true);
      axios
        .get("https://api.fbi.gov/wanted/v1/list")
        .then((response) => {
          setData(response.data.items); // Spremanje u kontekst
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [data, setData]);

  const handleItemClick = (id) => {
    navigate(`/item/${id}`);
  };

  if (loading) return <p>Učitavanje...</p>;
  if (error) return <p>Greška: {error}</p>;

  return (
    <div className="fbi-page">
      <h1>FBI WANTED</h1>
      <div className="container">
        <ul>
          {data.map((item) => (
            <li key={item.uid} onClick={() => handleItemClick(item.uid)}>
              <img src={item.images[0]?.thumb || "https://via.placeholder.com/150"} alt={item.title} />
              <h2>{item.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FetchApi;
