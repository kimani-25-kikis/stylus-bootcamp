import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Stylus X Arbitrum Bootcamp</h1>
        <p className="text-lg mb-6">Powered by CHAINWEB</p>
        <p className="max-w-2xl mx-auto mb-8">
          Join our 8-week bootcamp to master blockchain development with Arbitrum and Stylus. Explore tracks in web development, blockchain, Arbitrum, and Stylus programming.
        </p>
        <div className="space-x-4">
          <Link href="/curriculum" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            View Curriculum
          </Link>
          <a href="https://forms.gle/your-waitlist-form" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Join Waitlist
          </a>
          <a href="https://forms.gle/your-mentor-form" target="_blank" rel="noopener noreferrer" className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700">
            Apply as Mentor
          </a>
        </div>
      </section>
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Key Stats</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded">
            <h3 className="font-bold">Duration</h3>
            <p>8 weeks</p>
          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h3 className="font-bold">Goals</h3>
            <p>Build real-world Stylus projects</p>
          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h3 className="font-bold">Tracks</h3>
            <p>Web, Blockchain, Arbitrum, Stylus</p>
          </div>
        </div>
      </section>
    </div>
  );
}