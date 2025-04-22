'use client';

import CountdownTimer from '@/components/CountdownTimer';

export default function Hackathon() {
  const targetDate = new Date('2025-06-15T00:00:00'); // Adjust to actual date

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-8">Code Africa Conference 2.0 Hackathon</h1>
      <p className="max-w-2xl mx-auto mb-6">
        Showcase your Stylus projects at the upcoming hackathon. Join us to compete and innovate!
      </p>
      <CountdownTimer targetDate={targetDate} />
      <a
      href="https://forms.gle/actual-rsvp-form"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mt-6 inline-block"
    >
      RSVP Now
    </a>
    </div>
  );
}