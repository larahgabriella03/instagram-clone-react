import { useState } from 'react';
import Avatar from '../UI/Avatar';
import { ME, ARTISTS } from '../../data/posts';

export default function RightPanel() {
  const [followed, setFollowed] = useState({});

  const toggleFollow = (id) =>
    setFollowed((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <aside style={{ width: 320, paddingTop: 24 }}>
      {/* Mini perfil do usuário logado */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
        <Avatar src={ME.avatar} size={44} />
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, fontWeight: 600, fontSize: 14 }}>{ME.username}</p>
          <p style={{ margin: 0, color: '#737373', fontSize: 14 }}>{ME.displayName}</p>
        </div>
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#0095f6',
            fontWeight: 700,
            fontSize: 13,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          Mudar
        </button>
      </div>

      {/* Sugestões */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ color: '#737373', fontWeight: 600, fontSize: 13 }}>Sugestões para você</span>
        <button
          style={{ background: 'none', border: 'none', fontWeight: 700, fontSize: 12, cursor: 'pointer', color: '#000' }}
        >
          Ver tudo
        </button>
      </div>

      {ARTISTS.map((artist) => (
        <div
          key={artist.id}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}
        >
          <Avatar src={artist.avatar} size={32} hasStory />
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', gap: 4 }}>
              {artist.username}
              {artist.verified && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#0095f6">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              )}
            </p>
            <p style={{ margin: 0, color: '#737373', fontSize: 12 }}>
              {artist.followers} seguidores
            </p>
          </div>
          <button
            onClick={() => toggleFollow(artist.id)}
            style={{
              background: 'none',
              border: 'none',
              color: followed[artist.id] ? '#737373' : '#0095f6',
              fontWeight: 700,
              fontSize: 13,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            {followed[artist.id] ? 'Seguindo' : 'Seguir'}
          </button>
        </div>
      ))}

      {/* Footer links */}
      <div style={{ marginTop: 24 }}>
        {['Sobre', 'Ajuda', 'Imprensa', 'API', 'Carreiras', 'Privacidade', 'Termos', 'Locais', 'Idioma'].map((l) => (
          <a
            key={l}
            href="#"
            style={{
              color: '#c7c7c7',
              fontSize: 11,
              textDecoration: 'none',
              marginRight: 6,
              lineHeight: '1.8',
            }}
          >
            {l}
          </a>
        ))}
        <p style={{ color: '#c7c7c7', fontSize: 11, marginTop: 12 }}>© 2024 INSTAGRAM FROM META</p>
      </div>
    </aside>
  );
}
