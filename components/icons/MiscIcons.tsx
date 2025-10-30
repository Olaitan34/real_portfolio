
import React from 'react';

type IconProps = {
    className?: string;
};

export const CertificateIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
        <path d="M12 15l-4-4h8l-4 4z"></path>
        <path d="M9 10V8h6v2"></path>
    </svg>
);
