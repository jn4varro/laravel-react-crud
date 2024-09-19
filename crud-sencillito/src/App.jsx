import { useState, useEffect } from 'react';
import './App.css';
import './Content.css';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Input from './Input.jsx';
import axios from 'axios';

function App() {
  const [datos, setDatos] = useState([]);

  //función para obtener las notas del backend
  const fetchNotas = () => {
    axios.get('http://localhost:8000/api/notas')
      .then(response => {
        if (Array.isArray(response.data)) {
          setDatos(response.data);
        } else {
          console.error('Los datos no son un array:', response.data.data);
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos: ', error);
      });
  };

  useEffect(() => {
    fetchNotas(); // Llamamos la función al cargar la página
  }, []);

  return (
    <>
      <Header />
      <Input fetchNotas={fetchNotas} />
      <Content datos={datos} fetchNotas={fetchNotas} />
    </>
  );
}

export default App;
