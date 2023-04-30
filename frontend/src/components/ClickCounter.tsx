import React, { useState } from 'react'

const ClickCounter = ({ clickCount }: {clickCount: number}) => {
    const clicks = clickCount

  return (
    <div>
        <div>{clicks}</div>
    </div>
  )
}

export default ClickCounter