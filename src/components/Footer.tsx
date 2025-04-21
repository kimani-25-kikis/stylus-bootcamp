export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 CHAINWEB. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://docs.arbitrum.io/stylus" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">Stylus Docs</a>
          <a href="https://github.com/OffchainLabs/stylus" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">GitHub</a>
          <a href="https://hackquest.io" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">HackQuest</a>
        </div>
      </footer>
    );
  }