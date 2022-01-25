import { Button, Flex } from '@adobe/react-spectrum';
import { useEffect, useState } from 'react';

function disconnect() {
    localStorage.removeItem('token');
    setTimeout(() => {
        window.location.href = '/login';
    }, 100);
}

function MatchList() {
    const [matchs, setMatchs] = useState();
    useEffect(() => {
        fetch('http://fauques.freeboxos.fr:3000/matches', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => setMatchs(data));
    }, []);

    return (
        <>
            <Flex
                direction="row"
                alignItems="end"
                margin="size-100"
                justifyContent="end"
            >
                <Button onPress={disconnect}>Log out</Button>
            </Flex>
            <ul>
                {matchs === undefined && <span>Loading...</span>}
                {matchs?.length === 0 && <span>No data</span>}
                {matchs?.map(match => (
                    <li>{match._id}</li>
                ))}
            </ul>
        </>
    );
}

export default MatchList;

