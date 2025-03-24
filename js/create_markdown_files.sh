#!/bin/bash

# Create a directory to store the markdown files
mkdir -p markdown_questions

# Create 10 markdown files
for i in {1..10}
do
  echo "### Question $i" > markdown_questions/question_$i.md
  echo "" >> markdown_questions/question_$i.md

  case $i in
    1)
      echo "#### Problem: Deep Object Comparison" >> markdown_questions/question_$i.md
      echo "Write a function \`deepEqual(obj1, obj2)\` that performs a deep comparison between two objects to determine if they are equal." >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "\`\`\`js" >> markdown_questions/question_$i.md
      echo "const deepEqual = (obj1, obj2) => {" >> markdown_questions/question_$i.md
      echo "  if (obj1 === obj2) return true;" >> markdown_questions/question_$i.md
      echo "  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false;" >> markdown_questions/question_$i.md
      echo "  const keys1 = Object.keys(obj1);" >> markdown_questions/question_$i.md
      echo "  const keys2 = Object.keys(obj2);" >> markdown_questions/question_$i.md
      echo "  if (keys1.length !== keys2.length) return false;" >> markdown_questions/question_$i.md
      echo "  for (let key of keys1) {" >> markdown_questions/question_$i.md
      echo "    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;" >> markdown_questions/question_$i.md
      echo "  }" >> markdown_questions/question_$i.md
      echo "  return true;" >> markdown_questions/question_$i.md
      echo "};" >> markdown_questions/question_$i.md
      echo "\`\`\`" >> markdown_questions/question_$i.md
      ;;
    2)
      echo "#### Problem: Flatten a Nested Object" >> markdown_questions/question_$i.md
      echo "Write a function \`flattenObject(obj)\` that takes a nested object and flattens it, using dot notation for nested keys." >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "\`\`\`js" >> markdown_questions/question_$i.md
      echo "const flattenObject = (obj, prefix = '') => {" >> markdown_questions/question_$i.md
      echo "  let result = {};" >> markdown_questions/question_$i.md
      echo "  for (const [key, value] of Object.entries(obj)) {" >> markdown_questions/question_$i.md
      echo "    const newKey = prefix ? \`\${prefix}.\${key}\` : key;" >> markdown_questions/question_$i.md
      echo "    if (typeof value === 'object' && value !== null) {" >> markdown_questions/question_$i.md
      echo "      Object.assign(result, flattenObject(value, newKey));" >> markdown_questions/question_$i.md
      echo "    } else {" >> markdown_questions/question_$i.md
      echo "      result[newKey] = value;" >> markdown_questions/question_$i.md
      echo "    }" >> markdown_questions/question_$i.md
      echo "  }" >> markdown_questions/question_$i.md
      echo "  return result;" >> markdown_questions/question_$i.md
      echo "};" >> markdown_questions/question_$i.md
      echo "\`\`\`" >> markdown_questions/question_$i.md
      ;;
    3)
      echo "#### Problem: Event Emitter" >> markdown_questions/question_$i.md
      echo "Implement a simple \`EventEmitter\` class that supports \`on\`, \`off\`, and \`emit\` methods." >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "\`\`\`js" >> markdown_questions/question_$i.md
      echo "class EventEmitter {" >> markdown_questions/question_$i.md
      echo "  constructor() {" >> markdown_questions/question_$i.md
      echo "    this.events = {};" >> markdown_questions/question_$i.md
      echo "  }" >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "  on(event, listener) {" >> markdown_questions/question_$i.md
      echo "    if (!this.events[event]) this.events[event] = [];" >> markdown_questions/question_$i.md
      echo "    this.events[event].push(listener);" >> markdown_questions/question_$i.md
      echo "  }" >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "  off(event, listener) {" >> markdown_questions/question_$i.md
      echo "    if (!this.events[event]) return;" >> markdown_questions/question_$i.md
      echo "    this.events[event] = this.events[event].filter(fn => fn !== listener);" >> markdown_questions/question_$i.md
      echo "  }" >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "  emit(event, ...args) {" >> markdown_questions/question_$i.md
      echo "    if (!this.events[event]) return;" >> markdown_questions/question_$i.md
      echo "    this.events[event].forEach(fn => fn(...args));" >> markdown_questions/question_$i.md
      echo "  }" >> markdown_questions/question_$i.md
      echo "};" >> markdown_questions/question_$i.md
      echo "\`\`\`" >> markdown_questions/question_$i.md
      ;;
    4)
      echo "#### Problem: Promise All with Concurrency Limit" >> markdown_questions/question_$i.md
      echo "Implement a function \`promiseAllLimited(promises, limit)\` that runs a list of promises in parallel but only allows \`limit\` number of them to run at a time." >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "\`\`\`js" >> markdown_questions/question_$i.md
      echo "const promiseAllLimited = (promises, limit) => {" >> markdown_questions/question_$i.md
      echo "  let index = 0;" >> markdown_questions/question_$i.md
      echo "  const results = [];" >> markdown_questions/question_$i.md
      echo "  const executing = [];" >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "  const enqueue = () => {" >> markdown_questions/question_$i.md
      echo "    if (index === promises.length) return Promise.resolve();" >> markdown_questions/question_$i.md
      echo "    const i = index++;" >> markdown_questions/question_$i.md
      echo "    const promise = promises[i]();" >> markdown_questions/question_$i.md
      echo "    const p = promise.then(result => {" >> markdown_questions/question_$i.md
      echo "      results[i] = result;" >> markdown_questions/question_$i.md
      echo "    });" >> markdown_questions/question_$i.md
      echo "    executing.push(p);" >> markdown_questions/question_$i.md
      echo "    p.finally(() => {" >> markdown_questions/question_$i.md
      echo "      executing.splice(executing.indexOf(p), 1);" >> markdown_questions/question_$i.md
      echo "      enqueue();" >> markdown_questions/question_$i.md
      echo "    });" >> markdown_questions/question_$i.md
      echo "  }" >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "  for (let i = 0; i < limit; i++) enqueue();" >> markdown_questions/question_$i.md
      echo "  return Promise.all(executing).then(() => results);" >> markdown_questions/question_$i.md
      echo "};" >> markdown_questions/question_$i.md
      echo "\`\`\`" >> markdown_questions/question_$i.md
      ;;
    5)
      echo "#### Problem: Implement a LRU Cache" >> markdown_questions/question_$i.md
      echo "Create a class \`LRUCache\` that follows the Least Recently Used caching strategy." >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "\`\`\`js" >> markdown_questions/question_$i.md
      echo "class LRUCache {" >> markdown_questions/question_$i.md
      echo "  constructor(capacity) {" >> markdown_questions/question_$i.md
      echo "    this.capacity = capacity;" >> markdown_questions/question_$i.md
      echo "    this.cache = new Map();" >> markdown_questions/question_$i.md
      echo "  }" >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "  get(key) {" >> markdown_questions/question_$i.md
      echo "    if (!this.cache.has(key)) return -1;" >> markdown_questions/question_$i.md
      echo "    const value = this.cache.get(key);" >> markdown_questions/question_$i.md
      echo "    this.cache.delete(key);" >> markdown_questions/question_$i.md
      echo "    this.cache.set(key, value);" >> markdown_questions/question_$i.md
      echo "    return value;" >> markdown_questions/question_$i.md
      echo "  }" >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "  put(key, value) {" >> markdown_questions/question_$i.md
      echo "    if (this.cache.has(key)) this.cache.delete(key);" >> markdown_questions/question_$i.md
      echo "    else if (this.cache.size == this.capacity) this.cache.delete(this.cache.keys().next().value);" >> markdown_questions/question_$i.md
      echo "    this.cache.set(key, value);" >> markdown_questions/question_$i.md
      echo "  }" >> markdown_questions/question_$i.md
      echo "};" >> markdown_questions/question_$i.md
      echo "\`\`\`" >> markdown_questions/question_$i.md
      ;;
    6)
      echo "#### Problem: Throttle Function" >> markdown_questions/question_$i.md
      echo "Write a throttle function \`throttle(func, delay)\` that only allows \`func\` to be executed once every \`delay\` milliseconds." >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "\`\`\`js" >> markdown_questions/question_$i.md
      echo "const throttle = (func, delay) => {" >> markdown_questions/question_$i.md
      echo "  let lastCall = 0;" >> markdown_questions/question_$i.md
      echo "  return function(...args) {" >> markdown_questions/question_$i.md
      echo "    const now = Date.now();" >> markdown_questions/question_$i.md
      echo "    if (now - lastCall >= delay) {" >> markdown_questions/question_$i.md
      echo "      lastCall = now;" >> markdown_questions/question_$i.md
      echo "      func(...args);" >> markdown_questions/question_$i.md
      echo "    }" >> markdown_questions/question_$i.md
      echo "  }" >> markdown_questions/question_$i.md
      echo "};" >> markdown_questions/question_$i.md
      echo "\`\`\`" >> markdown_questions/question_$i.md
      ;;
    7)
      echo "#### Problem: Debounce Function" >> markdown_questions/question_$i.md
      echo "Write a debounce function \`debounce(func, delay)\` that postpones the execution of \`func\` until after \`delay\` milliseconds have passed since the last time it was invoked." >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "\`\`\`js" >> markdown_questions/question_$i.md
      echo "const debounce = (func, delay) => {" >> markdown_questions/question_$i.md
      echo "  let timeoutId;" >> markdown_questions/question_$i.md
      echo "  return function(...args) {" >> markdown_questions/question_$i.md
      echo "    clearTimeout(timeoutId);" >> markdown_questions/question_$i.md
      echo "    timeoutId = setTimeout(() => func(...args), delay);" >> markdown_questions/question_$i.md
      echo "  }" >> markdown_questions/question_$i.md
      echo "};" >> markdown_questions/question_$i.md
      echo "\`\`\`" >> markdown_questions/question_$i.md
      ;;
    8)
      echo "#### Problem: Sorting Algorithm" >> markdown_questions/question_$i.md
      echo "Implement a sorting algorithm (e.g., QuickSort, MergeSort) in JavaScript." >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "\`\`\`js" >> markdown_questions/question_$i.md
      echo "const quickSort = (arr) => {" >> markdown_questions/question_$i.md
      echo "  if (arr.length <= 1) return arr;" >> markdown_questions/question_$i.md
      echo "  const pivot = arr[arr.length - 1];" >> markdown_questions/question_$i.md
      echo "  const left = arr.filter(x => x < pivot);" >> markdown_questions/question_$i.md
      echo "  const right = arr.filter(x => x > pivot);" >> markdown_questions/question_$i.md
      echo "  return [...quickSort(left), pivot, ...quickSort(right)];" >> markdown_questions/question_$i.md
      echo "};" >> markdown_questions/question_$i.md
      echo "\`\`\`" >> markdown_questions/question_$i.md
      ;;
    9)
      echo "#### Problem: Binary Search" >> markdown_questions/question_$i.md
      echo "Implement a function \`binarySearch(arr, target)\` that returns the index of the target element in a sorted array or -1 if not found." >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "\`\`\`js" >> markdown_questions/question_$i.md
      echo "const binarySearch = (arr, target) => {" >> markdown_questions/question_$i.md
      echo "  let low = 0, high = arr.length - 1;" >> markdown_questions/question_$i.md
      echo "  while (low <= high) {" >> markdown_questions/question_$i.md
      echo "    const mid = Math.floor((low + high) / 2);" >> markdown_questions/question_$i.md
      echo "    if (arr[mid] === target) return mid;" >> markdown_questions/question_$i.md
      echo "    if (arr[mid] < target) low = mid + 1;" >> markdown_questions/question_$i.md
      echo "    else high = mid - 1;" >> markdown_questions/question_$i.md
      echo "  }" >> markdown_questions/question_$i.md
      echo "  return -1;" >> markdown_questions/question_$i.md
      echo "};" >> markdown_questions/question_$i.md
      echo "\`\`\`" >> markdown_questions/question_$i.md
      ;;
    10)
      echo "#### Problem: Rotate Array" >> markdown_questions/question_$i.md
      echo "Write a function \`rotateArray(arr, k)\` that rotates an array to the right by \`k\` steps." >> markdown_questions/question_$i.md
      echo "" >> markdown_questions/question_$i.md
      echo "\`\`\`js" >> markdown_questions/question_$i.md
      echo "const rotateArray = (arr, k) => {" >> markdown_questions/question_$i.md
      echo "  k = k % arr.length;" >> markdown_questions/question_$i.md
      echo "  return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];" >> markdown_questions/question_$i.md
      echo "};" >> markdown_questions/question_$i.md
      echo "\`\`\`" >> markdown_questions/question_$i.md
      ;;
  esac
done

