import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    fName: '',
    sName: '',
    isFirstName: false,
    isSecondName: false,
    isSuccess: false,
  }

  onNewFormBtn = () => {
    this.setState({
      fName: '',
      sName: '',
      isFirstName: false,
      isSecondName: false,
      isSuccess: false,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {fName, sName} = this.state
    if (fName.length !== 0 && sName.length !== 0) {
      this.setState({isSuccess: true, isFirstName: false, isSecondName: false})
    } else if (fName.length === 0 && sName.length === 0) {
      this.setState({
        isFirstName: true,
        isSecondName: true,
      })
    } else if (fName.length === 0) {
      this.setState({
        isFirstName: true,
      })
    } else {
      this.setState({
        isSecondName: true,
      })
    }
  }

  onFirstNameBlur = event => {
    const firstValue = event.target.value === ''
    this.setState({
      isFirstName: firstValue,
      fName: event.target.value,
    })
  }

  onSecondNameBlur = event => {
    const secondValue = event.target.value === ''
    this.setState({
      isSecondName: secondValue,
      sName: event.target.value,
    })
  }

  render() {
    const {isFirstName, isSecondName, isSuccess} = this.state

    const fNameCls = isFirstName ? 'input-required' : ''
    const lNameCls = isSecondName ? 'input-required' : ''
    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        {!isSuccess && (
          <form onSubmit={this.onSubmitForm} className="form-container">
            <label className="label" htmlFor="firstName">
              FIRST NAME
            </label>
            <input
              placeholder="First name"
              type="text"
              id="firstName"
              className={`input ${fNameCls}`}
              onBlur={this.onFirstNameBlur}
            />
            {isFirstName && <p className="required">Required</p>}
            <label className="label" htmlFor="lastName">
              LAST NAME
            </label>
            <input
              placeholder="Last name"
              type="text"
              id="lastName"
              className={`input ${lNameCls}`}
              onBlur={this.onSecondNameBlur}
            />
            {isSecondName && <p className="required">Required</p>}
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        )}
        {isSuccess && (
          <div className="form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="right-tick"
            />
            <p className="success">Submitted Successfully</p>
            <button
              onClick={this.onNewFormBtn}
              type="button"
              className="button"
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
