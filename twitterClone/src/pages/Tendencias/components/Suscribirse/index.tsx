import { Button } from "../../../../components";

export default function Suscribirse() {
  return (
    <>
      <aside className='p-4 border border-gray-700/80 rounded-2xl text-wrap w-[300px] lg:w-[355px]'>
        <h1 className="text-xl font-bold pb-2">Suscríbete a Premium</h1>
        <p className="text-base leading-tight pb-3">Suscríbete para desbloquear nuevas funciones y, si eres elegible, recibir un pago de cuota de ingresos por anuncios.</p>
        <Button
          text='Suscribirse'
          variant='info'
          fontWeight="bold"
        />
      </aside>
    </>
  )
}