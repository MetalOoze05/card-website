import { useState, useEffect } from "react";
import styles from './Hero.module.scss'

export default function VscodeStatus() {
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
        }, 10000)
        
    }, [])

    if (isLoading) return (
        <p className="text-gray-500 ml-7">
            Loading
        </p>
    )

    if (!data) return (
        <p className="text-red-400 ml-7">Failed to load VSCode Data.</p>
    )

    if (data.data.activities.length > 0) {
        const activities = data.data.activities;
        const customStatusArr = activities.map((e) => e.type === 4);
        const customStatusIndex = customStatusArr.indexOf(true)

        const vsCodeStatusArr = activities.map((e) => e.type === 0);
        const vsCodeStatusIndex = vsCodeStatusArr.indexOf(true);

        if (vsCodeStatusIndex === -1) return <p className="hidden"></p>

        const msg = '';
        const state = activities[vsCodeStatusIndex].state;
        const details = activities[vsCodeStatusIndex].details;

        if (state && state.length > 0) {
            msg += `${details} in ${state}.`
        } else {
            msg += `${details} in Visual Studio Code.`
        }

        return (
            <p className="text-blue-500 flex flex-row flex-wrap items-center gap-2 whitespace-normal">
                <span className="fas fa-file-code"></span>
                {msg}
            </p> 
        )
    }

    return (
        <p className="hidden"></p>
    )
}