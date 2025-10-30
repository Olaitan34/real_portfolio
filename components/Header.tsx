
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const SunIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void }> = ({ href, children, onClick }) => (
    <li>
        <a 
            href={href} 
            onClick={onClick}
            className="text-lg md:text-base font-medium text-dark-text hover:text-neon-purple dark:text-light-text dark:hover:text-neon-purple transition-colors duration-300 relative group"
        >
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300"></span>
        </a>
    </li>
);

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, isMenuOpen, setIsMenuOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Certificates", "Contact"];

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white">
                    Fatoki <span className="text-neon-purple">Olaitan</span>
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {navLinks.map(link => (
                            <NavLink key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>{link}</NavLink>
                        ))}
                    </ul>
                    <button onClick={toggleDarkMode} className="p-2 rounded-full text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-surface transition-colors duration-300">
                        {isDarkMode ? <SunIcon /> : <MoonIcon />}
                    </button>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleDarkMode} className="p-2 mr-2 rounded-full text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-surface transition-colors duration-300">
                        {isDarkMode ? <SunIcon /> : <MoonIcon />}
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 dark:text-white z-50">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/90 dark:bg-dark-bg/95 backdrop-blur-lg flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                <ul className="flex flex-col space-y-8 text-center">
                    {navLinks.map(link => (
                        <NavLink key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>{link}</NavLink>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
