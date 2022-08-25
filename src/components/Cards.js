import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';



function Cards({currentPokeList, handleUpdateClaimed, handleDeletePokemon}){
    

// sends data to server updating the claimed status
function handleClaimClick(e){
    e.preventDefault()
    fetch(`http://localhost:9292/pokemonWithOwner/${currentPokeList.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            claimed: !currentPokeList.claimed
        }),
    })
    .then((response) => response.json())
    .then((updateClaimed) =>  handleUpdateClaimed(updateClaimed))
    .catch((err) => console.log(err))
}

// sends data to server to delete data when delete button is clicked
function handleDeleteClick(){

    fetch(`http://localhost:9292/pokemon/${currentPokeList.id}`, {
        method: "DELETE"
    })
    .then((resp) => resp.json())
    .then((deletePokmon) => handleDeletePokemon(deletePokmon))

}


return(
    <Container align='Center'>
            <Card className="card shadow-sm card w-25" height="small" width="small">
                <div className="card-body">
                    <h5 className="card-title">Name: {currentPokeList.name}</h5>
                    <div>Species: {currentPokeList.species}</div>
                    <div>Typing: {currentPokeList.typing}</div>
                    <div>First Name: {currentPokeList["owner"].first_name}</div>
                    <div>Last Name: {currentPokeList["owner"].last_name}</div>
                    <p></p>
                    <button type="button" className="btn btn-primary btn-sm" onClick={handleClaimClick}>{currentPokeList.claimed ? "Claimed" : "Claim"}</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={handleDeleteClick}>Delete</button>
                </div>
            </Card>
    </Container>
)
}

export default Cards;