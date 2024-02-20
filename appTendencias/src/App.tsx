import { Suscribirse, Tendencias } from "./components";

function App() {
  return (
    <>
      <div className='h-screen text-white flex flex-col items-center gap-y-4'>
        <Suscribirse />
        <Tendencias />
      </div>
    </>
  )
}

export default App
