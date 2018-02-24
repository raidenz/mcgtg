import React, { Component } from 'react'
import ButtonRoman from "./Components/ButtonRoman";
import ButtonAlien from "./Components/ButtonAlien";

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
  handleGalaxyChange = (x) => {
    const { name, value } = x.target
    this.setState({
      [name]: value,
      display: []
    })
  }
  handleChange = (x) => {
    const { name, value } = x.target
    this.setState({
      [name]: value,
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
    const { hasResults, galaxy, credit } = this.state
    const creditType = (galaxy !== 'roman') ? credit :''
    const newData = countGalaxyCredit({ galaxyNumber: data, creditType })
    if (!hasResults) {
      this.setState({
        display: [newData],
        hasResults: true
      })
    }
  }
  handleDisplay = () => {
    const {galaxy, display} = this.state
    const view = (galaxy === 'roman') ? display.join('') : display.join(' ')
    return view
  }
  render() {
    return (
      <div className="calculator">
        <div className="calculator-wrapper">
          <div className="cal-display-box">
            <input type="text" className="cal-display" value={this.handleDisplay()} placeholder="insert number"/>
            <div className="chooser">
              <select name="galaxy" id="" onChange={this.handleGalaxyChange} value={this.state.galaxy}>
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
          {
            (this.state.galaxy === 'roman')
              ? (
                <ButtonRoman
                  handleNumber={this.handleNumber}
                  handleDelete={this.handleDelete}
                  handleResults={this.handleResults}
                />
              )
              : (
                <ButtonAlien
                  handleNumber={this.handleNumber}
                  handleDelete={this.handleDelete}
                  handleResults={this.handleResults}
                />
                )

          }

        </div>
      </div>
    )
  }
}
