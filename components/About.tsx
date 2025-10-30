
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
    return (
        <Section id="about" title="About Me">
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg text-gray-600 dark:text-dark-text mb-6 leading-relaxed">
                    I’m a passionate Backend Developer who loves building scalable and efficient APIs using Python and Django.
                    Beyond coding, I specialize in automating business processes with N8n, creating systems that save time, cut costs, and boost productivity.
                </p>
                <p className="text-lg text-gray-600 dark:text-dark-text mb-8 leading-relaxed">
                    Over the years, I’ve contributed to impactful projects like WasteWorth, ExamSense, and HRapple, taking on key backend roles to ensure seamless performance and data reliability. My goal is to keep building tools that make businesses smarter, faster, and more connected.
                </p>
                <a href="#projects"
                   className="inline-block bg-transparent border-2 border-neon-purple text-neon-purple font-semibold py-3 px-8 rounded-full text-lg
                              transition-all duration-300 ease-in-out
                              hover:bg-neon-purple hover:text-white hover:shadow-neon-sm hover:scale-105"
                >
                    View My Work
                </a>
            </div>
        </Section>
    );
};

export default About;
