import React from 'react';
import { useEffect } from 'react';

function Turn(id, move, match) {
    console.log('match', match);
    useEffect(() => {
        fetch(
            `http://fauques.freeboxos.fr:3000/matches/?id='${id}/turns/?id=${1}`,
            {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                },
                user: { _id: localStorage.getItem('token') },
                body: { move: id.move }
            }
        )
            .then(res => res.json())
            .then(data => {
                console.log('turn', data);
            });
    }, []);
    return <></>;
}
export default Turn;
