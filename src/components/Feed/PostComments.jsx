import { useState } from 'react';
import { Smile } from 'lucide-react';

export default function PostComments({ artist, caption, comments, totalComments, timestamp }) {
  const [commentText, setCommentText] = useState('');

  return (
    <div style={{ padding: '0 16px 16px' }}>
      {/* Caption */}
      <p style={{ margin: '4px 0 8px', fontSize: 14, lineHeight: '18px', color: '#262626' }}>
        <span style={{ fontWeight: 600, marginRight: 6 }}>{artist.username}</span>
        {caption}
      </p>

      {/* Ver todos comentários */}
      {totalComments > 0 && (
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#737373',
            fontSize: 14,
            cursor: 'pointer',
            padding: 0,
            fontFamily: 'inherit',
            marginBottom: 8,
            display: 'block',
          }}
        >
          Ver todos {totalComments.toLocaleString('pt-BR')} comentários
        </button>
      )}

      {/* Comentários */}
      {comments.slice(0, 2).map((c) => (
        <div key={c.id} style={{ marginBottom: 4, fontSize: 14, lineHeight: '18px', color: '#262626' }}>
          <span style={{ fontWeight: 600, marginRight: 6 }}>{c.username}</span>
          {c.text}
        </div>
      ))}

      {/* Timestamp */}
      <p style={{ color: '#c7c7c7', fontSize: 10, letterSpacing: '0.2px', marginTop: 8, marginBottom: 10 }}>
        {timestamp.toUpperCase()}
      </p>

      {/* Input comentário */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          borderTop: '1px solid #efefef',
          paddingTop: 12,
          gap: 12,
        }}
      >
        <Smile size={20} color="#262626" strokeWidth={1.5} style={{ flexShrink: 0 }} />
        <input
          type="text"
          placeholder="Adicionar um comentário..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: 14,
            fontFamily: 'inherit',
            color: '#262626',
            background: 'transparent',
          }}
        />
        {commentText.trim() && (
          <button
            onClick={() => setCommentText('')}
            style={{
              background: 'none',
              border: 'none',
              color: '#0095f6',
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
              padding: 0,
              fontFamily: 'inherit',
            }}
          >
            Publicar
          </button>
        )}
      </div>
    </div>
  );
}
