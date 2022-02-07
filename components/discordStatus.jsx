import { useState, useEffect } from 'react'
import styles from './Hero.module.scss'

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

    if (data.data.discord_status == 'dnd') return (
        <div className="flex flex-row justify-center items-center">
            <h3 id={styles.heading} className="text-gray-700 text-lg align-top ml-7">STATUS</h3>
            <ul className="ml-3 animate-pulse">
                <li>
                    <p className="text-red-500 flex flex-row items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        Do Not Disturb
                    </p>
                </li>
            </ul>
        </div>
    )
    if (data.data.discord_status == 'idle') return (
        <div className="flex flex-row justify-center items-center">
            <h3 id={styles.heading} className="text-gray-700 text-lg align-top ml-7">STATUS</h3>
            <ul className="ml-3 animate-pulse">
                <li>
                    <p className="text-yellow-500 flex flex-row items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        Idle
                    </p>
                </li>
            </ul>
        </div>
    )
    if (data.data.discord_status == 'online') return (
        <div className="flex flex-row justify-center items-center">
            <h3 id={styles.heading} className="text-gray-700 text-lg align-top ml-7">STATUS</h3>
            <ul className="ml-3 animate-pulse">
                <li>
                    <p className="text-green-500 flex flex-row items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        Online
                    </p>
                </li>
            </ul>
        </div>
    )
    return (
        <div className="flex flex-row justify-center items-center">
            <h3 id={styles.heading} className="text-gray-700 text-lg align-top ml-7">STATUS</h3>
            <ul className="ml-3 animate-pulse">
                <li>
                    <p className="text-gray-500 flex flex-row items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                        Offline
                    </p>
                </li>
            </ul>
        </div>
    )
}