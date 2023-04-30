import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {whatMode: true}

  changeBg = () => {
    this.setState(prevState => ({whatMode: !prevState.whatMode}))
  }

  render() {
    const {whatMode} = this.state

    const bg = whatMode ? 'darkMode' : 'lightMode'

    const text = whatMode ? 'Light Mode' : 'Dark Mode'

    const headingC = whatMode ? 'headingColorWhite' : 'headingColorBlack'

    return (
      <div className="container">
        <div className={`card-container ${bg}`}>
          <h1 className={`heading ${headingC} `}>Click To Change Mode</h1>

          <button className="btn" type="button" onClick={this.changeBg}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
