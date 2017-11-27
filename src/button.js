'use strict'

import React from 'react'

// const Button = ({ text }) => (
//   <button>{text}</button>
// )

// Use children
// const Button = ({ children }) => (
//   <button>{children}</button>
// )

const Button = ({ children, handleClick }) => (
  <button className='main-button' onClick={handleClick}>
    {children}
  </button>
)

Button.propTypes = {
  handleClick: React.PropTypes.func.isRequired
}

export default Button
