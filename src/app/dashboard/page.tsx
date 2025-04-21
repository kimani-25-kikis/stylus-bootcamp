import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Participant Dashboard</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
        <p>Completed 2/10 modules. Keep going!</p>
        <Link href="/curriculum" className="text-blue-600 hover:underline">
          Continue Learning
        </Link>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <p>Register for the Code Africa Conference 2.0 Hackathon.</p>
        <a href="https://forms.gle/your-event-form" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Register Now
        </a>
      </section>
    </div>
  );
}