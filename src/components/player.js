import React from 'react';
import { Button, Flex, Heading, View } from '@adobe/react-spectrum';

function Player(player) {
    console.log('player', player.player.user2.username);
    return (
        <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            alignContent="center"
            gap="size-100"
        >
            <Heading level={3}>
                Player1 : {player.player.user2.username} 
            </Heading>
        </Flex>
        
    );
}

export default Player;
