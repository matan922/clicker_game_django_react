import React, { useState } from 'react'

interface CounterProps {
  coins?: number;
  cursors?: number;
  clicks?: number;
  workers?: number;
}

const Counter = ( {coins, cursors, clicks, workers}: CounterProps ) => {
    

  return (
    <span>
        {coins}
        {cursors}
        {workers}
        {clicks}
    </span>
  )
}

export default Counter