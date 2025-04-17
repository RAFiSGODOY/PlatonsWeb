import React, { useState, useEffect } from 'react';
import { Bike, Users, Calendar, MapPin, Camera, Menu, X, Mails } from 'lucide-react';

const PlatonsNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start', 
            });
        }
    };

    const menuItems = [
        { label: 'Sobre', icon: Users, href: 'sobre' },
        { label: 'Eventos', icon: Calendar, href: 'eventos' },
        { label: 'Equipe', icon: MapPin, href: 'equipe' },
        { label: 'Recordações', icon: Camera, href: 'recordacoes' },
        { label: 'Contato', icon: Mails, href: 'contato' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-black/20 backdrop-blur-sm py-2'
                    : 'bg-gradient-to-b from-black/80 to-transparent py-4'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 ">
                <div className="flex items-center justify-between">
                    <a href="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <img
                                src="/assets/images/sobre.png"
                                alt="Logo do Moto Clube Platons de Peabiru"
                                className="object-cover h-8 w-full rounded-xl"
                            />
                            <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="flex flex-col space-y-0">
                            <span className="text-xll font-bold font-jaini text-white tracking-widest">PLATON'S</span>
                            
                        </div>
                    </a>

                    <div className="hidden lg:flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href); 
                                }}
                                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all group relative"
                            >
                                <item.icon className="w-5 h-5 group-hover:rotate-[360deg] group-hover:text-yellow-300 transition-transform duration-700" />
                                <span className="font-jaini text-lg">{item.label}</span>
                        
                                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-botton scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
                <div
                    className={`lg:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                >
                    <div className="py-4 space-y-2">
                        {menuItems.map((item, index) => (
                            <div key={index} className="border-b last:border-none">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    className="w-full flex items-center justify-between py-3 text-gray-300 hover:text-white transition-colors group"
                                >
                                    <div className="flex items-center space-x-3 relative w-full">
                                        <item.icon className="w-5 h-5 group-hover:rotate-[360deg] transition-transform duration-700" />
                                        <span className="font-jaini text-lg">{item.label}</span>
                                        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-red-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                                    </div>
                                </a>
                                
                            </div>
                        ))}
                        <p className="mt-5 mb-5 font-jaini text-base text-center">&copy; Copyright  Platon´s Moto Clube 2024.</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default PlatonsNavbar;
