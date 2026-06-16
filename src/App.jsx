import { useState, useEffect } from 'react'
import './App.css'
import rollsIcon from './assets/rolls-icon.svg'
import timerIcon from './assets/timer-icon.svg'
import TenziesBtnEls from './components/TenziesBtnEls.jsx'

function App() {
  const [rolls, setRolls] = useState(0)
  const [timer, setTimer] = useState(0)
  const [tenziesBtns, setTenziesBtns] = useState(() => TenziesBtnEls())

  useEffect(() => {
    // Interval ID
    const IntervalId = setInterval(() => {
      setTimer(prevTime => prevTime + 1)
    }, 1000)
    
    // Claer interval Id
    return () => clearInterval(IntervalId)
  }, [])

  // Formatt the Timer
  function formatTime(timeInSeconds) {
    const mins = Math.floor(timeInSeconds / 60)
    const secs = timeInSeconds % 60
    return `${String(mins).padStart(2, 0)}:${String(secs).padStart(2, 0)}`
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
            <span>{formatTime(timer)}</span>
          </div>
        </section>
        <section className='tenzies-btns-container'>
          {tenziesBtns}
        </section>
        <button className='roll-btn' onClick={handleRollClick} >Roll</button>
      </main>
    </div>
  )
}

export default App
