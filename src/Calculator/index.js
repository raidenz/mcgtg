import React, { Component } from 'react'
import ButtonRoman from "./Components/ButtonRoman";

import { countGalaxyCredit } from "utils/converter";
import './Calculator.css'

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: [],
      hasResults: false,
      galaxy: 'roman',
      credit: '',
    }
  }
  handleState = (name, value) => {
    this.setState({
      [name]: value
    })
  }
  handleChange = (x) => {
    const { name, value } = x.target
    this.handleState(name, value)
  }
  handleNumber = (i) => {
    const { textContent } = i.target
    const { display, hasResults } = this.state
    const newData = display.concat([textContent])
    if (hasResults) {
      this.setState({
        hasResults: false,
        display: [textContent]
      })
    } else {
      this.handleState('display', newData)
    }
  }
  handleDelete = () => {
    const currText = this.state.display
    currText.pop()
    this.handleState('display', currText)
  }
  handleResults = () => {
    const data = this.state.display.join(' ')
    const {hasResults} = this.state
    const newData = countGalaxyCredit({ galaxyNumber: data, creditType: "" })
    if (!hasResults) {
      this.setState({
        display: [newData],
        hasResults: true
      })
    }
  }
  render() {
    return (
      <div className="calculator">
        <div className="calculator-wrapper">
          <div className="cal-display-box">
            <input type="text" className="cal-display" value={this.state.display.join('')} />
            <div className="chooser">
              <select name="galaxy" id="" onChange={this.handleChange} value={this.state.galaxy}>
                <option value="roman">Roman</option>
                <option value="alien">Alien</option>
              </select>
              <select name="credit" id="" onChange={this.handleChange} value={this.state.credit}>
                <option value="">Credit (none)</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="iron">Iron</option>
              </select>
            </div>
          </div>
          <ButtonRoman
            handleNumber={this.handleNumber}
            handleDelete={this.handleDelete}
            handleResults={this.handleResults}
          />
        </div>
      </div>
    )
  }
}
