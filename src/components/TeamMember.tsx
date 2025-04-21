interface TeamMemberProps {
    name: string;
    bio: string;
  }
  
  export default function TeamMember({ name, bio }: TeamMemberProps) {
    return (
      <div className="bg-white shadow-md rounded p-4 text-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="mt-2">{bio}</p>
      </div>
    );
  }