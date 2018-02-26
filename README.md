# GALAXY MERCHANT TRADING GUIDE
Solving story, intergalactic trading numerical calculator (Sounds like that)

view this online HERE http://themesidea.com/dev/galaxycalculator/

## Requirement
- A web Interface.
- A valid test case.
- Input Validation.
- Input conversion between intergalactic units and roman numerals.
- Setup the frontend infrastructure
- Hosting the App Online.
- Document clearly about your system design solution.
- Guide to run the Application
- Please DO NOT copy the solution online (dont Cheating)

## Formula
basically its just convert Roman to decimal number

```
I 1
V 5
X 10
L 50
C 100
D 500
M 1.000
```

## Intergalactic number
```
# same as roman (equal)
glob : I
prok : V
pish : X
tegj : L
```

## Problem
convert roman number to decimal number
assume that i already create a function to convert roman to decimal with function romanNumber

how much is pish tegj glob glob 
```
pish tegj glob glob
X L I I
romanNumber(10 50 1 1) ===> 42
```

solving Credit
```
glob glob Silver is 34 Credits
glob prok Gold is 57800 Credits
pish pish Iron is 3910 Credits

# Silver
glob glob Silver = 34
romanNumber(1 1) X = 34
X = 34 / 2
silver = 17

# Gold
glob prok gold = 57800
romanNumber(1 5) X = 57800
X = 57800 / 4
gold = 14450

#iron
pish pish Iron = 3910
romanNumber(10 10) X = 3910
X = 3910 / 20
iron = 195.5
```
## Run the program
```sh
npm install
npm start
```

## Test the Program
```sh
npm test
```

## Build App
```sh
npm run build
```

## Working detail
```js
detail = {
  name: 'deny widiastanto',
  nickname: 'Tomi',
  email: 'th.deny@gmail.com',
  git: 'http://github.com/raidenz/',
  linkedIn: 'https://www.linkedin.com/in/widiyastanto/',
  role: 'Front End',
}
```