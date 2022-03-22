import React from 'react'
import { Button } from '@material-ui/core'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { actiontypes } from './Reducer'
import { useStateValue } from './StateProvider'

export default function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actiontypes.SET_USER,
                user: result.user
            })

            console.log(result.user);
        })
        .catch(error => alert(error.message))
    }

    return (
        <Wrapper>
            <div className="login-logo">
                <img src="https://th.bing.com/th/id/R2bad70f2d08429a28dfbebd4c237924b?rik=3FH3qKqmkGzpdQ&riu=http%3a%2f%2flawyersandsettlements.com%2fblog%2fwp-content%2fuploads%2f2015%2f09%2ffacebook-logo.png&ehk=xPhuJKffftYjmx7Hg1QatmG2kML6F1Ds64v%2bn541m88%3d&risl=&pid=ImgRaw" alt="" />
                <img src="https://th.bing.com/th/id/R3652db3872904918aeec0fd290ef89cf?rik=7PQ60d74Mi%2bObQ&riu=http%3a%2f%2flogok.org%2fwp-content%2fuploads%2f2014%2f10%2fFacebook-wordmark.png&ehk=OqFjFgVTPlMMO%2byattxacHMe0QCsRSqAemkX76qj4ok%3d&risl=&pid=ImgRaw" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;

    .login-logo{
        display: flex;
        flex-direction: column;
        margin-top: 200px;
    }

    img{
        object-fit: contain;
        height: 150px;
    }

    button{
        width: 300px;
        color: white;
        font-weight: 800;
        background: #2e81f4;
        border: none;
        padding: 7px 0;
        border: 1px solid white;
        cursor: pointer;
        border-radius: 5px;
        margin-bottom: 200px;

        &:hover{
            background: white;
            color: #2e81f4;
            border: 1px solid #2e81f4;
        }
    }
`