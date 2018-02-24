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
              <div className="cal-button">7</div>
              <div className="cal-button">8</div>
              <div className="cal-button">9</div>
              <div className="cal-button">4</div>
              <div className="cal-button">5</div>
              <div className="cal-button">6</div>
              <div className="cal-button">1</div>
              <div className="cal-button">2</div>
              <div className="cal-button">3</div>
              <div className="cal-button">0</div>
              <div className="cal-button">Del</div>
              <div className="cal-button">=</div>
            </div>
        </div>
      </div>
    )
  }
}
