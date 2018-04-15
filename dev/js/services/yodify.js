var https = require('https');
var querystring = require('querystring');
var axios = require('axios');
require('dotenv').load();

var instance = axios.create({
  baseURL: 'https://yoda.p.mashape.com/',
  timeout: 5000,
  headers: {"X-Mashape-Key": process.env.apiKey || null}
});

function YodaSpeak(key) {
  this._credentials ={
    host: "yoda.p.mashape.com",
    path: "/yoda",
    headers: {"X-Mashape-Key": key || null},
    // Mashape's certificate doesn't seem to be authorized.
    // I'm gonna assume potential man-in-the-middle attacks for yoda-speak words is not too serious.
    rejectUnauthorized: false 
  }
}

export function convert (message) {
  YodaSpeak.convert = (message) => {
    const path = "/yoda?" + querystring.stringify({sentence: message});
    return instance.get(path)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log('error is', error);
    });
  }
  return YodaSpeak.convert(message);
}