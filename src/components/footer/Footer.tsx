/* eslint-disable prefer-const */
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-red-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Farmacia do Povo | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-4 mt-2'>
                        {/* rota do linkedin */}
                        <a href="https://www.linkedin.com/in/henriquesilvaaa/" target="_blank" className='hover:opacity-75'>
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        {/* rota do instagram */}
                        <a href="https://www.instagram.com/henrique_andras/" target="_blank" className='hover:opacity-75'>
                            <InstagramLogo size={48} weight='bold' />
                        </a>
                        {/* rota do facebook */}
                        <a href="https://www.facebook.com/profile.php?id=100012756159084" target="_blank" className='hover:opacity-75'>
                            <FacebookLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer