
import React from 'react';

// Helper component for image-based icons
const ImageSkillIcon: React.FC<{ src: string, alt: string }> = ({ src, alt }) => (
    <img src={src} alt={alt} className="w-full h-full object-contain" />
);

export const DjangoIcon: React.FC = () => (
    <ImageSkillIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP79YHukK0LZr3RUkOw3IjFYTuk-2whJsl5Q&s" alt="Django icon" />
);
export const PythonIcon: React.FC = () => (
    <ImageSkillIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png?20250701090410" alt="Python icon" />
);
export const DrfIcon: React.FC = () => (
    <ImageSkillIcon src="https://www.fullstackpython.com/img/logos/django-rest-framework.png" alt="Django REST Framework icon" />
);
export const RestApiIcon: React.FC = () => (
    <ImageSkillIcon src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png" alt="REST API icon" />
);
export const N8nIcon: React.FC = () => (
    <ImageSkillIcon src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png" alt="n8n icon" />
);
export const MakeIcon: React.FC = () => (
    <ImageSkillIcon src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/make-color.png" alt="Make.com icon" />
);
export const GitIcon: React.FC = () => (
    <ImageSkillIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiBwe7URF5iyjMW20qp4IvMNvys8-tGb_-A&s" alt="Git icon" />
);
export const DockerIcon: React.FC = () => (
    <ImageSkillIcon src="https://www.shutterstock.com/image-vector/docker-emblem-blue-whale-several-600nw-1856331931.jpg" alt="Docker icon" />
);
export const PostmanIcon: React.FC = () => (
    <ImageSkillIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwbzJZ69SSTLQe8ySIgIMMB68JLukoIkJfQ&s" alt="Postman icon" />
);
export const VscodeIcon: React.FC = () => (
    <ImageSkillIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png" alt="VS Code icon" />
);
export const CopilotIcon: React.FC = () => (
    <ImageSkillIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ171TqGq21JDajxZwUYBqX9m8zN7SZsMVew&s" alt="GitHub Copilot icon" />
);
export const SqliteIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M9 3H5v18h4v-6h4v6h4V3h-4v6H9V3z"/></svg>
);
export const PostgresqlIcon: React.FC = () => (
    <ImageSkillIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEH0dMGI75pE_GQCNSCxmqSFid9Zgfv8LDww&s" alt="PostgreSQL icon" />
);
export const MysqlIcon: React.FC = () => (
    <ImageSkillIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGT_pnMHJdps9fGjcDaFSqcfFxO2E7BQk4g&s" alt="MySQL icon" />
);