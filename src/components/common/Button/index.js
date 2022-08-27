import React from 'react'
import './button.css'

const Button = ({buttonText,onclick,customClass,prefix}) => {
  return (
    <div className={`flex absolute-center button-wrapper ${customClass}`} onclick={onclick}>{prefix} {buttonText}</div>
  )
}

export default Button