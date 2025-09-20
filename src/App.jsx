import React from 'react'
import Lang from './components/languages.jsx'
import Head from './components/Header.jsx'
import Hints from './components/Hints.jsx'
import { useWindowSize } from 'react-use'
import {getFarewellText,randomWord,hintGenerator} from './words/generator.js'
import { languages } from './language.js'
import clsx from 'clsx';
import Confetti from 'react-confetti'

export default function App() {

//State for current random word
const [currentWord,setCurrentWord]=React.useState(()=>randomWord());

//State to store the guesses
const [guessLetter,setGuessLetter]=React.useState([]);

//Array for hints and index to manage it
const [hintArray,setHintArray]=React.useState([])
const [hintIndex,setHintIndex]=React.useState(0)

//screen size for smooth confetti flow
const {width,height}=useWindowSize()

const strArr=[...currentWord];//string to array conversion
  
//counts the number of wrong guesses made
const wrongGuessCount=guessLetter.filter((letter)=>!currentWord.toLowerCase().includes(letter)).length + hintArray.length

const gameLost=wrongGuessCount>=languages.length-1 
const gameWon=currentWord.toLowerCase().split('').every((letter)=>guessLetter.includes(letter))
 
//current guessed char (newly added to the guesLetter state array)
const currentGuess=guessLetter.length>0 && guessLetter[guessLetter.length-1]
//checking if the current guess is correct or not
const isCurrentGuessCorrect=currentWord.toLowerCase().includes(currentGuess)

//Text message generation
const farewellLang= (wrongGuessCount>0 && !isCurrentGuessCorrect) && languages[wrongGuessCount-1].name 
const farewellText= farewellLang && getFarewellText(farewellLang)

//language section, using map & marking the languages that got lost(due to wrong guesses for different styling)
const langComponent= languages.map((obj,index)=>{
  const lost=wrongGuessCount>index  
  return <Lang key={obj.name} item={obj} lost={lost} />
})

//for word display
const wordComponent=strArr.map((e,index)=>{
    
  const wordClass=clsx('WordCharacters',
    gameLost&&!guessLetter.includes(e) && 'failedToGuess'
  )

  return (
     <span key={index} className={wordClass}>
      {gameLost||guessLetter.includes(e.toLowerCase())?e:''}
      </span>
  )
})

//char keyboard display
const alphabets='abcdefghijklmnopqrstuvwxyz';
const keyboardStyle=clsx('keyboard',gameLost||gameWon ? 'shrink':'')
const keyboardComponent=alphabets.split('').map((char)=>{
const inGuessedLetters=guessLetter.includes(char)    
const rightGuess=inGuessedLetters && currentWord.toLowerCase().includes(char);
const wrongGuess=inGuessedLetters && !currentWord.toLowerCase().includes(char);
const conditionalClass=clsx(
      {
        right:rightGuess,
        wrong:wrongGuess
      }
    )

return(
      <button key={`${char}${wrongGuess?'wg':''}`} 
      onClick={()=>handleGuess(char)} 
      disabled={gameLost||gameWon} 
      className={conditionalClass}
      aria-disabled={guessLetter.includes(char)}
      aria-label={`Letter ${char}`}
      >
        {char}
      </button>
    )
})
  
//key for the messages 
const keyforanimation=gameLost||gameWon||farewellText && guessLetter.length

//function to update the guessLetter state
function handleGuess (char){  
  setGuessLetter((prev)=>[...prev,char])
}

//main function that helps in hints generation
function generateHint(currentWord,hintIndex)
{
  if(hintIndex<3){
    setHintArray(prev=>[...prev,hintGenerator(currentWord,hintIndex)])
    
    // setHintsTaken(prev=>prev+1)
    setHintIndex(prev=>prev+1)
  } 
  else{
      console.log('no hints left')
    }
}

//function that reset everything (restarts)
function newG()
  {
        setGuessLetter([])
        setCurrentWord(randomWord())
        setHintArray([])
        setHintIndex(0)
  }

//main DOM
return (
      <main>
        {gameWon && <Confetti width={width} height={height}/>}
        
      <Head/>

            <section 
              className={clsx({statusMsg:true,won:gameWon,lost:gameLost,farewellTextMsg:farewellText})} 
              aria-live='polite'
              role='status' key={keyforanimation}
            >
               {
               gameWon&& <><h2>You win!</h2>
                <p>Well done! 🎉</p></> 
                
                  }
               {
                 gameLost&& <><h2>Game Over!</h2>
                <p>You lose! Better start learning Assembly 😭</p></> 
                
              }
               {
                 (!(gameLost||gameWon)&&farewellText)&& <><p>{farewellText}</p></> 
                 
                }
            </section>

            <div className='chipContainer'>{langComponent}</div>

            {hintArray.length>0 && <div className='hintArrayDisplay'><Hints hintarray={hintArray}/></div>}
             
            <div className='word'>{wordComponent}</div>

            <section className='sr-only'
              aria-live='polite'
              role='status'
              >
              {guessLetter.length>0 &&(<>
                
                <p>
                {currentWord.toLowerCase().includes(currentGuess)?`Correct! The letter ${currentGuess} is in the word..`:`Sorry, the letter ${currentGuess} is not in the word. and you just lost ${languages[wrongGuessCount-1].name} Language`}
                You have {(languages.length-1)-wrongGuessCount} attempts left.
              </p>
              <p>
                Current word: 
                {currentWord.toLowerCase().split("").map(char=>guessLetter.includes(char)?(char):'blank.').join("")}
              </p>
              </>)}

            </section>

            <div className='help'>
               {wrongGuessCount>0 && <div className='guess'>Guesses left: {languages.length-1-(wrongGuessCount)}</div>}
               {hintIndex<3 ? <div className='hint' title='You get 3 hints max' onClick={()=>generateHint(currentWord,hintIndex)}>💡Hint for 1 Guess</div> :<div className='noHints'>No Hints Left</div>}
            </div>

            <div className={keyboardStyle}>
              {keyboardComponent}
            </div>

            {(gameLost||gameWon) &&<button className='newGame' title='New Game' onClick={newG}>New Game</button>}
    </main>
  )
}


