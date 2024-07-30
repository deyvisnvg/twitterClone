
import {
    TabContent,
    TabItem,
    TabList,
    Tab
} from 'keep-react';
import { Button } from '../../components';
import DropdownAccess from './components/Dropdown';
import { PhotoIcon, GifIcon, FaceSmileIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { IconCalendarTime, IconListDetails } from '@tabler/icons-react';
import { useState } from 'react';
import { apiDragonBall, DiarioGestion } from "../../assets/image"

export default function Content() {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(true);
    }

    return (
        <div className="w-2/5 border border-gray-700/80">
            <Tab activeLabel="parati" itemType="link">
                <TabList className='flex justify-around m-2'>
                    <TabItem label="parati">Para ti</TabItem>
                    <TabItem label="siguiendo">Siguiendo</TabItem>
                </TabList>
                <div className='px-3 pt-3 border-b border-gray-700/60'>
                    <div className='flex gap-3'>
                        <img src="https://unavatar.io/@Deyvisnvg" alt="" className="rounded-full w-11 h-11" />
                        <div className='w-full'>
                            <input type="text"
                                className='outline-none bg-black text-xl pt-1'
                                placeholder='¡¿Qué esta pasando?!'
                                onClick={handleClick}
                            />
                            {
                                isVisible && (
                                    <DropdownAccess />
                                )
                            }

                            <div className='flex justify-between items-center gap-5 py-3'>
                                <div className='flex gap-4'>
                                    <PhotoIcon className="size-5 text-sky-500" />
                                    <GifIcon className="size-5 text-sky-500" />
                                    <IconListDetails className="size-5 text-sky-500" />
                                    <FaceSmileIcon className="size-5 text-sky-500" />
                                    <IconCalendarTime className="size-5 text-sky-500" />
                                    <MapPinIcon className="size-5 text-sky-500" />
                                </div>
                                <Button
                                    text="Postear"
                                    variant='info'
                                    fontWeight="bold"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <TabContent value="parati" className='px-5'>
                    <div className='flex gap-2'>
                        <img src="https://unavatar.io/@Midudev" alt="" className="rounded-full w-11 h-11" />
                        <div>
                            <div className='flex items-center gap-1'>
                                <p>Miguel Ángel Durán</p>
                                <CheckBadgeIcon className="size-4 text-sky-500 rounded-full" />
                                <p>@midudev·29 jul.</p>
                            </div>
                            <div className='break-normal'>
                                <p>
                                    ¡La mejor API de Dragon Ball para practicar programación!
                                    Sin registros, gratuita, en Español y con imágenes:
                                </p>
                                <span className='text-sky-600'>→ http://web.dragonball-api.com</span>
                            </div>
                            <div className='p-2'>
                                <img src={apiDragonBall} alt="" width={330} height={330} />
                            </div>
                        </div>
                    </div>
                </TabContent>
                <TabContent value="siguiendo" className='px-5'>
                    <div className='flex gap-2'>
                        <img src="https://unavatar.io/@Gestionpe" alt="" className="rounded-full w-11 h-11" />
                        <div>
                            <div className='flex items-center gap-1'>
                                <p>Diario Gestión</p>
                                <CheckBadgeIcon className="size-4 text-sky-500 rounded-full" />
                                <p>@Gestionpe·19s</p>
                            </div>
                            <div className='break-normal'>
                                <p>
                                    #PlusG | 📚 Programa de Inglés Fonético para Educación Inicial: ¿Es viable?
                                </p>
                                <span className='text-sky-600'>https://gestion.pe/peru/programa-de-ingles-fonetico-para-educacion-inicial-minedues-viable-gobierno-de-dina-boluarte-mensaje-a-la-nacion-noticia/?ref=gesr</span>
                            </div>
                            <div className='p-2'>
                                <img src={DiarioGestion} alt="" width={450} height={450} />
                            </div>
                        </div>
                    </div>
                </TabContent>
            </Tab>
        </div>
    )
}
/* focus:*:dark:border-b-sky-600 focus:*:border-b-4 */