import { useState } from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostActions from './PostActions';
import PostComments from './PostComments';
import { useLike } from '../../hooks/useLike';
import { formatLikes } from '../../data/posts';

export default function PostCard({ post, artist }) {
  const { liked, count, toggle } = useLike(post.likes);
  const [saved, setSaved] = useState(false);

  return (
    <article
      style={{
        backgroundColor: '#fff',
        border: '1px solid #dbdbdb',
        borderRadius: 4,
        marginBottom: 24,
        overflow: 'hidden',
      }}
    >
      <PostHeader artist={{ ...artist, location: post.location }} />
      <PostImage src={post.image} onDoubleClick={toggle} />
      <PostActions
        liked={liked}
        onLike={toggle}
        saved={saved}
        onSave={() => setSaved((s) => !s)}
      />

      {/* Curtidas */}
      <div style={{ padding: '0 16px 4px' }}>
        <span style={{ fontWeight: 600, fontSize: 14 }}>{formatLikes(count)} curtidas</span>
      </div>

      <PostComments
        artist={artist}
        caption={post.caption}
        comments={post.comments}
        totalComments={post.totalComments}
        timestamp={post.timestamp}
      />
    </article>
  );
}
