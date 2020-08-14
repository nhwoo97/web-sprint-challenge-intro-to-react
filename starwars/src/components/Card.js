import React from 'react'




export default function Card(props){
    const {character} = props

    return (
        <div>
            <h2>{character.name}</h2>
            <h2>Height:{character.height}</h2>
        </div>
    )

}
