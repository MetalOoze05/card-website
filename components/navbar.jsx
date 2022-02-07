import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Navbar() {
    useEffect(() => {
        const audio = document.getElementById('audio')
        const name = document.getElementById('name')
        let isPlaying = false
        name.addEventListener('click', () => {
            if (!isPlaying) {
                audio.play()
                isPlaying = true
            } else {
                isPlaying = false
                audio.pause()
            }
        })
    }, [])
    return (
        <nav className='fixed bg-zinc-900 w-full px-10 md:px-10 py-5'>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <audio id='audio' hidden loop>
                        <source src='/assets/audio.mp3'/>
                    </audio>
                    <h1 id='name' className='text-gray-300'>MetalOoze</h1>
                </div>
                <div className="flex flex-row justify-center gap-7">
                    {/*<ul>
                        <li className="uppercase text-gray-100 hover:text-gray-100 transition duration-200 ">
                            <Link href="/#home">Home</Link>
                        </li>
                    </ul>*/}
                    <ul>
                        <li className="uppercase text-gray-400 hover:text-gray-100 transition duration-200">
                            <Link href="mailto:metaloozedesigns@gmail.com">Contact</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="uppercase text-gray-400 hover:text-gray-100 transition duration-200">
                            <Link href="https://behance.net/MetalOoze">Portfolio</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}