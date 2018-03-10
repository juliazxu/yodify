# Yodify for Alexa (React, Redux, Node)

Turn your sentences into Yoda speak. Built in JS.

## Yodify

Yodify is a React / Redux project that turns your sentences to sound like Yoda.

```
> npm install
```

Run an initial webpack build
```
> webpack
```

Start the development server
```
> npm run start
```

To view: [http://localhost:3000/](http://localhost:3000/)

```

To-dos:
- Add proptypes
- Add microphone
- Add voice to text so you can talk to Yoda
- Add speaker
- Add text to voice so Yoda talks to you
- Add unit tests

- cut a branch for future work and then pr it to master
- rename api directory
- put api keys in global config file
  - .gitignore this file!
- the stuff in the containers folder should probably go in components
- in actions, do something with reject to degrade gracefully if shit doesn't work
- rename all but root index.js to be more meaningful
