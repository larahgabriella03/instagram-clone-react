import { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

export default function PostActions({ liked, onLike, onSave, saved }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        gap: 16,
      }}
    >
      {/* Curtir */}
      <button
        onClick={onLike}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          transition: 'transform 0.1s',
        }}
        aria-label="Curtir"
      >
        <Heart
          size={24}
          fill={liked ? '#ed4956' : 'none'}
          color={liked ? '#ed4956' : '#262626'}
          strokeWidth={1.5}
          className={liked ? 'heart-pop' : ''}
        />
      </button>

      {/* Comentar */}
      <button
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}
        aria-label="Comentar"
      >
        <MessageCircle size={24} strokeWidth={1.5} color="#262626" />
      </button>

      {/* Compartilhar */}
      <button
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}
        aria-label="Compartilhar"
      >
        <Send size={24} strokeWidth={1.5} color="#262626" />
      </button>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Salvar */}
      <button
        onClick={onSave}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}
        aria-label="Salvar"
      >
        <Bookmark
          size={24}
          strokeWidth={1.5}
          fill={saved ? '#262626' : 'none'}
          color="#262626"
        />
      </button>
    </div>
  );
}
