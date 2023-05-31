import React from 'react';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-4 bg-graygit -200">
      <div className="flex space-x-4">
        <SocialLink href="https://github.com/Shandea" icon={<FiGithub />} />
        <SocialLink href="mailto:shardin86@gmail.com" icon={<FiMail />} />
        <SocialLink href="https://www.linkedin.com/in/shandea-hardin-bab04510a/" icon={<FiLinkedin />} />
      </div>
    </footer>
  );
}

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-800"
  >
    {icon}
  </a>
);