# Galactic Age Calculator

### _By: Isaac Overstreet_

### Short Description

  This is an application designed towards TTD that will determine a persons age on one of four planets: Mars, Jupiter, Mercury and Venus using Javascript. 

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _Popper.js_
* _npm_
* _Jest_
* _ESLint_
* _Babel_
* _Webpack_

## Setup/Installation Instructions

* _MAC USERS: change line 8 in package.json to `"start": "npm run build; webpack-dev-server --open --mode development",` in order for `npm run start` to work!_

* _Clone repository from `https://github.com/mrunderoad/galactic-age-calculator` and navigate into the directory on your local device_
* _Open the project in VScode_

_For viewing project in browser_ 
* _Run `npm install` in the terminal_
* _Run `npm run build` to build project with webpack_
* _Run `npm run start` to start a server in your browser for you to view project_

_To run tests_
* _Run `npm test` to view line coverage in terminal_

## Description

This application uses a users current age, and life expectancy to calculate their age and life left on different planets(Mars, Mercury, Jupiter, Venus). It will also calculate if the users life expectancy was already met and give different results for each. It also shows proper knowledge of TDD using Jest and webpack and 100% line coverage with Jest. It is made for Epicodus independent project #5. 

## Bugs

* _Running `npm test` occasionally adds import statement `import { test } from 'media-typer';` above the import for `AgeCalculator` in the test file causing tests to not run correctly. Simply delete the line and run tests if they are not working correctly. This could be an issue from my side of things._