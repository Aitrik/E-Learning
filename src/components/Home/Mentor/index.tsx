"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MentorData } from "@/app/api/data";

const Mentor = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 800,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" id="mentor">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
            </div>

            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative py-20'>
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                        <Icon icon="solar:users-group-rounded-bold" className="text-blue-400 text-xl" />
                        <span className="text-blue-400 font-medium">Expert Mentors</span>
                    </div>
                    <h2 className="text-white text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                        Meet Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expert</span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Mentors</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Learn from industry leaders who have transformed careers and built successful companies
                    </p>
                </div>

                <Slider {...settings}>
                    {MentorData.map((items, i) => (
                        <div key={i} className="px-3">
                            <div className='group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl'>
                                {/* Floating Elements */}
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-150"></div>

                                {/* Image Section */}
                                <div className="relative mb-6">
                                    <div className="relative inline-block">
                                        {/* Glowing Ring */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full p-1 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="bg-slate-900 rounded-full w-full h-full"></div>
                                        </div>
                                        
                                        {/* Profile Image */}
                                        <div className="relative z-10 p-2">
                                            <Image 
                                                src={items.imgSrc}
                                                alt="mentor-image" 
                                                width={306} 
                                                height={306} 
                                                className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-white/20 transition-transform duration-500 group-hover:scale-105" 
                                            />
                                        </div>

                                        {/* Social Icons */}
                                        <div className="absolute -bottom-2 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-200 hover:scale-110 cursor-pointer">
                                                <Icon icon="mdi:linkedin" className="text-white text-lg" />
                                            </div>
                                            <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-3 rounded-full shadow-lg hover:shadow-gray-500/25 transition-all duration-200 hover:scale-110 cursor-pointer">
                                                <Icon icon="mdi:twitter" className="text-white text-lg" />
                                            </div>
                                        </div>

                                        {/* Status Indicator */}
                                        <div className="absolute top-4 right-4 flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-green-500/30">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-green-400 text-xs font-medium">Available</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="space-y-4">
                                    <div>
                                        <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300'>
                                            {items.name}
                                        </h3>
                                        <p className='text-lg text-gray-300 font-medium'>
                                            {items.profession}
                                        </p>
                                    </div>

                                    {/* Stats Section */}
                                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10">
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-blue-400">{Math.floor(Math.random() * 50) + 20}</div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">Courses</div>
                                        </div>
                                        <div className="text-center border-x border-white/10">
                                            <div className="text-xl font-bold text-purple-400">{Math.floor(Math.random() * 5000) + 1000}+</div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">Students</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-pink-400">{(Math.random() * 2 + 3).toFixed(1)}</div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">Years Exp</div>
                                        </div>
                                    </div>

                                    {/* CTA Section */}
                                    <div className="pt-4 space-y-3">
                                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                                            <span className="flex items-center justify-center gap-2">
                                                Book Session
                                                <Icon icon="solar:calendar-add-linear" className="text-lg" />
                                            </span>
                                        </button>
                                        
                                        <div className="flex items-center justify-center gap-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <span className="flex items-center gap-1">
                                                <Icon icon="solar:star-bold" className="text-yellow-400" />
                                                4.9
                                            </span>
                                            <span>•</span>
                                            <span>Starting $50/hr</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }
            `}</style>
        </section>
    );
}

export default Mentor