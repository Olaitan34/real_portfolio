
import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <footer className="bg-white dark:bg-dark-surface py-6 mt-16 text-center text-gray-600 dark:text-dark-text border-t border-gray-200 dark:border-gray-700/50">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Fatoki Olaitan. All Rights Reserved.</p>
            </div>

            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-neon-purple text-white p-3 rounded-full shadow-lg
                               hover:bg-purple-600 hover:scale-110 transition-all duration-300 z-50"
                    aria-label="Scroll to top"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}
        </footer>
    );
};

export default Footer;
