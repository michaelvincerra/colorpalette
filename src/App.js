import React, { Component } from 'react'
import { v4 } from 'uuid'
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'
import './css/APP.css'

/* "DATA DOWN: State is passed from the App.js component
DOWN to child components as props..."  */

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      colors: []
    }
    this.addColor = this.addColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }

  addColor (title, color) {
    this.setState(prevState => ({
      colors: [
        ...prevState.colors,
        {
          id: v4(),
          title,
          color,
          rating: 0
        }
      ]
    }))
  }

  rateColor (id, rating) {
    this.setState(prevState => ({
      colors: prevState.colors.map(color =>
        (color.id !== id)
          ? color
          : {
            ...color,
            rating
          }
      )
    }))
  }

  removeColor (id) {
    this.setState(prevState => ({
      colors: prevState.colors.filter(color => color.id !== id)
    }))
  }

  render () {
    return (
      <div className='app'>
        {/* AddColorForm is instantiated; onNewColor is a prop, and it's the first time is connected to component */}
        <AddColorForm onNewColor={this.addColor} />
        <ColorList colors={this.state.colors}
          onRate={this.rateColor}
          onRemove={this.removeColor} />
      </div>
    )
  }
}
export default App
