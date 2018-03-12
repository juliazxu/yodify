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
      console.warn('The current browser does not support the SpeechRecognition API.')
    }
  }

  createRecognition(SpeechRecognition) {
    const defaults = {
      continuous: true,
      interimResults: false,
      lang: 'en-US'
    }

    const options = Object.assign({}, defaults, this.props)

    let recognition = new SpeechRecognition()

    recognition.continuous = options.continuous
    recognition.interimResults = options.interimResults
    recognition.lang = options.lang

    return recognition
  }

  componentDidMount() {
    let that = this;
    this.recognition.onresult = function(event) {
      console.log('event data is', event.results[0][0].transcript);
      that.props.onRecordDone(event.results[0][0].transcript)
    }
  }

  start() {
    console.log('start');
    this.recognition.start();
  }

  stop() {
    this.recognition.stop();
    // this.sendMessage();
  }

  abort() {
    this.recognition.abort()
  }

  componentWillReceiveProps ({ stop }) {
    if (stop) {
      this.stop()
    }
  }

  componentWillUnmount () {
    this.abort()
  }

  play() {
    console.log(this.recognition);
    console.log(this.recognition.transcript, 
      this.recognition.finalTranscript, this.recognition.interimTranscript);
  }

  // sendMessage() {
  //   this.props.onRecordDone(this.state.message);
  // }

  render () {
    return (
      <span>
        <a onMouseDown={() => this.start()} onMouseUp={() => this.stop()}>
          <i 
            className="entypo-mic inline"
            id="mic"
          />
        </a>
      </span>
    )
  }
}