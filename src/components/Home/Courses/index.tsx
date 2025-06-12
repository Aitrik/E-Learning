"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { courseData } from "@/app/api/data";

const Courses = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        return (
            <div className="flex items-center gap-1">
                {Array(fullStars).fill(null).map((_, i) => (
                    <Icon key={`full-${i}`} icon="tabler:star-filled" className="text-amber-400 text-lg drop-shadow-sm" />
                ))}
                {halfStars > 0 && <Icon icon="tabler:star-half-filled" className="text-amber-400 text-lg drop-shadow-sm" />}
                {Array(emptyStars).fill(null).map((_, i) => (
                    <Icon key={`empty-${i}`} icon="tabler:star-filled" className="text-gray-300 text-lg" />
                ))}
            </div>
        );
    };

    return (
        <section id="courses">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="sm:flex justify-between items-center mb-20">
                    <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">Popular courses.</h2>
                    <Link href={'/'} className="text-primary text-lg font-medium hover:tracking-widest duration-500">Explore courses&nbsp;&gt;&nbsp;</Link>
                </div>
                <Slider {...settings}>
                    {courseData.map((items, i) => (
                        <div key={i} className="px-3">
                            <div className='group relative bg-white mb-12 shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-gray-100'>
                                {/* Image Container with Gradient Overlay */}
                                <div className="relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                                    <Image 
                                        src={items.imgSrc}
                                        alt="course-image" 
                                        width={389} 
                                        height={262} 
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                                    />
                                    
                                    {/* Best Seller Badge */}
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full shadow-lg">
                                            <span className="text-xs font-bold uppercase tracking-wide">Best Seller</span>
                                        </div>
                                    </div>
                                    
                                    {/* Price Badge */}
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                ${items.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-6 space-y-4">
                                    {/* Course Title */}
                                    <div className="space-y-2">
                                        <Link href="#" className='text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-tight'>
                                            {items.heading}
                                        </Link>
                                        <p className='text-sm text-gray-600 font-medium'>{items.name}</p>
                                    </div>
                                    
                                    {/* Rating Section */}
                                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg font-bold text-gray-900">{items.rating}</span>
                                            {renderStars(items.rating)}
                                            <span className="text-sm text-gray-500 ml-1">({Math.floor(Math.random() * 500) + 100})</span>
                                        </div>
                                    </div>
                                    
                                    {/* Stats Section */}
                                    <div className="grid grid-cols-2 gap-4 pt-2">
                                        <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-xl">
                                            <div className="p-2 bg-blue-100 rounded-lg">
                                                <Icon
                                                    icon="solar:notebook-minimalistic-outline"
                                                    className="text-blue-600 text-lg"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Classes</p>
                                                <p className="text-sm font-bold text-gray-900">{items.classes}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl">
                                            <div className="p-2 bg-green-100 rounded-lg">
                                                <Icon
                                                    icon="solar:users-group-rounded-linear"
                                                    className="text-green-600 text-lg"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Students</p>
                                                <p className="text-sm font-bold text-gray-900">{items.students}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* CTA Button */}
                                    <div className="pt-4">
                                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                            <span className="flex items-center justify-center gap-2">
                                                Enroll Now
                                                <Icon icon="solar:arrow-right-linear" className="text-lg" />
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Courses;