// Task 1
// Write a function that takes an array and a value and returns all the users with that name from the array.
// If there is no user found return empty array.
// Example of the array is below and examples.

const array1 = [
  { id: "333222111", name: "Sulejman", age: "22" },
  { id: "321123432", name: "Stefan", age: "25" },
  { id: "222312543", name: "Semir", age: "32" },
]

function getObjects(array, value) {
  const vrati = array.map((item) => {
    if (item.name === value) {
      return item
    } else {
      return []
    }
  })
  return vrati
}
console.log(getObjects(array1, "Semir"))
