// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimeRunning: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  onClickStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  timeInMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  timeInSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.timeInMinutes()}:${this.timeInSeconds()}`
    return (
      <div className="app-container">
        <div className="stopwatch-watch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-head-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="stopwatch-icon"
              />
              <p className="timer-heading">Timer</p>
            </div>

            <h1 className="watch-countdown">{time}</h1>

            <div className="buttons-container">
              <button
                className="button start"
                type="button"
                disabled={isTimeRunning}
                onClick={this.onClickStartTimer}
              >
                Start
              </button>
              <button
                className="button stop"
                type="button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                className="button reset"
                type="button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
