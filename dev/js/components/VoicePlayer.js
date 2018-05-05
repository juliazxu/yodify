import React, { Component } from 'react'

export class VoicePlayer extends React.Component {
  constructor (props) {
    super(props)

    if ('speechSynthesis' in window) {
      this.speech = this.createSpeech();
    } else {
      window.alert('Please use Chrome to record and play voices.');
    }

  }

  createSpeech() {
    const defaults = {
      text: '',
      volume: 1,
      rate: 1,
      pitch: 1,
      lang: 'en-US',
    }

    const options = {...defaults, ...this.props};

    let speech = new SpeechSynthesisUtterance();

    speech.text = options.text;
    speech.volume = options.volume;
    speech.rate = options.rate;
    speech.pitch = options.pitch;
    speech.lang = options.lang;

    // there should be a better way of writing this, but the below doesn't work
    // speech = { speech, ...options }

    return speech;
  }

  speak() {
    this.speech.text = this.props.yodifiedMessage;
    // console.log('speaking', this.speech);
    window.speechSynthesis.speak(this.speech);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount () {
    window.speechSynthesis.cancel();
  }

  render () {
    return 'speechSynthesis' in window 
      ? <span>
          <i 
            className="entypo-play"
            id="play"
            onClick={() => this.speak()} 
          />
      </span>
      : null
  }
}