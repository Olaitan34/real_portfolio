
import React from 'react';
import Section from './Section';
import { DjangoIcon, PythonIcon, DrfIcon, RestApiIcon, N8nIcon, MakeIcon, GitIcon, DockerIcon, PostmanIcon, VscodeIcon, CopilotIcon, SqliteIcon, PostgresqlIcon, MysqlIcon } from './icons/SkillIcons';

interface Skill {
    name: string;
    icon: React.ReactNode;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const SkillCard: React.FC<Skill> = ({ name, icon }) => (
    <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-lg border border-transparent dark:border-gray-700/50
                    flex flex-col items-center justify-center text-center
                    transition-all duration-300 ease-in-out
                    hover:transform hover:-translate-y-2 hover:shadow-neon-sm hover:border-neon-purple">
        <div className="w-16 h-16 mb-4 text-neon-purple">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-light-text">{name}</h3>
    </div>
);

const Skills: React.FC = () => {
    const skillData: SkillCategory[] = [
        {
            title: "Backend Development",
            skills: [
                { name: "Django", icon: <DjangoIcon /> },
                { name: "Python", icon: <PythonIcon /> },
                { name: "Django REST Framework", icon: <DrfIcon /> },
                { name: "RESTful API Design", icon: <RestApiIcon /> },
            ]
        },
        {
            title: "AI Automation",
            skills: [
                { name: "N8n", icon: <N8nIcon /> },
                { name: "Make (Integromat)", icon: <MakeIcon /> },
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: <GitIcon /> },
                { name: "Docker", icon: <DockerIcon /> },
                { name: "Postman", icon: <PostmanIcon /> },
                { name: "VS Code", icon: <VscodeIcon /> },
                { name: "GitHub Copilot", icon: <CopilotIcon /> },
            ]
        },
        {
            title: "Database",
            skills: [
                { name: "SQLite", icon: <SqliteIcon /> },
                { name: "PostgreSQL", icon: <PostgresqlIcon /> },
                { name: "MySQL", icon: <MysqlIcon /> },
            ]
        }
    ];

    return (
        <Section id="skills" title="My Skills">
            <div className="space-y-12">
                {skillData.map(category => (
                    <div key={category.title}>
                        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-light-text">{category.title}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                            {category.skills.map(skill => (
                                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
