import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../firebase';
const Auth = getAuth(app)

const Home = ( ) => {
    return (
        <Container>
            <Button onClick={() => signOut(Auth)}
            >cerrar sesion</Button>
        </Container>
    )   
}

export default Home;