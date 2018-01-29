import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/AddColorForm.scss'

/* global  alert  */
/* Learn flow types in place of Prop.types */

export default class AddColorForm extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit (e) {
    e.preventDefault()
    this.props.onNewColor(_title.value, _color.value) // To ensure that data flows properly (two-way data binding)
    _title.value = ''
    _color.value = '#000000'
    _title.focus()
  }

  render () {
    let _title, _color
    return (
      <form className='add-color' onSubmit={submit} >
        <input ref={input => _title = input}
          type='text'
          placeholder='color title...' required />
        <input ref={input => _color = input}
          type='color' required />
        <button > ADD </button>
      </form>
    )
  }
}

AddColorForm.propTypes = {
  onNewColor: propTypes.func
}

render(
  <AddColorForm />
  document.getElementById('react-container')
  // What is missing to connect to pubic/index.html
)
