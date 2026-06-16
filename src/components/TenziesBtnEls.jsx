export default function TenziesBtnEls() {
    let btnsEl = []
    for(let i = 1; i < 11; i++) {
        const randomNum = Math.ceil(Math.random() * 6)
        btnsEl.push(
          <button className='tenzies-btn' key={i}>{randomNum}</button>
        ) 
    }

    return btnsEl
  }