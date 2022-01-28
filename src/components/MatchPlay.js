import React from 'react';
import { Button, Flex, Heading, View } from '@adobe/react-spectrum';
import { useEffect, useState } from 'react';
import Player from './player';
import { useParams } from 'react-router-dom';

function MatchPlay() {
    const { id } = useParams();
    const [play, setPlay] = useState([]);

    useEffect(() => {
        fetch('http://fauques.freeboxos.fr:3000/matches/?id=id', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                setPlay(data);
            });
    }, [id]);

    function PlayertList() {
        return (
            <>
                {play?.map(player => (
                    <Flex
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        alignContent="center"
                        gap="size-100"
                    >
                        <Heading level={3}>
                            Player1 : {player.user1.username} 
                        </Heading>
                    </Flex>
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
<<<<<<< Updated upstream
                <Button width="size-800">Rock</Button>
                <Button width="size-800">Paper</Button>
                <Button width="size-1200">Scissors</Button>
=======
                <Card idTurn={id} />
>>>>>>> Stashed changes
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

