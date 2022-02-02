import React from 'react';
import { Flex, Heading } from '@adobe/react-spectrum';

function Player(player) {
    console.log('player', player.player.user1.username);
    return (
        <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            alignContent="center"
            gap="size-100"
        >
            <Heading level={3}>
                Player : {player.player.user1.username} - 0
            </Heading>
        </Flex>
    );
}

export default Player;
