import { createRef, useEffect, useState } from 'react';
import './App.css';
import bingo from './bingo.jpeg';
import luckyDraw from './lucky-draw.webp';
// @ts-ignore
import coins from './coins.mp3';
import useSound from 'use-sound';

function App() {
  const [moves, setMoves] = useState(0)
  const urlRef = createRef<HTMLInputElement>()

  const [playSound] = useSound(coins)

  function move() {
    if (moves !== 6) {
      const x = Math.floor((Math.random() * window.innerWidth) + 1)
      const y = Math.floor((Math.random() * window.innerHeight) + 1)
      const el = document.getElementById('sub')
      if (!el) return
      el.style.top = `${y}px`
      el.style.left = `${x}px`
      setMoves(move => move + 1)
    }
  }

  async function submit(e: MouseEvent) {
      const response = await fetch("localhost:3000/url",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"original" : urlRef.current?.value.trim()})
      })
      return response.json();
    }
  
  }


  return (
    <div className="flex justify-center flex-col w-[70%] my-16 mx-auto">
      <header className="mb-12">
        <h1 className="animate-auto-resizing text-center">LuCKY DRAw 777</h1>
      </header>

      <div className="flex justify-between items-center">
        <img src={bingo} alt="Bingo" className="w-[400px]" />
        <p className="text-[2rem] animate-flashing">INCREAE TRAFFIK TO UR WEBSIGHT USIN HOUR TOOL!</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center gap-8">
          <h2 className="text-[3rem]">URL HERE</h2>
          <div className="flex gap-8 relative">
            <input ref={urlRef} type="text" name="url" id="url" className="rounded-lg border-solid border-8 border-black p-8 border-y-2" onChange={() => {
              playSound()
            }} />
            <button id="sub" className="absolute right-[-150px] p-8 bg-purple-300 font-bold" onMouseEnter={move}>submit onClick={submit}</button>
          </div>
        </div>
        <img src={luckyDraw} alt="Lucky Draw" className="w-[400px]" />
      </div>
    </div>
  );
}

export default App;
