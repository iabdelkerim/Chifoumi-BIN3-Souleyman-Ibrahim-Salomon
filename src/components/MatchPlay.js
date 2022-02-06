import React from 'react';
import { Flex, Heading, View } from '@adobe/react-spectrum';
import { useEffect, useState } from 'react';
import Player from './player';
import Card from './cards';

function MatchPlay({ id }) {
    const [idMatch, setIdMatch] = useState('');
    const [match, setMatch] = useState('');
    const [play, setPlay] = useState([]);

    useEffect(() => {
        fetch(`http://fauques.freeboxos.fr:3000/matches/?id=${id}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('getbyId', data);
                setPlay(data);
            });
    }, []);
    console.log(play);
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
        <View backgroundColor="gray-200" width="100%" height="100%">
            <View padding="size-3000">
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
                <Card idMatch={idMatch} match={match} />
            </Flex>
            </View>
        </View>
    );
}

export default MatchPlay;
