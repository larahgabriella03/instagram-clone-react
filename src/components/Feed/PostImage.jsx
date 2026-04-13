import { useState, useCallback, useRef } from 'react';
import { Heart } from 'lucide-react';

export default function PostImage({ src, onDoubleClick }) {
  const [showHeart, setShowHeart] = useState(false);
  const [heartKey, setHeartKey] = useState(0);
  const timerRef = useRef(null);

  const handleDoubleClick = useCallback(() => {
    setShowHeart(true);
    setHeartKey((k) => k + 1);
    onDoubleClick?.();
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowHeart(false), 900);
  }, [onDoubleClick]);

  return (
    <div
      style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden' }}
      onDoubleClick={handleDoubleClick}
    >
      <img
        src={src}
        alt="post"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        draggable={false}
      />
      {showHeart && (
        <div
          key={heartKey}
          className="heart-float"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        >
          <Heart size={90} fill="#fff" color="#fff" strokeWidth={1} />
        </div>
      )}
    </div>
  );
}
