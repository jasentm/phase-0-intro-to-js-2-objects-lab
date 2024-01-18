// Write your solution in this file!
const employee = {
    name: "Bob",
    streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value

    };
}
const employee1 = updateEmployeeWithKeyAndValue(employee, "name", "Sam");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
    
}
const employee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");

function deleteFromEmployeeByKey(obj, key) {
        const newObj = { ...obj };
        delete newObj[key];
        return newObj;
      };
const employee3 = deleteFromEmployeeByKey(employee, "streetAddress");

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}
const employee4 = destructivelyDeleteFromEmployeeByKey(employee, "name");