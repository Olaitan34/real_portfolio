import React from 'react';
import Section from './Section';

interface Certificate {
    title: string;
    imageUrl: string;
}

const CertificateCard: React.FC<Certificate> = ({ title, imageUrl }) => (
    <div
        className="group bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden
                   border border-transparent dark:border-gray-700/50
                   transition-all duration-300 ease-in-out
                   hover:transform hover:-translate-y-2 hover:shadow-neon-sm hover:border-neon-purple"
    >
        <div className="h-56 bg-gray-100 dark:bg-dark-surface flex items-center justify-center overflow-hidden">
            <img 
                src={imageUrl} 
                alt={`Certificate for ${title}`} 
                className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
            />
        </div>
        <div className="p-4 text-center">
            <h3 className="text-md font-semibold text-gray-800 dark:text-light-text group-hover:text-neon-purple transition-colors">
                {title}
            </h3>
        </div>
    </div>
);


const Certificates: React.FC = () => {
    const certs: Certificate[] = [
        { 
            title: "ALX Software Engineering", 
            imageUrl: "https://i.postimg.cc/9fkJxDZv/Screenshot-2025-10-30-145450.png"
        },
        { 
            title: "GitHub Copilot",
            imageUrl: "https://i.postimg.cc/QMz06F12/Screenshot-2025-10-30-145241.png"
        },
        { 
            title: "Web Scraping", 
            imageUrl: "https://i.postimg.cc/vmK3P4f0/Screenshot-2025-10-30-145354.png"
        },
        { 
            title: "Project Management Professional", 
            imageUrl: "https://i.postimg.cc/JhFPTsZP/Screenshot-2025-10-30-145424.png"
        },
        { 
            title: "Python Basics", 
            imageUrl: "https://i.postimg.cc/sXZKb3JR/Screenshot-2025-10-30-145509.png"
        },
        {
            title: "InternPulse Internship",
            imageUrl: "https://i.postimg.cc/YCcD7GsR/Olaitan-Fatoki-Intern-Pulse-Finalist-Certificate-1.png"
        }
    ];

    return (
        <Section id="certificates" title="Certificates & Achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {certs.map(cert => (
                    <CertificateCard key={cert.title} {...cert} />
                ))}
            </div>
        </Section>
    );
};

export default Certificates;