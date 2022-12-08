import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router';
import AppFooter from '@/components/app-footer/AppFooter';

const App = memo(() => {
  return (
    <div>
      <section className='page'>
        {useRoutes(routes)}
      </section>
      <AppFooter />
    </div>
  )
})

export default App