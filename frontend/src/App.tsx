import './App.css';
import bingo from './bingo.jpeg';
import luckyDraw from './lucky-draw.webp';

function App() {
  return (
    <div className="App flex justify-center flex-col my-16 mx-8">
      <header className="mb-12">
        <h1>LuCKY DRAw 777</h1>
      </header>

      <div className="flex justify-between items-center">
        <img src={bingo} alt="Bingo" className="w-[400px]" />
        <p className="text-[2rem]">INCREAE TRAFFIK TO UR WEBSIGHT USIN HOUR TOOL!</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h2 className="text-[3rem]">URL HERE</h2>
          <input type="text" name="url" id="url" className="rounded-lg border-solid border-8 border-black p-8 border-y-2" />
        </div>
        <img src={luckyDraw} alt="Lucky Draw" className="w-[400px]" />
      </div>
    </div>
  );
}

export default App;
