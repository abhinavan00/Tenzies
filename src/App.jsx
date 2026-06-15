import { useState } from 'react'
import './App.css'
import rollsIcon from './assets/rolls-icon.svg'
import timerIcon from './assets/timer-icon.svg'

function App() {
  const [rolls, setRolls] = useState(0)

  function tenziesBtnEls() {
    let btnsEl = []
    for(let i = 1; i < 11; i++) {
        const randomNum = Math.ceil(Math.random() * 6)
        btnsEl.push(
          <button className='tenzies-btn'>{randomNum}</button>
        ) 
    }

    return btnsEl
  }

  function handleRollClick() {
    setRolls(prevRolls => prevRolls + 1)
  }

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
        <section className='rolls-timer-container'>
          <div>
            <img src={rollsIcon} alt='roll icon' />
            Rolls:  
            <span>{rolls}</span>
          </div>
          <div className='timer'>
            <img src={timerIcon} alt='roll icon' />
            Time:  
            <span>00:01</span>
          </div>
        </section>
        <section className='tenzies-btns-container'>
          {tenziesBtnEls()}
        </section>
        <button className='roll-btn' onClick={handleRollClick} >Roll</button>
      </main>
    </div>
  )
}

export default App
