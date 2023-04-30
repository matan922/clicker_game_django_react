import React, { useState } from 'react'

const ClickCounter = ({ clickCount }: {clickCount: number}) => {
    const clicks = clickCount
    console.log(clicks)

  return (
    <div>
        <div>{clicks}</div>
    </div>
  )
}

export default ClickCounter