import React from 'react';
import Data from './data';
import './index.css'

 const Pokemon = () => {
console.log(Data.length)
let [ position, setPosition ] = React.useState(0)

  function handleClick() {
    if(position < Data.length -1){
      setPosition(position + 1)
    } else {
      setPosition(0)
    }
  }
  function previousClick() {
    if(position === 0) {
    setPosition(position = Data.length -1)
   } else {
    setPosition(position -1)
   }
  }

  return (
    <>
      <section>
        <div>
          <p>{Data[position].name}</p>
          <p>{Data[position].type}</p>
          <p>{`Avarage weight: ${Data[position].averageWeight.value}${Data[position].averageWeight.measurementUnit}`}</p>
        </div>
        <img src={Data[position].image} alt={Data[position].name}/>
      </section>
      <section>
        <button onClick={ previousClick }>left</button>
        <button onClick={ handleClick }>right</button>
      </section>
    </>
  )
}

export default Pokemon