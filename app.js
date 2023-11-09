// npm - global commands ,comes with node
// npm -version

// local dependency - use it only in this particular project
// npm i <packageNmae>

// global dependency - use it in any project
// npm install -g
// npm init -7 package.json by default

const _ = require('lodash')

const items = [1,[2,[3,4]]]

const newItems = _.flattenDeep(items)
console.log(newItems);