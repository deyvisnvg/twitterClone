import Card from './Card';
import { tendencias } from '../../core/tendencias';

export default function Tendencias() {
    return (
        <>
            <aside className='bg-twitter rounded-lg w-[300px] lg:w-[360px]'>
                <h1 className="text-2xl font-bold p-4">Tendencias para ti</h1>
                <div className='flex flex-col relative'>
                    {
                        tendencias.map(({ id, classification, name, count_post }) => {
                            return (
                                <Card
                                    key={id}
                                    classification={classification}
                                    name={name}
                                    count_post={count_post}
                                />
                            )
                        })
                    }
                    <div className='px-4 py-3 hover:bg-gray-500/10 text-sky-500/90 cursor-pointer'>
                        Mostrar más
                    </div>
                </div>
            </aside>
        </>
    )
}