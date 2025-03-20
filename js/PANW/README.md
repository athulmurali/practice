

You are developing a frontend application using a 3rd party UI library. 
The library provides you with JSON objects with attribute names in camel case 
for example, one such attribute can be “firstName”. 
However, the API provided to you accepts only attribute names in snake case, 
for example, “first_name”. Please write a function that converts a JSON object
 with camelCase attribute names to snake case attribute names. You can assume that a function “toSnakeCase” is available to you to convert a camelCase string into snake case. Keep in mind that the JSON structure may be recursive. 


A sample JSON object:
```JSON
{
"firstName": "John",
"lastName": "Smith",
"birthYear": 1985,
"address": {
    "streetAddress": "123 Maple Drive",
    "city": "San Jose",
    "state": "CA"
    }
}


```

improv

```JSON
 {
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

```