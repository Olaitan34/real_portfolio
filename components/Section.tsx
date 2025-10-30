
import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
    return (
        <section id={id} className="container mx-auto px-6 py-12 md:py-16 section-anim opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white relative inline-block left-1/2 -translate-x-1/2">
                {title}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-neon-purple rounded-full"></span>
            </h2>
            {children}
        </section>
    );
};

export default Section;
