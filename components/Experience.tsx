
import React from 'react';
import Section from './Section';

const ExperienceItem: React.FC<{ title: string, subtitle: string, duration?: string }> = ({ title, subtitle, duration }) => (
    <div className="relative pl-8 sm:pl-12 py-4 group">
        <div className="absolute top-5 left-0 w-4 h-4 bg-neon-purple rounded-full border-4 border-white dark:border-dark-bg 
                       transition-transform duration-300 group-hover:scale-125"></div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-light-text">{title}</h3>
        <p className="text-md text-gray-600 dark:text-dark-text">{subtitle}</p>
        {duration && <p className="text-sm text-neon-purple mt-1">{duration}</p>}
    </div>
);

const Experience: React.FC = () => {
    return (
        <Section id="experience" title="Experience">
            <div className="max-w-2xl mx-auto">
                <div className="relative border-l-2 border-gray-200 dark:border-gray-700">
                    <ExperienceItem title="Internpulse Internship" subtitle="Backend Developer" />
                    <ExperienceItem title="HNG Internship" subtitle="Participant" />
                    <ExperienceItem title="PIP4 Internship" subtitle="Participant (in view)" />
                    <ExperienceItem title="Real-World Projects" subtitle="1 Year of Experience" />
                    <ExperienceItem title="Federal University of Technology, Akure (FUTA)" subtitle="Studied Industrial Design" />
                </div>
            </div>
        </Section>
    );
};

export default Experience;
