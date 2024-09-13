import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Button} from './StyledComponents'
import './index.css'

class TextEditor extends Component {
  state = {inputValue: '', bold: false, italic: false, underline: false}

  handleInputChange = event => {
    this.setState({inputValue: event.target.value})
  }

  handleBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  handleItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  handleUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {inputValue, bold, italic, underline} = this.state

    return (
      <div className="bg-container">
        <div className="text-editor-container">
          <div>
            <h1 style={{textAlign: 'center'}}>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image"
            />
          </div>
          <div className="textarea-container">
            <ul className="buttons">
              <li>
                <Button
                  onClick={this.handleBold}
                  type="button"
                  data-testid="bold"
                  active={bold} // Use the active prop to change color
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li>
                <Button
                  onClick={this.handleItalic}
                  type="button"
                  data-testid="italic"
                  active={italic} // Use the active prop to change color
                >
                  <GoItalic size={25} />
                </Button>
              </li>
              <li>
                <Button
                  onClick={this.handleUnderline}
                  type="button"
                  data-testid="underline"
                  active={underline} // Use the active prop to change color
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </ul>
            <hr />
            <textarea
              value={inputValue}
              onChange={this.handleInputChange}
              className="input"
              placeholder="Enter The Text Here..."
              style={{
                fontWeight: bold ? 'bold' : 'normal',
                fontStyle: italic ? 'italic' : 'normal',
                textDecoration: underline ? 'underline' : 'none', // Ensure text-decoration is 'none' when underline is false
                fontSize: '24px',
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
