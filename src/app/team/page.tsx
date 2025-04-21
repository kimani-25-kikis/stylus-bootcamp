import TeamMember from '@/components/TeamMember';

const teamMembers = [
  { name: 'Kimani', bio: 'Blockchain expert with 5 years of experience.' },
  { name: 'Dennis', bio: 'Full-stack developer and Rust enthusiast.' },
  { name: 'Joseph', bio: 'Web3 educator and community organizer.' },
];

export default function Team() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Team</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} bio={member.bio} />
        ))}
      </div>
    </div>
  );
}