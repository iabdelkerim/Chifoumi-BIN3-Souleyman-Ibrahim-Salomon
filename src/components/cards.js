import React from 'react';
import { useState } from 'react';
import { Text, Item, ActionGroup, Flex } from '@adobe/react-spectrum';
import Hand0 from '@spectrum-icons/workflow/Hand0';
import Hand from '@spectrum-icons/workflow/Hand';
import Hand2 from '@spectrum-icons/workflow/Hand2';
import Turn from './turn';

function Card({ idMatch, match }) {
    const [move, setMove] = useState();
    console.log('match', idMatch);
    return (
        <Flex direction="column">
            <ActionGroup
                onAction={move => {
                    setMove(move);
                }}
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
            <Turn idMatch={idMatch} move={move} match={match} />
        </Flex>
    );
}

export default Card;
