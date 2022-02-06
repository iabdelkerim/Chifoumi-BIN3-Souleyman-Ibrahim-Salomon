import React from 'react';
import { useEffect, useState } from 'react';
import { Flex, Heading } from '@adobe/react-spectrum';

function Turn({ idMatch, move, match }) {
    const [getMatch, setMatch] = useState();
    useEffect(() => {
        fetch(
            `http://fauques.freeboxos.fr:3000/matches/?id=${idMatch}/turns/?idTurn=${2}`,
            {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                },
                user: { _id: localStorage.getItem('token') },
                body: { move: move },
                match: { match }
            }
        )
            .then(res => res.json())
            .then(data => {
                console.log('Post Turn', data);
            });
    }, []);

    useEffect(() => {
        fetch(`http://fauques.freeboxos.fr:3000/matches/?id=${idMatch}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => setMatch(data));
    }, []);
    console.log('match turn', getMatch);
    return (
        <>
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
export default Turn;
