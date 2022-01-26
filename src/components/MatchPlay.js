import React from 'react';
import { Button, Flex, Heading, View } from '@adobe/react-spectrum';
import { useEffect, useState } from 'react';
import Player from './player';

function MatchPlay(id) {
    const [play, setPlay] = useState([]);

    useEffect(() => {
        fetch(`http://fauques.freeboxos.fr:3000/matches/?id='${id}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                setPlay(data);
            });
    }, []);

    function PlayertList() {
        return (
            <>
                {play?.map(player => (
                    <Player player={player} />
                ))}
            </>
        );
    }

    return (
        <View>
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
            <PlayertList />
            <Flex
                direction="row"
                alignItems="center"
                justifyContent="center"
                alignContent="center"
                gap="size-100"
            >
                <Heading level={4}> Score : 0 - 0</Heading>
            </Flex>
        </View>
    );
}

export default MatchPlay

