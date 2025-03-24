// Question 1. Structure of nested obj , can it be arrays as well or can it be arrays as well ?
function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

/**
 *
 * @param {*} obj1
 * @param {*} obj2
 * @returns true only if deepEquals true , else false
 *
 */
function deepEqual(obj1, obj2) {
  if (getType(obj1) !== getType(obj2)) return false;
  // early termination if keys count different
  else if (obj1 instanceof Object) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    return (
      obj1Keys.every((obj1K) => obj2.hasOwnProperty(obj1K)) &&
      obj2Keys.every((obj2K) => obj1.hasOwnProperty(obj2K)) &&
      obj1Keys.every((obj1K) => deepEqual(obj1[obj1K], obj2[obj1K]))
    );
  } else if (obj1 instanceof Array) {
    return (
      obj1.length === obj2.length &&
      obj1.every((_, obj1Ind) => deepEqual(obj1[obj1Ind], obj2[obj1Ind]))
    );
    // arrayLength of both equals ?
  } else {
    return obj1 === obj2;
  }
}

const objExample1 = { a: 1, b: { c: 2 } };
const objExample2 = { a: 1, b: { c: 2 } };

const testCases = [
  {
    obj1: [1, 2, 3],
    obj2: { 0: 1, 1: 2, 2: 3 },
    expectedResult: false,
  },
  {
    obj1: true,
    obj2: false,
    expectedResult: false,
  },

  {
    obj1: {},
    obj2: [],
    expectedResult: false,
  },

  {
    obj1: {},
    obj2: [],
    expectedResult: false,
  },
  {
    obj1: objExample1,
    obj2: objExample2,
    expectedResult: true,
  },
  {
    obj1: objExample1,
    obj2: { a: 1, b: { c: 3 } },
    expectedResult: false,
  },
];
testCases.forEach(({ obj1, obj2, expectedResult }) =>
  console.log(deepEqual(obj1, obj2), { expectedResult }),
);
