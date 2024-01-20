//React icons
import { HiAcademicCap, HiHomeModern, HiMegaphone, HiMiniBriefcase, HiMiniCube, HiRocketLaunch } from 'react-icons/hi2';

//Nav Data
export const navData = [
    { name: 'home', path: '/', icon: <HiHomeModern /> },
    { name: 'about', path: '/about', icon: <HiAcademicCap /> },
    { name: 'services', path: '/services', icon: <HiMiniCube /> },
    { name: 'work', path: '/work', icon: <HiMiniBriefcase /> },
    { name: 'testimonials', path: '/testimonials', icon: <HiMegaphone /> },
    { name: 'contact', path: '/contact', icon: <HiRocketLaunch /> },
];

//Next Link
import Link from 'next/link';

//Next Router
import { useRouter } from 'next/router';

const Nav = () => {
    const router = useRouter();
    const pathname = router.pathname;
    return (
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
            {/* Inner Section */}
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-pink-200/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
                {
                    navData.map((link, index) => {
                        return (
                            <Link 
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}
                            >
                                {/* Tooltip */}
                                <div className='absolute hidden pr-14 right-0 xl:group-hover:flex'>
                                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                                    <div className='text-[12px] leading-none font-semibold capitalize'>
                                        {link.name}
                                    </div>
                                    {/* Tooltip Arrow */}
                                    <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                                </div>
                                </div>
                                {/* Icons */}
                                {link.icon}
                            </Link>
                        );
                    })
                }
            </div>
        </nav>
    );
};

export default Nav;