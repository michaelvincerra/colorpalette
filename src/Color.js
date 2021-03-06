// import PropTypes from 'prop-types'
import StarRating from './StarRating'
import React, { Component } from 'react'

export default class Color extends Component {
  render () {
    return (
      <section className='color'>
        <h1>{this.props.title}</h1>
        <button onClick={this.props.onRemove}>X</button>
        <div className='color'
          style={{ backgroundColor: this.props.color }} />
        <div>
          <StarRating rating={this.props.rating} onRate={this.props.onRate}
            totalStars={this.props.totalStars} />
        </div>
      </section>
    )
  }
}
