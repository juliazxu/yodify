import { apiKey } from './apiKey';
// var express = require('express');
// var app = express();
// var cors = require('cors');

// app.use(cors());

const YodaSpeak = require('yoda-speak');
const yoda = new YodaSpeak('WJU3xX4elhmsh4t4yoIQuE4lsRB9p16ZKQEjsnlqZ4NlBsFwro');

export function convert (message) {
  new Promise(resolve => {
    yoda.convert(message, (err, result) => {
      if (!err) {
        if (result.toString().includes('error')) {
          resolve('Sleeping, Yoda is. In an hour, you can try. Herh herh.');
        } else {
          console.log(result.toString());
          resolve(result.toString());
        }
      } else {
        console.log('There was an error', err);
        resolve('Sleeping, Yoda is. In an hour, you can try. Herh herh.');
      }
    });
  }).then(yodifiedMessage => {
    return yodifiedMessage;
  });
}

// var express = require('express');
// var app = express();

// var cors=require('cors');
// app.use(cors({origin:true,credentials: true}));