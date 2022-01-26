import React from 'react';
import {
    Text,
    Item,
    Flex,
    ActionGroup,
    Heading,
    View
} from '@adobe/react-spectrum';
import { useEffect, useState } from 'react';
import Player from './player';
import Turn from './turn';
import Hand0 from '@spectrum-icons/workflow/Hand0';
import Hand from '@spectrum-icons/workflow/Hand';
import Hand2 from '@spectrum-icons/workflow/Hand2';

function MatchPlay(id) {
    const [play, setPlay] = useState();

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
                {play?.map(user => (
                    <Player player={user} />
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
                <ActionGroup
                    onAction={move => {
                        Turn(move);
                    }}
                    marginEnd="size-130"
                >
                    <Item key="rock">
                        <Hand0 size="XXL" />
                        <Text>Rock</Text>
                    </Item>
                    <Item key="paper">
                        <Hand size="XXL" />
                        <Text>Paper</Text>
                    </Item>
                    <Item key="scissors">
                        <Hand2 size="XXL" />
                        <Text>Scissors</Text>
                    </Item>
                </ActionGroup>
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

