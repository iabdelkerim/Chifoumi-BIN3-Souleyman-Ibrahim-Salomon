import React from 'react';
import { Button, Flex, Heading } from '@adobe/react-spectrum';
import { useEffect, useState } from 'react';

function MatchPlay() {
    const [play, setPlay] = useState();

    useEffect(() => {
        fetch(
            'http://fauques.freeboxos.fr:3000/matches/?id=61eafe2a9776211826834e72',
            {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
            .then(res => res.json())
            .then(data => setPlay(data));
    }, [play]);

    return (
        <>
            <Flex
                direction="row"
                alignItems="center"
                justifyContent="center"
                alignContent="center"
                gap="size-100"
            >
                <Heading level={1}>Partie de Chifoumi</Heading>
            </Flex>

            <Flex
                direction="row"
                alignItems="center"
                justifyContent="center"
                alignContent="center"
                height="size-800"
                gap="size-100"
            >
                <Button width="size-800">Rock</Button>
                <Button width="size-800">Paper</Button>
                <Button width="size-1200">Scissors</Button>
            </Flex>

            {play?.map(player => (
                <Flex
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    alignContent="center"
                    gap="size-100"
                >
                    <Heading level={3}> user : {player.user1} - 0</Heading>
                </Flex>
            ))}

            <Flex
                direction="row"
                alignItems="center"
                justifyContent="center"
                alignContent="center"
                gap="size-100"
            >
                <Heading level={4}> Score : 0 - 0</Heading>
            </Flex>
        </>
    );
}

export default MatchPlay

