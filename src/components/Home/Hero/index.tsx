import Image from 'next/image';
import { Icon } from "@iconify/react";

const Hero = () => {
    return (
        <section id="home-section" className="relative bg-slateGray overflow-hidden py-20">
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#3b82f6]/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-150px] left-[-150px] w-[300px] h-[300px] bg-[#0ea5e9]/40 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] left-[50%] w-[200px] h-[200px] bg-white/30 rounded-full blur-[90px] -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 py-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="col-span-6 flex flex-col gap-8">
                        <div className="flex gap-2 mx-auto lg:mx-0">
                            <Icon
                                icon="solar:verified-check-bold"
                                className="text-success text-xl inline-block me-2"
                            />
                            <p className="text-success text-sm font-semibold text-center lg:text-start">
                                Unlock 30% Off – Join Today!
                            </p>
                        </div>
                        <h1 className="text-midnight_text text-4xl sm:text-5xl font-semibold">
                            Empower Your Engineering Journey
                        </h1>
                        <h3 className="text-black/70 text-lg">
                            Master industry-relevant skills with top-tier mentors and hands-on courses.
                        </h3>
                        <div className="relative rounded-full">
                            <input
                                type="text"
                                className="py-3 lg:py-6 pl-8 pr-20 text-lg w-full text-black rounded-full focus:outline-none shadow-lg border border-gray-200"
                                placeholder="Search engineering courses..."
                                autoComplete="off"
                            />
                            <button className="bg-primary p-2 md:p-5  rounded-full absolute right-2 top-2">
                                <Icon icon="solar:magnifer-linear" className="text-white text-2xl inline-block" />
                            </button>
                        </div>
                        <div className="flex items-center justify-between flex-wrap gap-4 pt-4">
                            <div className="flex gap-2 items-center">
                                <Image src={`/images/banner/check-circle.svg`} alt="check" width={30} height={30} />
                                <p className="text-sm sm:text-lg font-normal text-black">Self-paced</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={`/images/banner/check-circle.svg`} alt="check" width={30} height={30} />
                                <p className="text-sm sm:text-lg font-normal text-black">Expert-Led Tracks</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={`/images/banner/check-circle.svg`} alt="check" width={30} height={30} />
                                <p className="text-sm sm:text-lg font-normal text-black">Peer Community</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-6 flex justify-center relative z-10">
                        <Image
                            src="/images/banner/banner2.png"
                            alt="Hero Image"
                            width={1000}
                            height={700}
                            className="h-[500px] w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
