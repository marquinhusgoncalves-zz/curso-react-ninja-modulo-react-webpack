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
      <div className='container'>
        <Title name='Fernando' />
        {['blue', 'red', 'green'].map((square) => (
          <Square key={square} color={square} />
        ))}
      </div>
    )
  }
}

export default App
