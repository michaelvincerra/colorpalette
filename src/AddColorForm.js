import React, { Component } from 'react'
// import '../../stylesheets/AddColorForm.scss'
/* global    */
/* Learn flow types in place of Prop.types */

export default class AddColorForm extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.state = {
      title: '',
      color: '#000000'
    }
    this.submit = this.submit.bind(this)
    this.setColor = this.setColor.bind(this)
    this.setTitle = this.setTitle.bind(this)
  }

  submit (e) {
    e.preventDefault()
    // this.props.onNewColor(this.state.title, this.state.color)
    // To ensure that data flows properly (two-way data binding)
    this.setState({ title: '', color: '#000000' })
  }
  setColor (e) {
    this.setState({ color: e.currentTarget.value })
  }

  setTitle (e) {
    this.setState({ title: e.target.value })
  }

  render () {
    return (
      <form className='add-color' onSubmit={this.submit} >
        <input type='text' value={this.props.title} setTitle={this.setTitle}
          placeholder='color title...' required />
        <input type='text' value={this.props.color} setColor={this.setColor}
          placeholder='hexidecimal value' required />
        <button > ADD </button>
      </form>
    )
  }
}
