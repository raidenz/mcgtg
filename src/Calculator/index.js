import React, { Component } from 'react'
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
              <select name="" id="">
                <option value="">Roman</option>
                <option value="">Alien</option>
              </select>
              <select name="" id="">
                <option value="">Credit (none)</option>
                <option value="">Silver</option>
                <option value="">Gold</option>
                <option value="">Iron</option>
              </select>
            </div>
          </div>
            <div className="cal-button-wrapper flex-wrap">
              <div className="cal-button" onClick={this.handleNumber}>C</div>
              <div className="cal-button" onClick={this.handleNumber}>D</div>
              <div className="cal-button" onClick={this.handleNumber}>M</div>
              <div className="cal-button" onClick={this.handleNumber}>V</div>
              <div className="cal-button" onClick={this.handleNumber}>X</div>
              <div className="cal-button" onClick={this.handleNumber}>L</div>
              <div className="cal-button" onClick={this.handleNumber}>I</div>
              <div className="cal-button" onClick={this.handleDelete}>Del</div>
              <div className="cal-button" onClick={this.handleResults}>=</div>
            </div>
        </div>
      </div>
    )
  }
}
