import './index.css';
import Sidebar from './components/Layout/Sidebar';
import RightPanel from './components/Layout/RightPanel';
import StoriesBar from './components/Stories/StoriesBar';
import PostCard from './components/Feed/PostCard';
import { POSTS, getArtist } from './data/posts';

export default function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      {/* Sidebar fixa */}
      <Sidebar />

      {/* Conteúdo principal (offset da sidebar) */}
      <div
        style={{
          marginLeft: 244,
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          gap: 0,
        }}
      >
        {/* Feed central */}
        <main
          style={{
            width: 470,
            flexShrink: 0,
            paddingTop: 24,
            paddingRight: 32,
          }}
        >
          <StoriesBar />
          {POSTS.map((post) => {
            const artist = getArtist(post.artistId);
            return <PostCard key={post.id} post={post} artist={artist} />;
          })}
        </main>

        {/* Painel direito */}
        <div style={{ paddingLeft: 32, flexShrink: 0 }}>
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
