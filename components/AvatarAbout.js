import Image from "next/image";

const AvatarAbout = () => {
    return (
        <div className="hidden xl:flex xl:max-w-none">
            <Image 
            src={'/avatar-works.png'}
            width={950}
            height={980}
            alt=""
            className="translate-z-0 w-full h-full"
            />
        </div>
    )
}

export default AvatarAbout