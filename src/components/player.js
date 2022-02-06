import React from 'react';
import { Flex, Heading } from '@adobe/react-spectrum';

function Player(player) {
    const { user1, user2 } = player?.player;
    return (
        <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            alignContent="center"
            gap="size-100"
        >
            <Heading level={3}>Player : {user1?.username || '?'} </Heading>
            <Heading level={3}>Player : {user2?.username || '?'} </Heading>
        </Flex>
    );
}

export default Player;
