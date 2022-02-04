import React from 'react';
import { Flex, Heading, View } from '@adobe/react-spectrum';
import { useEffect, useState } from 'react';
import Player from './player';
import Card from './cards';

function MatchPlay(id) {
    const [idMatch, setIdMatch] = useState('');
    const [match, setMatch] = useState('');
    const [play, setPlay] = useState([]);

    useEffect(() => {
        fetch('http://fauques.freeboxos.fr:3000/matches/?id=id', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => setPlay(data));
    }, []);

    function PlayertList() {
        return (
            <>
                {play?.map(player => {
                    setIdMatch(player._id);
                    setMatch(player);
                    return <Player player={player} />;
                })}
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
            <PlayertList />
            <Flex
                direction="row"
                alignItems="center"
                justifyContent="center"
                alignContent="center"
                height="size-800"
                gap="size-100"
            >
                <Card idTurn={idMatch} match={match} />
            </Flex>
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

export default MatchPlay;
