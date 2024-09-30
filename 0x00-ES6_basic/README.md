# Project: 0x00. ES6 Basics

## Resources

#### Read or watch:

* [ECMAScript 6 - ECMAScript 2015]
* [Statements and declarations]
* [Arrow functions]
* [Default parameters]
* [Rest parameter]
* [Javascript ES6 — Iterables and Iterators]


### Setup

#### Install NodeJS 12.11.x

(in your home directory):
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

#### Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

## Configuration Files

Add the files below to your project directory

`package.json`
Click to show/hide file contents

`babel.config.js`
Click to show/hide file contents

`.eslintrc.js`
Click to show/hide file contents

and…
Don’t forget to run `$ npm install` when you have the `package.json`


## Tasks

| Task | File |
| ---- | ---- |
| 0. Const or let? | [0-constants.js](./0-constants.js) |
| 1. Block Scope | [1-block-scoped.js](./1-block-scoped.js) |
| 2. Arrow functions | [2-arrow.js](./2-arrow.js) |
| 3. Parameter defaults | [3-default-parameter.js](./3-default-parameter.js) |
| 4. Rest parameter syntax for functions | [4-rest-parameter.js](./4-rest-parameter.js) |
| 5. The wonders of spread syntax | [5-spread-operator.js](./5-spread-operator.js) |
| 6. Take advantage of template literals | [6-string-interpolation.js](./6-string-interpolation.js) |
| 7. Object property value shorthand syntax | [7-getBudgetObject.js](./7-getBudgetObject.js) |
| 8. No need to create empty objects before adding in properties | [8-getBudgetCurrentYear.js](./8-getBudgetCurrentYear.js) |
| 9. ES6 method properties | [9-getFullBudget.js](./9-getFullBudget.js) |
| 10. For...of Loops | [10-loops.js](./10-loops.js) |
| 11. Iterator | [11-createEmployeesObject.js](./11-createEmployeesObject.js) |
| 12. Let's create a report object | [12-createReportObject.js](./12-createReportObject.js) |
| 13. Iterating through report objects | [100-createIteratorObject.js](./100-createIteratorObject.js) |
| 14. Iterate through object | [101-iterateThroughObject.js](./101-iterateThroughObject.js) |

## About
- ES6 Features:
    - Block scope
    - `Let` and `const` vs `var`
    - Arrow function
    - Rest and spread function parameters
    - String templating
    - Object creation adn their properties
    - Iterators and for-of loops
## questions
### 0. Const or Let:
- Modify
    - function `taskFirst` to instantiate variables using - `const`
    - function `taskNext` to instantiate variables using `let`
```
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```
- File: [0-constants.js](0-constants.js)

### 1. Block Scope
Modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block.
```
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```
- File: [1-block-scoped.js](1-block-scoped.js)

### 2. Arrow functions
- Rewrite the following standard function to use ES6’s arrow syntax of the function add
```
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```
- File: [2-arrow.js](2-arrow.js)

### 3. Parameter defauls
- Condense the internals of the following function to 1 line - without changing the name of each function/variable. 
```
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```
- File:[3-default-parameter.js](3-default-parameter.js)

### 4. Rest parameter syntax for functions 
- Modify the following function to return the number of arguments passed to it using the rest parameter syntax
```
export default function returnHowManyArguments() {

}
```
- File: [4-rest-parameter.js](4-rest-parameter.js)

### 5. Spread syntax
- Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.
```
export default function concatArrays(array1, array2, string) {
}
```
- File: [5-spread-operator.js](5-spread-operator.js)


### 6. Template string literals
- Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.
```
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
```
- File: [6-string-interpolation.js](6-string-interpolation.js)

### 7. Object property value shorthand syntax
- Modify the following function’s `budget` object to simply use the keyname instead.
```
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
```
- File: [7-getBudgetObject.js](7-getBudgetObject.js)

8. ### Dynamic property keys
- Rewrite the `getBudgetForCurrentYear` function to use `ES6` computed property names on the budget object
```
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
```
- File: [8-getBudgetCurrentYear.js](8-getBudgetCurrentYear.js)

### 9. ES6 method properties
- Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object
````
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
````
- File: [9-getFullBudget.js](9-getFullBudget.js)

### 10. For...of Loops
- Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator.
```
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
```
- File: [10-loops.js](10-loops.js)

### 11. Iterator
- Write a function named `createEmployeesObject` that will receive two arguments:
    - `departmentName` (String)
    - `employees` (Array of Strings)
```
export default function createEmployeesObject(departmentName, employees) {

}
```
- The function should return an object with the following format:
```
{
     $departmentName: [
          $employees,
     ],
}
```
- File: [11-createEmployeesObject.js](11-createEmployeesObject.js)

### 12. Report object
- Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.
```
export default function createReportObject(employeesList) {

}
```
- `createReportObject` should return an object containing the key `allEmployees` and a method property called `getNumberOfDepartments`.

- `allEmployees` is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

- The method property receives `employeesList` and returns the number of departments.
```
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
```
- File: [12-createReportObject.js](12-createReportObject.js)

### 13. Iterating through report objects
- Write a function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`.

- This function will return an iterator to go through every employee in every department.
```
export default function createIteratorObject(report) {

}
```
- File: [100-createIteratorObject.js](100-createIteratorObject.js)

### 14. Iterate through object
- Write a function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`.
```
export default function iterateThroughObject(reportWithIterator) {

 }
```
- It should return every employee name in a string, separated by ` | `
```
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
  ...
};
```
- Should return `John Doe | Guillaume Salva`
- File: [101-iterateThroughObject.js](101-iterateThroughObject.js)
