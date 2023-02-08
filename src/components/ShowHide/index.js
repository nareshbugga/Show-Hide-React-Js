/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {Fname: false, Lname: false}

  onFirstName = () => {
    const {Fname} = this.state
    this.setState({Fname: !Fname})
  }

  onLastName = () => {
    const {Lname} = this.state
    this.setState({Lname: !Lname})
  }

  render() {
    const {Fname} = this.state
    const {Lname} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="flex">
          <div className="sub-flex">
            <button type="button" className="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            {Fname ? <p className="name joe">joe</p> : null}
          </div>
          <div className="sub-flex">
            <button
              type="button"
              className="button margin"
              onClick={this.onLastName}
            >
              Show/Hide Lastname
            </button>
            {Lname ? <p className="name jonas">jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
