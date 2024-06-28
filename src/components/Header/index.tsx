import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return ( 
        <section className="max-w-screen-2xl mx-auto px-[22px] py-[26px] md:px-[84px] md:py-[52px] flex flex-col-reverse lg:flex-col space-y-8">
            <div className="hidden lg:flex">
                <h1 className="text-[64px] font-bold">
                    Transform Dining <br/>
                    Experiences with Our <br/>
                    <span className="text-[#FF2755]">Interactive Digital Menus</span>
                </h1>
            </div>

            <div className="flex flex-row lg:flex-col space-y-8 space-x-4 justify-center items-center lg:justify-normal lg:items-start">
                <div className="flex w-1/2 lg:w-full">
                    <p className="text-[16px] md:text-[24px] font-medium">Discover a new way to engage with menus and elevate your dining experience</p>
                </div>

                <div className="flex w-1/2 justify-center items-center lg:justify-normal flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 text-sm md:text-base font-medium">
                    <button className="bg-[#FF2755] text-white px-4 py-2 rounded-[10px] w-full lg:w-auto">
                        <Link href='/discover'>Learn More</Link>
                    </button>
                    <button className="border-2 border-black px-4 py-2 w-full lg:w-auto">
                        <Link href='/'>Sign Up</Link>
                    </button>
                </div>
            </div>

            <div className="relative w-full h-44 lg:h-96 bg-blend-overlay md:bg-current bg-black lg:bg-white">
                <Image src='/images/header-banner.jpg' className="object-cover lg:rounded-[30px] z-1 opacity-65 lg:opacity-100" fill={true} alt="header banner" />
                <div className="flex lg:hidden w-full absolute top-0 left-0 text-start my-10 mx-5">
                    <h2 className="text-xl font-semibold text-white">
                    Transform Dining <br />
                    Experiences with Our <br />
                    Interactive Digital Menus
                    </h2>
                </div>
            </div>
        </section>
     );
}
 
export default Header;