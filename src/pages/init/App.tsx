import { useState } from 'react'
import { Link } from 'react-router-dom';
import Update from '@/components/update'
import logoVite from '@/assets/logo.png'
import logoElectron from '@/assets/raio.gif'
import logoText from '@/assets/logo_text.png'
import './App.scss'

console.log('[App.tsx]', `Hello world from PokeWar`)

function App() {
  return (
    <div className='App'>
      <div className='logo-box'>
        <a href='' target='_blank'>
          <img src={logoVite} className='logo vite' alt='Electron + Vite logo' />
          <img src={logoElectron} className='logo electron' alt='Electron + Vite logo' />
        </a>
      </div>
      <img src={logoText} className='logoText' alt='logo'/>
      <div className='card'>
        <Link to='/panel-game'>
          <button>START</button>
        </Link>
      </div>
      <Update />
      <p>
        <code>Bem vindo ao PokeWar</code>
      </p>
      <p className='read-the-docs'>
        <code>Desenvolvido por Alexandre Justen Filho 2023</code>
      </p>
    </div>
  )
}

export default App;
