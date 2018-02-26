import React, { Component } from 'react'
import '../../stylesheets/AddColorForm.scss'
// import './App.css'

/* global    */
/* Learn flow types in place of Prop.types
Flow is a way of documemting all types: mainly props and state --for later */

export default class AddColorForm extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
    // This est. the default settings of the form
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
    this.props.onNewColor(this.state.title, this.state.color)
  }

  setColor (e) {
    this.setState({ color: e.currentTarget.value })
  }

  setTitle (e) {
    this.setState({ title: e.target.value })
    console.log(e)
  }

  render () {
    return (
      <form className='add-color' onSubmit={this.submit} >
        <input type='text' value={this.state.title} onChange={this.setTitle}
          placeholder='color title...' required />
        <input type='text' value={this.state.color} onChange={this.setColor}
          placeholder='hexidecimal value' required />
        <button > ADD </button>
      </form>
    )
  }
}
