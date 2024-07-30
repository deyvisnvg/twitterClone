import { Suscribirse, Tendencias } from "./components";
import './App.css';

function App() {
  return (
    <>
      <div className='h-full text-white flex flex-col items-center gap-y-4 py-2'>
        <Suscribirse />
        <Tendencias />
      </div>
    </>
  )
}

export default App
