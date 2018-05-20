const yargs = require("yargs");
const request = require("request");
const _ = require("underscore");

console.log("Hello World!");

var options = {
    method: 'GET',
    json:true
}

var test = request('https://www.google.com', options, (error, response, body) => {
    console.log(body);
})