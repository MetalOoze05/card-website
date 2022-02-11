import { useState, useEffect } from "react";
import ReactToolTip from "react-tooltip";

export default function SpotifyStatus() {
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
        <p className="text-red-400 ml-7">Failed to load Spotify Data.</p>
    )

    if (data.data.listening_to_spotify) {
        const song = data.data.spotify.song;
        const artist = data.data.spotify.artist;
        const track_id = data.data.spotify.track_id;
        const album_image = data.data.spotify.album_art_url;

        return ( 
            <p data-tip={"<img src='" + album_image + "' width='200px'></img>"} data-background-color="transparent" data-html={true} className="text-green-500 flex flex-row flex-wrap items-center gap-2 whitespace-normal">
                <ReactToolTip />
                <span className="fas fa-music"></span>
                Listening to <a href={'https://open.spotify.com/track/' + track_id} target="_blank">{song}</a> on Spotify by {artist}
            </p> 
        )
    }

    return (
        <p className="hidden"></p>
    )
}