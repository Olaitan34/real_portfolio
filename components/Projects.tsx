
import React from 'react';
import Section from './Section';
import { GithubIcon, ExternalLinkIcon } from './icons/SocialIcons';

interface Project {
    title: string;
    description: string;
    stack: string[];
    github: string;
    live?: string;
}

const projectsData: Project[] = [
    {
        title: "HRapple",
        description: "An HR management platform that helps companies manage employee data efficiently. Supports employee record creation, profile images, CV uploads, employment tracking, and authentication.",
        stack: ["Django"],
        github: "https://github.com/Olaitan34/HRapple",
    },
    {
        title: "WasteWorth",
        description: "A waste management platform connecting disposers and collectors to promote clean environments. Handled authentication and backend logic as a collaborator.",
        stack: ["Django"],
        github: "https://github.com/your-org/WasteWorth", // Placeholder as original link is not provided
        live: "https://wastewhat.vercel.app"
    },
    {
        title: "ExamSense",
        description: "A CBT testing platform for WAEC and JAMB candidates. Provides topic-based performance analysis and personalized study recommendations.",
        stack: ["Supabase", "Django", "React"],
        github: "https://github.com/ExamSense/ExamSense",
    },
    {
        title: "Real Estate Business Automation",
        description: "Built an n8n workflow that summarizes emails, saves info to Google Sheets, and sends Slack updates. Includes a Slack bot for querying email summaries. Reduced manual email sorting by 70%.",
        stack: ["n8n", "Slack API", "Gmail API", "Google Sheets API", "JavaScript"],
        github: "https://github.com/Olaitan34/slack-and-mail",
    },
    {
        title: "Global Finance Data API",
        description: "Real-time API aggregating global country and currency data with caching and analytics.",
        stack: ["Python", "Flask/Django", "MySQL"],
        github: "https://github.com/Olaitan34/country-currency",
        live: "https://string-analyzer-api-1a4ue.sevalla.app"
    }
];

const ProjectCard: React.FC<Project> = ({ title, description, stack, github, live }) => {
    return (
        <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-lg flex flex-col
                        border border-transparent dark:border-gray-700/50
                        transition-all duration-300 ease-in-out
                        hover:transform hover:-translate-y-2 hover:shadow-neon-sm hover:border-neon-purple">
            <header className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
                <div className="flex items-center space-x-4">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-dark-text hover:text-neon-purple transition-colors duration-300">
                        <GithubIcon className="w-6 h-6" />
                    </a>
                    {live && (
                         <a href={live} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-dark-text hover:text-neon-purple transition-colors duration-300">
                            <ExternalLinkIcon className="w-6 h-6" />
                        </a>
                    )}
                </div>
            </header>
            <p className="text-gray-600 dark:text-dark-text mb-4 flex-grow">{description}</p>
            <footer className="flex flex-wrap gap-2">
                {stack.map(tech => (
                    <span key={tech} className="bg-gray-200 dark:bg-dark-surface text-gray-700 dark:text-dark-text text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                ))}
            </footer>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <Section id="projects" title="My Projects">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projectsData.map(project => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
