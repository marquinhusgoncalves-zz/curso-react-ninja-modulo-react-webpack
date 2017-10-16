'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

// const App = React.createClass({
//   render: function () {
//     return <h1>Aplicação</h1>
//   }
// })

class App extends Component {
  render () {
    return (
      <div className='container' onClick={(e) => {
        alert('Clicou')
      }}>
        <Title name='Fernando' />
        {['blue', 'red', 'green'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
      </div>
    )
  }
}

export default App
