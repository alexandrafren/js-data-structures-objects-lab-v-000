// Write your solution in this file!
const driver = {name: "Sam"};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObject = Object.assign({}, driver, {[key]: value});
  return newObject;
}
