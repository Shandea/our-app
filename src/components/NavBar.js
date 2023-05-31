import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function NavBar() {
 

  return (
      <nav className="fixed top-0 right-0 p-4 bg-white w-full">
        <div className="ml-auto flex items-center">
          <Link href="/"className="text-gray-700 px-4 py-2" text="Home">Home</Link> 
          <Link href="/about" className="text-gray-700 px-4 py-2" text="About">About</Link>
          <Link href="/skills" className="text-gray-700 px-4 py-2" text="Skills">Skills</Link>
          <Link href="/projects" className="text-gray-700 px-4 py-2" text="Projects">Projects</Link>
          <Link href="/contact" className="text-gray-700 px-4 py-2" text="Contact">Contact</Link>
        </div>
      </nav>
 
  )
};