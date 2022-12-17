import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router';
import AppFooter from '@/components/app-footer/AppFooter';
import AppHeader from './components/app-header/AppHeader';
import { useScrollTop } from './hooks';

const App = memo(() => {
  useScrollTop()
  
  return (
    <div>
      <AppHeader />
      <section className='page'>
        {useRoutes(routes)}
      </section>
      <AppFooter />
    </div>
  )
})

export default App