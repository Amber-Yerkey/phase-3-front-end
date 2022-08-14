import React, { useState, useEffect } from 'react';
import Cards from './Cards'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';

function Home(){

    const [pokeList, setPokeList] = useState([]);


    useEffect(() => {
        fetch("http://localhost:9292//pokemonWithOwner")
            .then((resp) => resp.json())
            .then((data) => { setPokeList(data) })
            .catch((error) => { console.error(error) })
    }, [])

    function handleUpdateClaimed(updateClaimed) {
        const updatedClaims = pokeList.map((currentPokeList) => {
          if (currentPokeList.id === updateClaimed.id) {
            return updateClaimed;
          } else {
            return currentPokeList;
          }
        });
        setPokeList(updatedClaims);
      }

    function handleDeletePokemon(deletePokemon){
        const updatedClaims = pokeList.filter((currentPokeList) => currentPokeList.id !== deletePokemon.id)
            setPokeList(updatedClaims);
    }


    return(
    <>
        <Container align='Center'>
            <h1>Pokemon Pet Sitting</h1>
        </Container>

    {pokeList.map((currentPokeList) => (
        <Cards key={currentPokeList.id} currentPokeList={currentPokeList} handleUpdateClaimed={handleUpdateClaimed} handleDeletePokemon={handleDeletePokemon} />
    ))}

    </>
    )
}

export default Home;