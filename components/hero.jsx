import styles from "./Hero.module.scss"
import DiscordStatus from "./discordStatus"
import SpotifyStatus from "./spotifyStatus"
import Typed from "typed.js"
import { useEffect } from "react"

export default function Hero() {
    
    return (
        <div className="h-screen flex flex-col justify-center items-start px-10">
            <p className="text-gray-500 text-md">Hey there</p>
            <h1 className="text-gray-500 text-4xl">I'm <span className="text-gray-300">MetalOoze</span>, a highly passionate web developer.</h1>
            <div className="flex flex-wrap flex-row items-center mt-7 gap-5">
                <div className="flex flex-row justify-center items-center">
                    <h3 id={styles.heading} className="text-gray-700 text-lg align-top -ml-2">SKILLS</h3>
                    <ul className="ml-3 flex flex-col md:flex-row md:gap-5">
                        <li>
                            <p className="text-gray-500 text-md">Photoshop</p>
                            <p className="text-gray-500 text-md">HTML & CSS</p>
                            <p className="text-gray-500 text-md">JavaScript</p>
                        </li>
                        <li className="">
                            <p className="text-gray-500 text-md">NodeJS</p>
                            <p className="text-gray-500 text-md">React & NextJS</p>
                            <p className="text-gray-500 text-md">Vue & NuxtJS</p>
                        </li>
                    </ul>
                </div>
                <DiscordStatus />
            </div>
            <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-gray-300 to-gray-500"></div>
            {/*
            <div className="mt-10 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-gray-400">Scroll Down</span>
                <div className="w-px bg-gray-400 h-7"></div>
            </div>
            */}
        </div>
    )
}