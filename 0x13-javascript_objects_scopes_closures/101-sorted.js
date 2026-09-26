#!/usr/bin/node
const dict = require('./101-data').dict;

const totalUnordered = {};

for (const userId in dict) {
  const occurrence = dict[userId];
  if (!totalUnordered[occurrence]) {
    totalUnordered[occurrence] = [];
  }
  totalUnordered[occurrence].push(userId);
}

console.log(totalUnordered);
