import React  from 'react'
import Card from './Card'


export default function Character(props){
    const { character } = props

    return (
        <div className="characters-container-wrapper">
           {character.map(ch =>{
           return <Character key={props.name} 
            character={ch}
            />
        })} 
        </div>
      );
    };