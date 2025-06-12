"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TestimonialData } from "@/app/api/data";

const Testimonial = () => {
    const settings = {
        dots: true,
        dotsClass: "slick-dots custom-dots",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
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
                {Array(fullStars).fill(0).map((_, index) => (
                    <Icon 
                        key={`full-${index}`}
                        icon="material-symbols:star" 
                        className="text-yellow-400 text-lg"
                    />
                ))}
                {halfStars > 0 && (
                    <Icon 
                        icon="material-symbols:star-half" 
                        className="text-yellow-400 text-lg"
                    />
                )}
                {Array(emptyStars).fill(0).map((_, index) => (
                    <Icon 
                        key={`empty-${index}`}
                        icon="material-symbols:star-outline" 
                        className="text-gray-300 text-lg"
                    />
                ))}
            </div>
        );
    };

    return (
        <section id="testimonial" className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Testimonials Slider */}
                <div className="testimonial-slider">
                    <Slider {...settings}>
                        {TestimonialData.map((item, i) => (
                            <div key={i} className="px-3">
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 h-full border border-gray-200 relative group hover:scale-105">
                                    {/* Quote Icon */}
                                    <div className="absolute -top-4 left-8">
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                            <Icon 
                                                icon="material-symbols:format-quote" 
                                                className="text-white text-lg"
                                            />
                                        </div>
                                    </div>

                                    {/* Profile Image */}
                                    <div className="flex justify-center mb-6">
                                        <div className="relative">
                                            <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300">
                                                <Image
                                                    src={item.imgSrc}
                                                    alt={item.name}
                                                    width={80}
                                                    height={80}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
                                                <Icon 
                                                    icon="material-symbols:check" 
                                                    className="text-white text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Comment */}
                                    <div className="mb-6">
                                        <p className="text-gray-700 text-lg leading-relaxed italic">
                                            "{item.comment}"
                                        </p>
                                    </div>

                                    {/* User Info */}
                                    <div className="text-center mb-4">
                                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                                            {item.name}
                                        </h4>
                                        <p className="text-gray-500 font-medium">
                                            {item.profession}
                                        </p>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex justify-center items-center gap-2">
                                        {renderStars(item.rating)}
                                        <span className="text-gray-600 font-semibold ml-2">
                                            {item.rating.toFixed(1)}
                                        </span>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                        <Icon 
                                            icon="material-symbols:star" 
                                            className="text-6xl text-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-6">
                        Join thousands of satisfied customers who trust us with their needs.
                    </p>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Get Started Today
                    </button>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx global>{`
                .testimonial-slider .custom-dots {
                    bottom: -50px;
                }
                
                .testimonial-slider .custom-dots li button:before {
                    font-size: 12px;
                    color: #cbd5e1;
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                
                .testimonial-slider .custom-dots li.slick-active button:before {
                    color: #3b82f6;
                    transform: scale(1.2);
                }
                
                .testimonial-slider .custom-dots li button:hover:before {
                    color: #6366f1;
                }
                
                .testimonial-slider .slick-slide {
                    padding: 0 8px;
                }
                
                .testimonial-slider .slick-list {
                    margin: 0 -8px;
                }
                
                /* Smooth scrolling for mobile */
                @media (max-width: 768px) {
                    .testimonial-slider .slick-track {
                        display: flex;
                        align-items: stretch;
                    }
                    
                    .testimonial-slider .slick-slide {
                        height: auto;
                    }
                    
                    .testimonial-slider .slick-slide > div {
                        height: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonial;