import React from 'react'

const ButtonAlien = ({ handleNumber, handleDelete, handleResults}) => {
  return (
    <div className="cal-button-wrapper flex-wrap">
      <div className="cal-button" onClick={handleNumber}>prok</div>
      <div className="cal-button" onClick={handleNumber}>pish</div>
      <div className="cal-button" onClick={handleNumber}>tegj</div>
      <div className="cal-button" onClick={handleNumber}>glob</div>
      <div className="cal-button" onClick={handleDelete}>Del</div>
      <div className="cal-button" onClick={handleResults}>=</div>
    </div>
  )
}

export default ButtonAlien
