// ### 2. **Flatten a Nested Object**

// Write a function `flattenObject(obj)` that
//  takes a nested object and flattens it, using dot notation for nested keys.

// questions 

function flattenObject(obj,  parentPath= ""){

    if (obj !== null && typeof obj === "object" && !Array.isArray(obj)){
        return Object.keys(obj).reduce((acc, newKey)=>{
            const prefixedKey =  parentPath === "" ? newKey : [parentPath, newKey].join(".")
            const temp = flattenObject(obj[newKey], prefixedKey ) 
            return {...acc, ...temp}
        }, {})

    }
    return {[parentPath]: obj}
}
// console.log(flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } }))
// { a: 1, 'b.c': 2, 'b.d.e': 3 }

// console.log(flattenObject({ a: 1, b: { c: 2, d: { e: [0 ,1, 2,3] } } }))
// { a: 1, 'b.c': 2, 'b.d.e': [ 0, 1, 2, 3 ] }