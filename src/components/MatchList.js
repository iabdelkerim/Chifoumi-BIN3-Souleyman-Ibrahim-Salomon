import {
    Button,
    Flex,
    ButtonGroup,
    Form,
    TextField,
    Divider,
    Content,
    Dialog,
    Heading,
    DialogContainer,
    View
} from '@adobe/react-spectrum';
import { useEffect, useState } from 'react';
import { MatchPlay } from '.';

function MatchList() {
    const [matchs, setMatchs] = useState();
    const [show, setShow] = useState(false);
    const [name, setValue] = useState('');
    const [user2, setPlayer2] = useState();
    useEffect(() => {
        fetch('http://fauques.freeboxos.fr:3000/matches', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => setMatchs(data));
    }, [matchs]);

    function createButton() {
        return (
            <Flex direction="row" justifyContent="space-between">
                <Flex direction="row" gap="size-125" marginEnd="9%">
                    <Button variant="primary" onPress={() => setShow(true)}>
                        New party
                    </Button>
                </Flex>
            </Flex>
        );
    }

    function createMatch(e) {
        fetch('http://fauques.freeboxos.fr:3000/matches', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            user: JSON.stringify({
                username: name
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.user2 === null) {
                    fetch(
                        `http://fauques.freeboxos.fr:3000/matches/?id=${data._id}`,
                        {
                            method: 'GET',
                            headers: {
                                Authorization:
                                    'Bearer ' + localStorage.getItem('token')
                            }
                        }
                    )
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        });
                } else {
                    window.location.href = '/play';
                    <MatchPlay id={data._id} />;
                    setPlayer2(data._id);
                }
            });
        setShow(false);
    }
    const closeModal = () => {
        setShow(false);
    };
    console.log('user2', user2);

    function modalPlayer() {
        return (
            <DialogContainer onDismiss={() => closeModal()} isDismissable>
                {show && (
                    <Dialog>
                        <Heading>Join a party</Heading>
                        <Divider />
                        <Content>
                            <Form>
                                <TextField
                                    label="Name"
                                    type="text"
                                    label="Enter your game name "
                                    inputMode="text"
                                    onChange={setValue}
                                />
                            </Form>
                            <Flex
                                direction="row"
                                gap="size-100"
                                marginTop="size-200"
                            >
                                <ButtonGroup>
                                    <Button
                                        variant="secondary"
                                        onPress={closeModal}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="cta"
                                        onPress={e => createMatch(e)}
                                        autoFocus
                                    >
                                        Join
                                    </Button>
                                </ButtonGroup>
                            </Flex>
                        </Content>
                    </Dialog>
                )}
            </DialogContainer>
        );
    }

    function disconnect() {
        localStorage.removeItem('token');
        setTimeout(() => {
            window.location.href = '/login';
        }, 100);
    }
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
            <View>
                {modalPlayer()}
                {createButton()}
                {matchs === undefined && <span>Loading...</span>}
                {matchs?.length === 0 && <span>No data</span>}
                {matchs?.map(match => (
                    <li key={match._id}>{match._id}</li>
                ))}
            </View>
        </>
    );
}

export default MatchList;
