import React, { Component } from 'react'
import { countGalaxyCredit} from "utils/converter";

export default class Calculator extends Component {
  render() {
    const qdata = countGalaxyCredit({ galaxyNumber: "X C ", creditType: "" })
    return (
      <div>
        calculator init { qdata }
      </div>
    )
  }
}
