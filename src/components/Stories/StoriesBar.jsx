import { Plus } from 'lucide-react';
import Avatar from '../UI/Avatar';
import { ME, ARTISTS } from '../../data/posts';

const stories = [{ ...ME, label: 'Seu story', isMe: true }, ...ARTISTS.map((a) => ({ ...a, label: a.username }))];

export default function StoriesBar() {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #dbdbdb',
        borderRadius: 4,
        padding: '16px 16px',
        marginBottom: 24,
      }}
    >
      <div className="stories-scroll" style={{ display: 'flex', gap: 20, paddingBottom: 4 }}>
        {stories.map((s) => (
          <button
            key={s.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              minWidth: 60,
            }}
          >
            {s.isMe ? (
              <div style={{ position: 'relative' }}>
                <Avatar src={s.avatar} size={56} />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 20,
                    height: 20,
                    background: '#0095f6',
                    borderRadius: '50%',
                    border: '2px solid #fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Plus size={12} color="#fff" strokeWidth={3} />
                </div>
              </div>
            ) : (
              <Avatar src={s.avatar} size={56} hasStory />
            )}
            <span
              style={{
                fontSize: 12,
                color: '#262626',
                maxWidth: 64,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                textAlign: 'center',
              }}
            >
              {s.isMe ? 'Seu story' : s.username}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
