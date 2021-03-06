import { useState, useEffect } from 'react'
import styles from './Hero.module.scss'
import SpotifyStatus from './spotifyStatus'
import VscodeStatus from './vscodeStatus'

export default function DiscordStatus() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://api.lanyard.rest/v1/users/331005037062914050')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
        setInterval(() => {
            fetch('https://api.lanyard.rest/v1/users/331005037062914050')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
        }, 60000)
        
    }, [])

    if (isLoading) return (
        <p className="text-gray-500 ml-7">
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
            Loading
        </p>
    )

    if (!data) return (
        <p className="text-red-400 ml-7">Failed to load Discord Data.</p>
    )
    
    let systemEmoji;
    if (data.data.active_on_discord_web) {
        systemEmoji = 'fab fa-chrome'
    } else if (data.data.active_on_discord_mobile) {
        systemEmoji = 'fas fa-mobile'
    } else if (data.data.active_on_discord_desktop) {
        systemEmoji = 'fas fa-desktop'
    }

    const Status = () => {
        if (data.data.discord_status == 'dnd') {
            return (
                <p className="text-red-500 flex flex-row items-center gap-2">
                    <span className={`${systemEmoji} text-red-500`}></span>
                    Do Not Disturb
                </p>
            )
        } else if (data.data.discord_status == 'idle') {
            return (
                <p className="text-yellow-500 flex flex-row items-center gap-2">
                    <span className={`${systemEmoji} text-yellow-500`}></span>
                    Idle
                </p>
            )
        } else if (data.data.discord_status == 'online') {
            return (
                <p className="text-green-500 flex flex-row items-center gap-2">
                    <span className={`${systemEmoji} text-green-500`}></span>
                    Online
                </p>
            )
        } else {
            return (
                <p className="text-gray-500 flex flex-row items-center gap-2">
                    <span className={`fas fa-circle text-gray-500`}></span>
                    Online
                </p>
            )
        }
    }

    return (
        <div className="flex flex-row justify-center items-center -ml-2 md:ml-0 gap-3 md:gap-5">
            <h3 id={styles.heading} className="text-gray-700 text-lg align-top">STATUS</h3>
            <ul className="animate-pulse">
                <li className="flex flex-col gap-2">
                    <Status />
                    <SpotifyStatus />
                    <VscodeStatus />
                </li>
            </ul>
        </div>
    )
}