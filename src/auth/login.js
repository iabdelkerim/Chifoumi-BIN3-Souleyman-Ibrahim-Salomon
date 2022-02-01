import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import {
    View,
    Flex,
    Form,
    TextField,
    Text,
    ActionButton
} from '@adobe/react-spectrum';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState(localStorage.getItem('token'));
    function handleUsername(e) {
        // setValues({ ...values, [e.target.name]: e.target.value });
        setUsername(e);
    }
    function handlePassowrd(e) {
        // setValues({ ...values, [e.target.name]: e.target.value });
        setPassword(e);
    }

    function handleSubmit(e) {
        fetch('http://fauques.freeboxos.fr:3000/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('token', data.token);
                setUser(data.token);
                console.log(jwtDecode(data.token));
            });
    }

    function redirectToMatchList() {
        window.location.href = '/matchList';
    }

    return user ? (
        redirectToMatchList()
    ) : (
        <View backgroundColor="gray-200" width="100%" height="100%">
            <View padding="size-2400">
                <Flex direction="column" alignItems="center">
                    <div className="align-height">
                        <Form width="size-3000" height="100%">
                            <Flex
                                direction="column"
                                alignItems="start"
                                gap="size-200"
                            >
                                <Text alignSelf="center">Login</Text>
                                <TextField
                                    width="100%"
                                    key="username"
                                    placeholder="username"
                                    value={username}
                                    onChange={v => handleUsername(v)}
                                />

                                <TextField
                                    width="100%"
                                    key="password"
                                    placeholder="password"
                                    type="password"
                                    value={password}
                                    onChange={v => handlePassowrd(v)}
                                />
                            </Flex>
                            <ActionButton
                                onPress={v => {
                                    handleSubmit(v);
                                }}
                            >
                                <Flex direction="row" gap="size-600">
                                    <Text> Login </Text>
                                </Flex>
                            </ActionButton>
                        </Form>
                    </div>
                </Flex>
            </View>
        </View>
    );
}

export default Login;
