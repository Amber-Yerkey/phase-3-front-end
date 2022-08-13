import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';



function Cards({currentPokeList, handleUpdateClaimed}){

    // const [isClaimed, setIsClaimed] = useState(false)
    
    function handleClaimClick(){

        fetch(`http://localhost:9292/pokemon/${currentPokeList.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                claimed: !currentPokeList.claimed
            }),
        })
        .then((response) => response.json())
        .then((updateClaimed) => handleUpdateClaimed(updateClaimed))
    }

    return(
        <Container align='Center'>
                <Card className="card shadow-sm card w-25" height="small" width="small">
                    <div className="card-body">
                        <h5 className="card-title">{currentPokeList.name}</h5>
                        <button type="button" className="btn btn-primary btn-sm" onClick={handleClaimClick}>{currentPokeList.claimed ? "Claimed" : "Claim"}</button>
                    </div>
                </Card>
        </Container>
    )
}

export default Cards;
