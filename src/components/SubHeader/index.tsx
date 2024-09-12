import Image from "next/image";
import { MdFoodBank } from "react-icons/md";

const SubHeader = () => {
    return (
        <section className="max-w-screen-2xl mx-auto px-[22px] py-[13px] md:px-[84px] md:py-[26px] flex flex-col space-y-8 md:space-y-0">
            <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Text Content */}
                <div className="w-full hidden md:w-1/2 text-center md:text-left md:flex flex-col space-y-6 md:space-y-8 my-10">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight md:leading-normal">
                        Create <span className="text-[#FF2755]">Unique Menus</span> that Stand Out
                    </h1>
                    <p className="hidden md:flex text-base md:text-lg">
                        With eMenu's user-friendly platform, you can easily <br />
                        customize your menus to reflect your brand and captivate <br />
                        your customers.
                    </p>
                    {/* Icons List - Only visible on medium screens and above */}
                    <div className="hidden md:flex">
                        <ul className="flex flex-col space-y-4">
                            <li className="flex items-center space-x-2">
                                <MdFoodBank size={24} />
                                <p className="text-lg font-bold">Interactive Menu Design</p>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MdFoodBank size={24} />
                                <p className="text-lg font-bold">Customizable Menu Templates</p>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MdFoodBank size={24} />
                                <p className="text-lg font-bold">Seamless Menu Updates</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative w-full h-[200px] md:w-1/2 md:h-auto bg-blend-overlay md:bg-current bg-black md:bg-white">
                    <Image 
                        src="/images/sushi-header.jpg" 
                        alt="Sushi Pictures" 
                        fill={true} 
                        className="object-cover md:rounded-[30px] z-1 opacity-65 md:opacity-100"
                    />
                    <div>
                    <div className="flex md:hidden w-full my-8 mx-4 justify-center">
                        <div className="flex flex-col absolute space-y-2">
                            <h1 className="hidden sm:flex text-2xl font-semibold text-white leading-normal">
                                Create Unique Menus that Stand Out
                            </h1>
                            <p className="text-xl text-white font-semibold">
                            Customize your menus to reflect your brand and captivate
                            your customers.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubHeader;