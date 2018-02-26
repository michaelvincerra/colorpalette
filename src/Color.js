// import PropTypes from 'prop-types'
import StarRating from './StarRating'
import React, { Component } from 'react'
// import '../../stylesheets/Color.scss'
import './App.css'

export default class Color extends Component {
  render () {
    return (
      <section className='color'>
        <h1>{this.props.title}</h1>
        <button onClick={this.props.onRemove}>X</button>
        <div className='color'
          style={{ backgroundColor: this.props.color }} />
        <div>
          <StarRating starsSelected={this.props.rating} onRate={this.props.onRate} />
        </div>
      </section>
    )
  }
}
