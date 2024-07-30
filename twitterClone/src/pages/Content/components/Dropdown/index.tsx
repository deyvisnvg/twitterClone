import React, { useState } from 'react';
import {
    Dropdown,
    DropdownAction,
    DropdownContent,
    DropdownItem,
    DropdownList,
} from 'keep-react';
import { GlobeAmericasIcon } from '@heroicons/react/24/solid';
import { CheckIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import { IconUserCheck, IconAt } from '@tabler/icons-react'

interface DropdownItem {
    id: number;
    text: string;
    textAlternativo: string;
    icon: React.ReactNode;
}

export default function DropdownAccess() {
    const [selectedItemId, setSelectedItemId] = useState(1);

    const dropdownItem: DropdownItem[] = [
        {
            id: 1,
            text: "Todos",
            textAlternativo: "Cualquier persona puede responder",
            icon: <GlobeAmericasIcon className="size-5" />,
        },
        {
            id: 2,
            text: "Cuentas a las que sigues",
            textAlternativo: "Las cuentas a las que sigues pueden responder",
            icon: <IconUserCheck className="size-5" />,
        },
        {
            id: 3,
            text: "Cuentas verificadas",
            textAlternativo: "Solo las cuentas verificadas pueden responder",
            icon: <CheckBadgeIcon className="size-5" />,
        },
        {
            id: 4,
            text: "Solo las cuentas que menciones",
            textAlternativo: "Solo las cuentas que menciones pueden responder",
            icon: <IconAt className="size-5" />,
        },
    ]

    const handleClick = (id: number) => {
        setSelectedItemId(id);
    }

    return (
        <div className='flex gap-2 pt-6 pb-3 font-bold text-sm border-b border-gray-700/60'>
            <Dropdown>
                <DropdownAction className='first:bg-black first:text-sky-500 px-2 py-0 hover:bg-blue-900/30 text-sm'>
                    {
                        dropdownItem.map(({ id, icon, textAlternativo }) => {
                            return (
                                <div key={id}>
                                    {
                                        selectedItemId == id && (
                                            <div className='flex gap-1'>
                                                {icon}
                                                <p>{textAlternativo}</p>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </DropdownAction>
                <DropdownContent className='w-80 p-0 *:bg-black *:rounded-2xl '>
                    <DropdownList className='pb-1 *:pt-4 *:text-base *:font-bold shadow shadow-gray-300/20'>
                        <div className='text-base px-4 py-3'>
                            <p className='text-white'>¿Quiénes pueden responder?</p>
                            <p className='font-normal text-gray-500 leading-5 tracking-tight'>
                                Elige quién puede responder a este post. Cualquier persona mencionada puede responder siempre.
                            </p>
                        </div>
                        {
                            dropdownItem.map(({ id, text, icon }) => {
                                return (
                                    <DropdownItem key={id} onClick={() => handleClick(id)}>
                                        <div className='flex items-center justify-between w-full'>
                                            <div className='flex gap-3 items-center'>
                                                <div className='rounded-full bg-sky-500 p-2.5'>
                                                    {icon}
                                                </div>
                                                <p>{text}</p>
                                            </div>
                                            {
                                                selectedItemId == id && (
                                                    <CheckIcon className="size-5 text-sky-500" />
                                                )
                                            }
                                        </div>
                                    </DropdownItem>
                                )
                            })
                        }
                    </DropdownList>
                </DropdownContent>
            </Dropdown>
        </div>
    )
}


{/* <DropdownItem>
        <div className='rounded-full bg-sky-500 p-2.5'>
            <GlobeAmericasIcon className="size-5" />
        </div>
        <p>Todos</p>
    </DropdownItem>
    <DropdownItem>
        <div className='rounded-full bg-sky-500 p-2.5'>
            <IconUserCheck className="size-5" />
        </div>
        <p>Cuentas a las que sigues</p>
    </DropdownItem>
    <DropdownItem>
        <div className='rounded-full bg-sky-500 p-2.5'>
            <IconRosetteDiscountCheck className="size-5" />
        </div>
        <p></p>
    </DropdownItem>
    <DropdownItem>
        <div className='rounded-full bg-sky-500 p-2.5'>
            <IconAt className="size-5" />
        </div>
        <p>Solo las cuentas que menciones</p>
    </DropdownItem> */}
