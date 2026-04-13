import Avatar from '../UI/Avatar';

export default function PostHeader({ artist }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '14px 16px',
        gap: 12,
      }}
    >
      <Avatar src={artist.avatar} size={32} hasStory />
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontWeight: 600, fontSize: 14 }}>{artist.username}</span>
          {artist.verified && (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#0095f6">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          )}
          <span style={{ color: '#737373', fontSize: 14 }}>•</span>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: '#0095f6',
              fontWeight: 600,
              fontSize: 14,
              cursor: 'pointer',
              padding: 0,
              fontFamily: 'inherit',
            }}
          >
            Seguir
          </button>
        </div>
        {artist.location && (
          <span style={{ fontSize: 12, color: '#737373' }}>{artist.location}</span>
        )}
      </div>
      <button
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0 4px',
          fontSize: 18,
          color: '#262626',
          lineHeight: 1,
        }}
      >
        ···
      </button>
    </div>
  );
}
