import "../styles/ProfileCard.css";

interface ProfileCardProps {

  avatarUrl: string;
}

export default function ProfileCard({
  avatarUrl,
}: ProfileCardProps) {
  return (
    <div className="profile-card">
      <div className="card-glow"></div>

      <img src={avatarUrl}  className="profile-avatar" />

    </div>
  );
}