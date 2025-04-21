'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          CHAINWEB
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/curriculum" className="hover:underline">Curriculum</Link></li>
          <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
          <li><Link href="/hackathon" className="hover:underline">Hackathon</Link></li>
          <li><Link href="/team" className="hover:underline">Team</Link></li>
        </ul>
      </div>
    </nav>
  );
}