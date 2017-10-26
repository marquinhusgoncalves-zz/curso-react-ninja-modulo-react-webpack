'use strict'

import React, { Component } from 'react'
// import Title from './title'
// import Square from './square'
// import Button from './button'
// import LikeButton from './like-button'
// import SearchButton from './search-button'
import Timer from './timer'

// const App = React.createClass({
//   render: function () {
//     return <h1>Aplicação</h1>
//   }
// })

class App extends Component {
  constructor () {
    super()
    this.state = {
      // text: 'Marquinhus'
      // color: 'green'
      showTimer: true
    }
  }

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
      // <div className='container'>
      //   <LikeButton />
      //   <SearchButton />
      // </div>

      // <div className='container' onClick={() => this.setState({
      //   text: 'Trocou de nome'
      // })}>
      //   {this.state.text}
      // </div>

      // <div>
      //   <Square color={this.state.color} />
      //   {['red', 'green', 'blue'].map((color) => (
      //     <Button
      //       key={color}
      //       handleClick={() => this.setState({ color })}>
      //       {color}
      //     </Button>
      //   ))}
      // </div>

      <div>
        {this.state.showTimer && <Timer />}

        <button onClick={() => {
          this.setState({showTimer: !this.state.showTimer})
        }}> Show / Hide Timer </button>
      </div>
    )
  }
}

export default App
