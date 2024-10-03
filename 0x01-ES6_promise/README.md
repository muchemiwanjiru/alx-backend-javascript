# Project: 0x01. ES6 Promises

## Resources

#### Read or watch:

* [Promise]
* [JavaScript Promise: An introduction]
* [Await]
* [Async]
* [Throw / Try]

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

`utils.js`
Use when you get to tasks requiring `uploadPhoto` and `createUser`.

Click to show/hide file contents

`.eslintrc.js`
Click to show/hide file contents

and…
Don’t forget to run `$ npm install` when you have the `package.json`

#### Response Data Format

`uploadPhoto` returns a response with the format
```
{
  status: 200,
  body: 'photo-profile-1',
}
```

`createUser` returns a response with the format

```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```

## Tasks

| Task | File |
| ---- | ---- |
| 0. Keep every promise you make and only make promises you can keep | [0-promise.js](./0-promise.js) |
| 1. Don't make a promise...if you know you can't keep it | [1-promise.js](./1-promise.js) |
| 2. Catch me if you can! | [2-then.js](./2-then.js) |
| 3. Handle multiple successful promises | [3-all.js](./3-all.js) |
| 4. Simple promise | [4-user-promise.js](./4-user-promise.js) |
| 5. Reject the promises | [5-photo-reject.js](./5-photo-reject.js) |
| 6. Handle multiple promises | [6-final-user.js](./6-final-user.js) |
| 7. Load balancer | [7-load_balancer.js](./7-load_balancer.js) |
| 8. Throw error / try catch | [8-try.js](./8-try.js) |
| 9. Throw an error | [9-try.js](./9-try.js) |
| 10. Await / Async | [100-await.js](./100-await.js) |

## About

- Creating promises
- Promise resolution and rejection
- Promise chaining
- Exception handling
- Awaiting promise using `async` and `await`

## Tasks
0. Function `getResponseFromAPI()` that returns a promise
- File: [0-promise.js](0-promise.js)
1. Function `getFullResponseFromAPI(success)` that returns a promise. If boolean parameter `success` equals `true`, the promise resolves returning an objects with attributes `status: 200` and `body: 'Success`. Otherwise, the promise rejects with an an error object with the message `The fake API is not working currently`.
- File: [1-promise.js](1-promise.js)

2. Function `handleResponseFromAPI(promise)` that:
- Appends three handlers to the function:
    - When the Promise resolves, it returns an object with the following attributes
        - `status: 200`
        - `body: success`
    - When the Promise rejects, it returns an empty Error object
    - For every resolution, it logs `Got a response from the API` to the console
- File: [2-then.js](2-then.js)

3. Function `handleProfileSignup()` that collectively resolve all promises of functions `uploadPhoto` and `createUser` from [utils.js](utils.js) and logs `body firstName lastName` to the console.
- File: [3-all.js](3-all.js)

4. Function `signUpUser(firstName, lastName)` that returns a resolved promise with the object:
```
{
  firstName: value,
  lastName: value,
}
```
- File: [4-user-promise.js](4-user-promise.js)

5. Function `uploadPhoto(filename)` that:
- Accepts one argument `fileName` (string).
- Return a Promise rejecting with an Error and the string `$fileName cannot be processed`
- File: [5-photo-reject.js](5-photo-reject.js)

6. Function `handleProfileSignup` that accepts three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function calls the two other functions: `signUpUser` from [4-user-promise.js](4-user-promise.js) and `uploadPhoto` from [5-photo-reject.js](5-photo-reject.js). When the promises are all settled it return an array with the following structure:
```
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
```
7. Function `loadBalancer(chinaDownload, USDownload)` that accepts two arguments `chinaDownload (Promise)` and `USDownload (Promise)`.
- The function return the value returned by the promise that resolved the first.
- File: [7-load_balancer.js](7-load_balancer.js)

8. Function `divideFunction(numerator, denominator)` that accepts two arguments: `numerator` (Number) and `denominator` (Number).
- When the `denominator` argument is equal to 0, the function throws a new error with the message `cannot divide by 0`. Otherwise it returns the `numerator` divided by the `denominator`.
- File: [8-try.js](8-try.js)

9. Function `guardrail(mathFunction)` that accepts one argument `mathFunction` (Function).
- The function creates and returns an array named `queue`.
- When the `mathFunction` function is executed, the value returned by the function is appended to the `queue`. If this function throws an error, the error message should be appended to the `queue`. In every case, the message `Guardrail was processed should be added to the queue`. 
- File: [9-try.js](9-try.js)

10. Async function `asyncUploadUser()` that calls functions `uploadPhoto` and `createUser` from [utils.js](utils.js) and returns an object with the following format:
```
{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
```
- If one of the async function fails, return an empty object. Example:
```
{
  photo: null,
  user: null,
}
```
- File: [100-await.js](100-await.js)
