import { IconDots } from '@tabler/icons-react';

interface Props {
    classification: string;
    name: string;
    count_post: string;
}

export default function ItemTendencia({ classification, name, count_post }: Props) {
    return (
        <>
            <div className="cursor-pointer hover:bg-gray-500/10 px-4 py-3 flex flex-col justify-center relative">
                <div>
                    <span className="text-xs text-gray-200/40">{classification}</span>
                    <h1 className="font-bold">{name}</h1>
                    <span className="text-xs text-gray-200/40">{count_post}</span>
                </div>
                <div className='absolute top-3 right-3 
                    text-gray-200/40 
                    hover:bg-blue-400/20 
                    hover:text-sky-500 
                    rounded-full 
                    p-2 
                    hint--bottom 
                    hint--no-arrow 
                    hint--rounded'
                    aria-label='Más opciones'
                >
                    <IconDots className='w-4 h-4' />
                </div>
            </div>
        </>
    )
}