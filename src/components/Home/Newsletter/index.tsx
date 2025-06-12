import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const Newsletter = () => {
    

    return (
        <section className="relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-10 w-20 h-20 bg-white/10 rounded-full blur-lg animate-bounce delay-500"></div>
                <div className="absolute top-1/4 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 py-20 lg:py-32">
                <div className="max-w-4xl mx-auto">
                    <div className='bg-newsletter-bg-2  bg-contain bg-no-repeat bg-center rounded-3xl p-8 lg:p-16 backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl'>
                        
                        <div className="text-center">
                            {/* Header */}
                            <div className="mb-12">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                                    <Icon icon="material-symbols:mail-outline" className="text-white text-3xl" />
                                </div>
                                <h3 className="text-5xl lg:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                    Newsletter
                                </h3>
                                <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                                    Stay updated with our latest news, exclusive discounts, and special promotions delivered straight to your inbox.
                                </p>
                            </div>

                            {/* Newsletter Form */}
                            <div className="max-w-2xl mx-auto">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                    <div className="relative flex items-center bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-2xl">
                                        <div className="flex-1 relative">
                                            <Icon 
                                                icon="material-symbols:mail-outline" 
                                                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl pointer-events-none" 
                                            />
                                            <input
                                                type="email"
                                                className="w-full py-4 lg:py-5 pl-16 pr-4 text-gray-800 text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-transparent placeholder-gray-500"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                                        >
                                            <Icon icon="material-symbols:send" className="text-white text-2xl group-hover/btn:translate-x-1 transition-transform duration-200" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center group">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors duration-300">
                                        <Icon icon="material-symbols:discount-outline" className="text-white text-xl" />
                                    </div>
                                    <h4 className="text-white font-semibold mb-2">Exclusive Discounts</h4>
                                    <p className="text-white/70 text-sm">Get access to subscriber-only discounts and deals</p>
                                </div>
                                <div className="text-center group">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors duration-300">
                                        <Icon icon="material-symbols:notifications-outline" className="text-white text-xl" />
                                    </div>
                                    <h4 className="text-white font-semibold mb-2">Latest Updates</h4>
                                    <p className="text-white/70 text-sm">Be the first to know about new features and products</p>
                                </div>
                                <div className="text-center group">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors duration-300">
                                        <Icon icon="material-symbols:star-outline" className="text-white text-xl" />
                                    </div>
                                    <h4 className="text-white font-semibold mb-2">Premium Content</h4>
                                    <p className="text-white/70 text-sm">Receive curated content and insider tips</p>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-12 text-center">
                                <p className="text-white/60 text-sm mb-4">Join 10,000+ satisfied subscribers</p>
                                <div className="flex items-center justify-center gap-4 text-white/40">
                                    <div className="flex items-center gap-1">
                                        <Icon icon="material-symbols:shield-outline" className="text-lg" />
                                        <span className="text-xs">No spam</span>
                                    </div>
                                    <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                                    <div className="flex items-center gap-1">
                                        <Icon icon="material-symbols:lock-outline" className="text-lg" />
                                        <span className="text-xs">Secure</span>
                                    </div>
                                    <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                                    <div className="flex items-center gap-1">
                                        <Icon icon="material-symbols:unsubscribe-outline" className="text-lg" />
                                        <span className="text-xs">Unsubscribe anytime</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;