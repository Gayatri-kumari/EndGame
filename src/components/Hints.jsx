import { useEffect, useState } from "react"

export default function Hints({hintarray})
{
const [currentHintIndex, setCurrentHintIndex] = useState(0);
useEffect(()=>{setCurrentHintIndex(hintarray.length-1)},[hintarray.length])
console.log(currentHintIndex)

  function goPrev() {
    setCurrentHintIndex(prev => (prev > 0 ? prev - 1 : hintarray.length - 1));
  }

  function goNext() {
    setCurrentHintIndex(prev => (prev < hintarray.length - 1 ? prev + 1 : 0));
  }
 return(
    <>
         
       {hintarray.length>1 && <button className="moveBwHints" onClick={goPrev} title='previous'>&#129032;</button>} {<span className="displayedHint">{hintarray[currentHintIndex]}</span>} {hintarray.length>1 && <button className='moveBwHints' onClick={goNext} title='next'>&#129034;</button>}
         
    </>
 )
}

