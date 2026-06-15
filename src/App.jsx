import { useState } from 'react'
import './App.css'
import rollsIcon from './assets/rolls-icon.svg'
import timerIcon from './assets/timer-icon.svg'

function App() {

  return (
    <div className='container'>
      <header>
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each
          die to freeze it at its current value
          between rolls.
        </p>
      </header>
      <main>
        <div className='rolls-timer-container'>
          <div>
            <img src={rollsIcon} alt='roll icon' />
            Rolls:  
            <span>0</span>
          </div>
          <div className='timer'>
            <img src={timerIcon} alt='roll icon' />
            Time:  
            <span>00:01</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
