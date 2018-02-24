import React, { Component } from 'react'
import { countGalaxyCredit } from "utils/converter";
import './Calculator.css'

export default class Calculator extends Component {
  render() {
    const qdata = countGalaxyCredit({ galaxyNumber: "X C ", creditType: "" })
    return (
      <div className="calculator">
        <div className="calculator-wrapper">
          calculator init {qdata}
          <div className="cal-display-box">
            <input type="text" className="cal-display" />
          </div>
            <div className="cal-button-wrapper flex-wrap">
              <div className="cal-button">C</div>
              <div className="cal-button">D</div>
              <div className="cal-button">M</div>
              <div className="cal-button">V</div>
              <div className="cal-button">X</div>
              <div className="cal-button">L</div>
              <div className="cal-button">I</div>
              <div className="cal-button">Del</div>
              <div className="cal-button">=</div>
            </div>
        </div>
      </div>
    )
  }
}
