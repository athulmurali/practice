

const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

/**
 * 
 * @param {Array<Object> | Object} obj
 */
function convertCamelToSnakeCase(obj) {

    if (obj instanceof Object)
    {
        return Object.keys(obj).reduce((acc, k)=>{
            const new_key= camelToSnakeCase(k)
            return {...acc, [new_key] : obj[k]}
        },{})
    }
    else if (obj instanceof Array)
        return obj.map(arrObj => convertCamelToSnakeCase(arrObj))
    else
        return obj
}

const obj = {
    "firstName": "John",
    "lastName": "Smith",
    "birthYear": 1985,
    "address": [{
    "street": "123 Main Street",
    "city": "Springfield",
    "state": "IL"
    },{
    "street": "456 Elm Street",
    "city": "Springfield",
    "state": "IL"
    }]
    }
const result = convertCamelToSnakeCase(obj,"obj");
console.log(result);
