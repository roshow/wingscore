import React from 'react'

const GenerateRoundButton = ({ round = 0, handleClick}) => <button onClick={ handleClick }>{ round === 0 ? `Start Tournament` : `Generate Round ${ round + 1 }` }</button>

export default GenerateRoundButton