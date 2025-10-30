import React, { useState, useEffect } from 'react';

const useTypingEffect = (phrases: string[], typeSpeed: number, deleteSpeed: number, delay: number) => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentPhrase = phrases[index];
            if (isDeleting) {
                setText(currentPhrase.substring(0, text.length - 1));
            } else {
                setText(currentPhrase.substring(0, text.length + 1));
            }

            if (!isDeleting && text === currentPhrase) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            }
        };

        const speed = isDeleting ? deleteSpeed : typeSpeed;
        const timeout = setTimeout(handleTyping, speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, phrases, typeSpeed, deleteSpeed, delay]);

    return text;
};


const Hero: React.FC = () => {
    const phrases = [
        "I build scalable backend systems with Python & Django.",
        "I automate business processes using N8n."
    ];
    const typedText = useTypingEffect(phrases, 100, 50, 1500);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center md:text-left relative overflow-hidden bg-white dark:bg-dark-bg py-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/10 via-transparent to-transparent z-0"></div>
            <div className="container mx-auto px-6 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-700 dark:text-dark-text mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Have you met Olaitan?</h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            {typedText}
                            <span className="inline-block w-1 h-10 md:h-14 bg-neon-purple ml-1 animate-pulse"></span>
                        </h1>
                        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                            <a href="https://docs.google.com/document/d/1L2nRLXZ58C7D7ou80CPeNnUARx8dB81OH0T_cEyx0Lc/export?format=pdf" download="Fatoki-Olaitan-CV.pdf"
                               className="inline-block bg-neon-purple text-white font-semibold py-3 px-8 rounded-full text-lg
                                          transition-all duration-300 ease-in-out
                                          hover:bg-purple-600 hover:shadow-neon hover:scale-105"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="absolute inset-0 bg-neon-purple rounded-full transform scale-105 blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
                            <img
                                src="https://media.licdn.com/dms/image/v2/D4D03AQFvP2ioVRWa0w/profile-displayphoto-crop_800_800/B4DZkW1Yg1H4AM-/0/1757024719520?e=1763596800&v=beta&t=YNGEB2vrYDt0Bly-BwnbZUC5ZDGfLOOBboZotQmGy2w"
                                alt="A professional headshot of Fatoki Olaitan Emmanuel."
                                className="relative w-full h-full rounded-full object-cover border-4 border-neon-purple/60 shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;