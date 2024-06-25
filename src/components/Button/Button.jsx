import React from 'react'

const Button = ({label, callback}) => {
  return (
    <>
    <button onClick={()=>callback()}>{label}</button>
    </>
  )
}

export {Button}