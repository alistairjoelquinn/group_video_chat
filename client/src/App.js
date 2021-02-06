import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import 'normalize.css';

import { retrieveUserData } from '../store/actions';

const AppStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100vh;
    width: 100vw;
    background-color: dodgerblue;
    color: antiquewhite;
    div {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 40px;
        font-weight: bold;
        -webkit-text-stroke: 1px tomato;
    }
`;

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveUserData());
    }, []);

    return (
        <AppStyles>
            <div>Group Video Chat</div>
        </AppStyles>
    );
}