//
//
//
// TODO: 1. Declare the variables firstName and age so that the tests pass

// do not edit below this line
const firstName = 'Jane'
let firstNameExport = ''
try {
  /* eslint-disable no-undef */
  firstNameExport = firstName
} catch (e) {}

const age = 35
let ageExport = 0
try {
  /* eslint-disable no-undef */
  ageExport = age
} catch (e) {}

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
