export default function Avatar({ src, gradient, size = 32, hasStory = false, alt = '' }) {
  const inner = (
    <img
      src={src}
      alt={alt}
      style={{ width: size, height: size, objectFit: 'cover' }}
      className="rounded-full block"
    />
  );

  if (hasStory) {
    return (
      <div
        style={{
          background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
          padding: 2,
          borderRadius: '50%',
          display: 'inline-block',
        }}
      >
        <div
          style={{
            background: '#fff',
            padding: 2,
            borderRadius: '50%',
            display: 'block',
          }}
        >
          {inner}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'inline-block', borderRadius: '50%', overflow: 'hidden' }}>
      {inner}
    </div>
  );
}
