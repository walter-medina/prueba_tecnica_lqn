import React, { useEffect, useState} from 'react'
import Personaje from 'components/Personaje';
//url para consumir la api


const Parte2 = () => {
    const url="https://swapi.dev/api/people/?format=json";
    const [personaje, setPersonaje]=useState([]);

    const fetchApi = async (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data =>setPersonaje(data.results))
            .catch(error => console.log(error))
        }    

    useEffect(() => {
        fetchApi(url);       

    },[]);


    return (
      <div className='container'>
          <h1> Star Wars </h1>
          <Personaje arreglo={personaje}/>
      </div>
    )
}

export default Parte2;
