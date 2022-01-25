import React from 'react';
import { Button, Flex } from '@adobe/react-spectrum';
import { useEffect, useState } from 'react';

function MatchPlay() {
    const [play, setPlay] = useState();
    useEffect(() => {
        fetch('http://fauques.freeboxos.fr:3000/matches/:id', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => setPlay(data));
    }, []);

    return (
        <>
            <Flex
                direction="row" 
                alignItems="center"
                justifyContent="center"
                alignContent="center"
                 
                gap="size-100"
            >
                <p><h1>Partie de Chifoumi</h1></p>
            </Flex>
            
            <Flex
                direction="row" 
                alignItems="center"
                justifyContent="center"
                alignContent="center"
                height="size-800" 
                gap="size-100"
            >
                <Button width="size-800" >Rock</Button>
                <Button width="size-800" >Paper</Button>
                <Button width="size-1200" >Scissors</Button>
            </Flex>
            
            {play?.map(player => (
                <Flex
                    direction="row" 
                    alignItems="center"
                    justifyContent="center"
                    alignContent="center"
                    
                    gap="size-100"
                >
                    <p><h5> user :  {player.user1} - 0</h5></p>
                </Flex>
                
            ))}
            
            
            <Flex
                direction="row" 
                alignItems="center"
                justifyContent="center"
                alignContent="center"
                 
                gap="size-100"
            >
                <p><h5> Score :  0 - 0</h5></p>
            </Flex>
            
        </>
    );
}

export default MatchPlay

