import React from 'react';
import { Button, Flex, Heading, View } from '@adobe/react-spectrum';

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
            <Heading level={3}>Player : {user1?.username} - 0</Heading>
            <Heading level={3}>Player : {user2?.username} - 0</Heading>
        </Flex>
    );
}

export default Player;
