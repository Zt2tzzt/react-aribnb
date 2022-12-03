import React, { memo } from 'react'
import HelloWorld from 'cpns/HelloWorld'

const App = memo(() => {
  return (
    <div>
      <h1>App Page</h1>
      <HelloWorld />
    </div>
  )
})

export default App