import React, { Component } from 'react'

export class VoiceRecognition extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      message: ''
    }

    const SpeechRecognition = window.SpeechRecognition
      || window.webkitSpeechRecognition
      || window.mozSpeechRecognition
      || window.msSpeechRecognition
      || window.oSpeechRecognition

    if (SpeechRecognition != null) {
      this.recognition = this.createRecognition(SpeechRecognition)
    } else {
      window.alert('Please use Chrome to record and play voices.')
    }
  }

  createRecognition(SpeechRecognition) {
    const defaults = {
      continuous: true,
      interimResults: false,
      lang: 'en-US'
    }

    const options = {...defaults, ...this.props};

    let recognition = new SpeechRecognition();

    recognition.continuous = options.continuous;
    recognition.lang = options.lang;

    return recognition;
  }

  componentDidMount() {
    // finished recording triggers this.recognition.onresult
    this.recognition.onresult = (event) => {
      let transcript = event.results[0][0].transcript;
      // console.log('event data is', transcript);
      this.props.onRecordDone(transcript);
    }
  }

  start() {
    // console.log('start');
    this.recognition.start();
  }

  stop() {
    this.recognition.stop();
  }

  abort() {
    this.recognition.abort();
  }

  componentWillReceiveProps({ stop }) {
    if (stop) {
      this.stop();
    }
  }

  componentWillUnmount() {
    this.abort();
  }

  render () {
    return 'speechSynthesis' in window 
      ? <span>
        <i 
          className="entypo-mic inline"
          id="mic"
          onMouseDown={() => this.start()} 
          onMouseUp={() => this.stop()}
        />
      </span>
      : null
  }
}