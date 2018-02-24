import React from 'react'

const ButtonRoman = ({ handleNumber, handleDelete, handleResults}) => {
  return (
    <div className="cal-button-wrapper flex-wrap">
      <div className="cal-button" onClick={handleNumber}>C</div>
      <div className="cal-button" onClick={handleNumber}>D</div>
      <div className="cal-button" onClick={handleNumber}>M</div>
      <div className="cal-button" onClick={handleNumber}>V</div>
      <div className="cal-button" onClick={handleNumber}>X</div>
      <div className="cal-button" onClick={handleNumber}>L</div>
      <div className="cal-button" onClick={handleNumber}>I</div>
      <div className="cal-button" onClick={handleDelete}>Del</div>
      <div className="cal-button" onClick={handleResults}>=</div>
    </div>
  )
}

export default ButtonRoman
