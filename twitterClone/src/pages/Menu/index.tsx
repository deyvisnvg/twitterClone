import React from 'react';
import { IconBrandX } from '@tabler/icons-react';
import { MENU } from '../../core/menu';
import { Button } from '../../components';

export default function Menu() {
    return (
        <>
            <header className="text-white pr-10 pl-1 py-3">
                <div>
                    <IconBrandX className='w-9 h-9' />
                </div>
                <nav className='text-xl pt-1'>
                    <ul className='py-4 flex flex-col gap-y-3 items-start'>
                        {
                            MENU.map(({ name, icon }, index) => (
                                <li className='hover:bg-gray-500/25 py-1.5 px-4 pr-7 rounded-full'>
                                    <a href="" className='flex gap-x-4'>
                                        {
                                            index == 0
                                                ?
                                                <>
                                                    <div className='relative'>
                                                        <div className='w-2 h-2 bg-twitter_btn absolute right-0 rounded-full'></div>
                                                        <span className='*:w-7 *:h-7'>
                                                            {React.createElement(icon)}
                                                        </span>
                                                    </div>
                                                    <span className='font-bold'>{name}</span>
                                                </>
                                                :
                                                <>
                                                    <span className='*:w-7 *:h-7'>
                                                        {React.createElement(icon)}
                                                    </span>
                                                    <span>{name}</span>
                                                </>

                                        }
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <span className='*:px-20 *:font-bold *:text-lg'>
                    <Button
                        text='Postear'
                        variant="info"
                        size="medium"
                        fontWeight="normal"
                    />
                </span>
            </header>
        </>
    )
}
