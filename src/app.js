'use strict'

import React, { Component } from 'react'
// import Title from './title'
// import Square from './square'
// import Button from './button'
import LikeButton from './like-button'
import SearchButton from './search-button'

// const App = React.createClass({
//   render: function () {
//     return <h1>Aplicação</h1>
//   }
// })

class App extends Component {
  render () {
    return (
      // <div className='container' onClick={(e) => {
      //   alert('Clicou')
      // }}>
      //   {/* <Button text='Botão' /> */}
      //   {/* Use children */}
      //   <Button>Texto</Button>
      //   <Title name='Fernando' />
      //   {['blue', 'red', 'green'].map((square, index) => (
      //     <Square key={index} color={square} />
      //   ))}
      // </div>
      <div className='container'>
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

export default App
