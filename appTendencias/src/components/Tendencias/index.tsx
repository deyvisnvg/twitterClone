import Card from './Card';
import { useState } from 'react';
import { tendencias } from '../../core/tendencias';
import { Button } from "../../components";

export default function Tendencias() {
    const [mostrarMas, setMostrarMas] = useState<boolean>(false);
    const [elementosMostrados, setElementosMostrados] = useState<number>(4);

    const mostrarElementos = () => {
        setElementosMostrados(tendencias.length);
        setMostrarMas(true);
    }

    const mostrarMenos = () => {
        setElementosMostrados(4);
        setMostrarMas(false);
    }

    return (
        <>
            <aside className='bg-twitter rounded-lg w-[300px] lg:w-[360px]'>
                <h1 className="text-2xl font-bold p-4">Tendencias para ti</h1>
                <div className='flex flex-col relative'>
                    {
                        tendencias.slice(0, elementosMostrados).map(({ id, classification, name, count_post }) => {
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
                    {
                        tendencias.length > 4 && (
                            <div className='py-3 hover:bg-gray-500/10 cursor-pointer'>
                                {
                                    !mostrarMas && tendencias.length > 4 && (
                                        <Button
                                            text='Mostrar más'
                                            variant='link'
                                            fontWeight='normal'
                                            handleClick={mostrarElementos}
                                        />
                                    )

                                }
                                {
                                    mostrarMas && tendencias.length > 4 && (
                                        <Button
                                            text='Mostrar menos'
                                            variant='link'
                                            fontWeight='normal'
                                            handleClick={mostrarMenos}
                                        />
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </aside>
        </>
    )
}