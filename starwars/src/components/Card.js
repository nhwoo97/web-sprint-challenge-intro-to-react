import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    color:brown;
    @keyframes blink {
        0% {color:black; }
        50% {color:yellow;}
        100% {color:purple;}
    }
    h2 {
        animation-name: blink;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
     }
`

export default function Card(props){
    const {character} = props

    return (
        <StyledDiv>
            <h2>{character.name}</h2>
            <p>Height:{character.height}cm</p>
            <p>Weight:{character.mass}kg</p>
            <p>Gender:{character.gender}</p>
        </StyledDiv>
    )

}
