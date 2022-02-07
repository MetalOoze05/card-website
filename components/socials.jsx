export default function Socials() {
    return (
        <div className="fixed top-3/4 left-10 md:top-1/2 md:right-10 md:left-auto">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center justify-center gap-5 text-gray-400 text-center md:text-right mb-5">
                    <a className="fab fa-twitter font-bold hover:text-gray-100 transition duration-200" href=""></a>
                    <a className="fab fa-github font-bold hover:text-gray-100 transition duration-200" href=""></a>
                    <a className="fab fa-discord font-bold hover:text-gray-100 transition duration-200" href=""></a>
                </div>
                <div className="w-px h-screen bg-gray-400"></div>
            </div>
        </div>
    )
}