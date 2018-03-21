import React, { Component } from 'react'
import Star from './Star'

export default class StarRating extends Component {
  render () {
    let starlist = []
    for (let i = 0; i < this.props.totalStars; i++) {
      starlist.push(
        <Star key={i}
          selected={i < this.props.rating} // TODO: EXPLAIN THIS.
          onClick={() => this.props.onRate(i + 1)} />
      )
    }
    return (
      <div className='star-rating'>
        {starlist}
        <p>{this.props.rating} of {this.props.totalStars} stars</p>
      </div>

    )
  }
}
