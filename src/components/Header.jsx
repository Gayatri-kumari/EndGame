import React from 'react'
import { clsx } from 'clsx'

export default function Head(){
  const [visible, setVisible] = React.useState(false)
  const [closing, setClosing] = React.useState(false)

  //function to view the game rules modal
  function openModal() {
    setVisible(true)
    setClosing(false)
  }
  //function to close the game rules modal
  function closeModal() {
    setClosing(true)
    // hide the modal after 300ms
    setTimeout(() => setVisible(false), 300)  
  }

  const cls = clsx('innerModal', closing ? 'down' : 'up')

  return (
    <>
      <header>
        <h1>
          Assembly: Endgame 
          <button 
            className="rules" 
            title="Rules of the game" 
            onClick={openModal}>
            i
          </button>
        </h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>

      {visible &&
      <section className="modal" onClick={closeModal}>
        <div 
          className={cls} 
          onClick={(e)=>e.stopPropagation()}>
          <button onClick={closeModal}>X</button>  
          <section className='guide'>   
            <div id="game-title"><h2>🕹️ How to Play?</h2><em>Assembly: Endgame</em> - A fun, casual game. </div>
            <p>The world of programming is in danger! If you fail to guess the word only <strong>Assembly</strong> will remain 😱</p>
            <h3>🎯 Goal</h3>
            <p>Guess the hidden word before all modern programming languages are wiped out.</p>
          
            <h3>📝 Gameplay</h3>
            <ul>
              <li>A random word will get choosen for each new game.</li>
              <li>You'll see blank spaces (<code>_ _ _ _</code>) representing each letter.</li>
              <li>click letters to guess the word.</li>
              <li>Each <strong>wrong guess</strong> removes one popular programming language from the world.</li>
              <li>You have <strong>8 chances</strong> before only Assembly is left - so do your BEST!</li>
            </ul>

            <h3>💡 Hints</h3>
            <ul>
              <li>Click the <strong>Hint</strong> button if you're stuck.</li>
              <li>You can use upto <strong>3 hints per game</strong>.</li>
              <li>Each hint <strong>costs one chance</strong> (a language will be removed), So use them wisely.</li>
            </ul>

            <h3>📊 Tracking</h3>
            <ul>
              <li>Remaining guesses and languages left will be displayed on screen.</li>
              <li>After you win or lose, a <strong>New Game</strong> button will appear to restart.</li>
            </ul>
          
            <div>
            So why wait? Play the game and save the world now!<br/><br/>
            <em>Side note: I have nothing against Assembly, believe me 😄</em>
            </div>

            <br/>
            <br/><br/>
          </section>
        </div>
      </section>
      }
    </>
  )
}
 