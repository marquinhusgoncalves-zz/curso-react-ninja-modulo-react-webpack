'use strict'

import React, { Component } from 'react'
// import Title from './title'
// import Square from './square'
// import Button from './button'
// import LikeButton from './like-button'
// import SearchButton from './search-button'
// import Timer from './timer'

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
      time: 0,
      showTimer: true,
      // value: 'Valor inicial',
      checked: false,
      value: 2,
      showContent: false
    }
  }

  componentWillMount () {
    console.log('componentWillMount app')
  }

  componentDidMount () {
    console.log('componentDidMount app')
  }

  render () {
    console.log('render')
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

      // <div>
      //   <Timer time={this.state.time} />

      //   <button onClick={() => {
      //     this.setState({time: this.state.showtime + 10})
      //   }}>Change props</button>
      // </div>

      // <div>
      //   <Button handleClick={() => console.log('CLicou')}>
      //     Clique aqui
      //   </Button>
      // </div>

      // <div>
      //   <form>
      //     <input type='text' value={this.state.value} onChange={(e) => {
      //       this.setState({
      //         value: e.target.value
      //       })
      //     }} />
      //     <label>
      //       <input
      //         type='checkbox'
      //         value='my-checkbox'
      //         checked={this.state.checked}
      //         onChange={(e) => {
      //           this.setState({checked: !this.state.checked})
      //         }} />
      //         Checkbox
      //     </label>

      //     <input type='radio' name='rd' value='1' defaultChecked />Radio 1
      //     <input type='radio' name='rd' value='2' />Radio 2
      //   </form>
      // </div>
      // <div>
      //   <form>
      //     <select multiple value={['1', '3']} onChange={(e) => {
      //       this.setState({
      //         value: e.target.value
      //       })
      //     }}>
      //       <option value='1'>Opção 1</option>
      //       <option value='2'>Opção 2</option>
      //       <option value='3'>Opção 3</option>
      //     </select>
      //   </form>
      // </div>

      // Input Checkbox pode ser usado onClick ou onChange
      // <div>
      //   <form
      //     onSubmit={(e) => {
      //       e.preventDefault()
      //       console.log('event', e)
      //     }}

      //     onChange={(e) => {
      //       console.log('name', e.target.name)
      //       console.log('value', e.target.value)
      //     }}>

      //     <input type='text' name='name' />
      //     <input type='email' name='email' />
      //     <textarea value='textarea value' />
      //     <input
      //       type='checkbox'
      //       name='checkbox'
      //       onClick={(e) => console.log('onclick event', e)}
      //       onChange={(e) => console.log('onchange event', e)} />
      //     <button type='submit'>Enviar</button>
      //   </form>
      // </div>

      <div>
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={() => {
              this.setState({
                checked: !this.state.checked
              }, () => {
                this.setState({
                  showContent: this.state.checked
                })
              })
              // O setState tem a função de callback acima porque é assíncrono
              // this.setState({
              //   showContent: this.state.checked
              // })
            }}
          />Mostrar conteúdo
        </label>
        {this.state.showContent && <div>Olha eu aqui !!!</div>}
      </div>
    )
  }
}

export default App
