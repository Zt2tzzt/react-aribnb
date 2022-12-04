import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router';

const App = memo(() => {
  return (
    <div>
      <section className='page'>
        {useRoutes(routes)}
      </section>
      <footer className='footer'>footer</footer>
    </div>
  )
})

export default App