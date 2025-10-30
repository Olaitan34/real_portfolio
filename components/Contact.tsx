
import React from 'react';
import Section from './Section';
import { MailIcon, LinkedinIcon, GithubIcon } from './icons/SocialIcons';

const Contact: React.FC = () => {
    return (
        <Section id="contact" title="Get in Touch">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="space-y-6">
                    <p className="text-lg text-center lg:text-left text-gray-600 dark:text-dark-text">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out.
                    </p>
                    <div className="space-y-4">
                        <a href="mailto:emmfatsneh@gmail.com" className="flex items-center space-x-4 group">
                            <MailIcon className="w-8 h-8 text-neon-purple" />
                            <span className="text-lg text-gray-700 dark:text-light-text group-hover:text-neon-purple transition-colors">emmfatsneh@gmail.com</span>
                        </a>
                        <a href="https://linkedin.com/in/fatoki-olaitan-91a04316a" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                            <LinkedinIcon className="w-8 h-8 text-neon-purple" />
                            <span className="text-lg text-gray-700 dark:text-light-text group-hover:text-neon-purple transition-colors">Fatoki Olaitan</span>
                        </a>
                         <a href="https://github.com/Olaitan34" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                            <GithubIcon className="w-8 h-8 text-neon-purple" />
                            <span className="text-lg text-gray-700 dark:text-light-text group-hover:text-neon-purple transition-colors">Olaitan34</span>
                        </a>
                    </div>
                </div>

                <form 
                    action="https://formspree.io/f/your_form_id" // Replace with your Formspree ID for a working form
                    method="POST" 
                    className="space-y-6 bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg border border-transparent dark:border-gray-700/50"
                >
                    <input type="hidden" name="_subject" value="New message from portfolio!" />
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-2">Name</label>
                        <input type="text" name="name" id="name" required className="w-full bg-gray-100 dark:bg-dark-surface border-gray-300 dark:border-gray-600 rounded-md p-3 focus:ring-neon-purple focus:border-neon-purple transition" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-2">Email</label>
                        <input type="email" name="email" id="email" required className="w-full bg-gray-100 dark:bg-dark-surface border-gray-300 dark:border-gray-600 rounded-md p-3 focus:ring-neon-purple focus:border-neon-purple transition" />
                    </div>
                     <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-2">Subject</label>
                        <input type="text" name="subject" id="subject" required className="w-full bg-gray-100 dark:bg-dark-surface border-gray-300 dark:border-gray-600 rounded-md p-3 focus:ring-neon-purple focus:border-neon-purple transition" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-dark-text mb-2">Message</label>
                        <textarea name="message" id="message" rows={4} required className="w-full bg-gray-100 dark:bg-dark-surface border-gray-300 dark:border-gray-600 rounded-md p-3 focus:ring-neon-purple focus:border-neon-purple transition"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-neon-purple text-white font-semibold py-3 px-6 rounded-md text-lg transition-all duration-300 hover:bg-purple-600 hover:shadow-neon">
                        Send Message
                    </button>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
