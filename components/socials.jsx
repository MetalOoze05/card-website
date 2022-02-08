import styles from './Socials.module.scss';

export default function Socials() {
    return (
        <div className={styles.socials}>
            <div className="flex flex-col items-center">
                <div className="flex flex-row md:flex-col items-center justify-center gap-3 md:gap-5 text-gray-400 text-center md:text-right mb-3 md:mb-5">
                    <a className="fab fa-twitter font-bold hover:text-gray-100 transition duration-200" href="https://twitter.com/MetalOoze_"></a>
                    <a className="fab fa-github font-bold hover:text-gray-100 transition duration-200" href="https://github.com/MetalOoze05"></a>
                    <a className="fab fa-discord font-bold hover:text-gray-100 transition duration-200" href="https://discord.gg/AeDJpvXHg4"></a>
                </div>
                <div className="hidden md:block w-px h-screen bg-gray-400"></div>
            </div>
        </div>
    )
}