import React, { Component } from "react"
import './App.css'
export default class extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
        <button onClick={this.playAudio}>
          <span>start game</span>
        </button>
        <audio className="audio-element">
          <source src="https://www.fesliyanstudios.com/play-mp3/5256"></source>
        </audio>
      </div>
    )
  }

}