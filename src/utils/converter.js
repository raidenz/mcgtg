import { roman, galaxyType, creditValue, failText } from "utils/variables";

const fromRomanToDecimal = (str) => {
  const rom = Object.keys(roman)
  const decimal = Object.values(roman)
  let result = 0

  for (var i = 0; i <= decimal.length; i++) {
    while (str.indexOf(rom[i]) === 0) {
      result += decimal[i];
      str = str.replace(rom[i], '');
    }
  }
  if (result === 0) {
    return failText;
  } else {
    return result;
  }
}

const countGalaxyCredit = ({ galaxyNumber, creditType }) => {
  const credit = creditType ? creditValue[creditType] : 1
  let results = 'data empty'

  const split = galaxyNumber.split(" ")
  const searchGalaxyText = Object.keys(galaxyType)
  const isContainGalaxyNumber = split.some(r => searchGalaxyText.indexOf(r) >= 0)
  if (isContainGalaxyNumber) {
    // if credit
    // galaxyNumber * creditValue[creditType]
    const toNumber = split.map(num => (galaxyType[num] ? galaxyType[num] : num))
    results = (fromRomanToDecimal(toNumber.join('')) * credit)
  } else {
    results = fromRomanToDecimal(split.join(''))
  }
  return results

}

// const qData = countGalaxyCredit({ galaxyNumber: "X C ", creditType: "" })

// console.log(qData)

export {
  countGalaxyCredit
}
