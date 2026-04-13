import { useState } from 'react';
import {
  Home, Search, Compass, Film, MessageCircle,
  Heart, PlusSquare, Menu,
} from 'lucide-react';
import Avatar from '../UI/Avatar';
import { ME } from '../../data/posts';

const NAV = [
  { icon: Home, label: 'Início', active: true },
  { icon: Search, label: 'Pesquisar' },
  { icon: Compass, label: 'Explorar' },
  { icon: Film, label: 'Reels' },
  { icon: MessageCircle, label: 'Mensagens' },
  { icon: Heart, label: 'Notificações' },
  { icon: PlusSquare, label: 'Criar' },
];

export default function Sidebar() {
  const [active, setActive] = useState('Início');

  return (
    <nav
      style={{
        width: 244,
        minHeight: '100vh',
        borderRight: '1px solid #dbdbdb',
        backgroundColor: '#fff',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        padding: '8px 12px',
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <div style={{ padding: '25px 12px 16px' }}>
        <span
          style={{
            fontFamily: 'Billabong, cursive',
            fontSize: 28,
            letterSpacing: -0.5,
            color: '#000',
            display: 'block',
          }}
        >
          Instagram
        </span>
      </div>

      {/* Nav Items */}
      <div style={{ flex: 1 }}>
        {NAV.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              width: '100%',
              padding: '12px 12px',
              borderRadius: 8,
              border: 'none',
              background: active === label ? '#f0f0f0' : 'transparent',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 15,
              fontWeight: active === label ? 700 : 400,
              color: '#000',
              transition: 'background 0.15s',
              marginBottom: 4,
            }}
            onMouseEnter={(e) => {
              if (active !== label) e.currentTarget.style.background = '#f7f7f7';
            }}
            onMouseLeave={(e) => {
              if (active !== label) e.currentTarget.style.background = 'transparent';
            }}
          >
            <Icon size={24} strokeWidth={active === label ? 2.5 : 1.5} />
            <span>{label}</span>
          </button>
        ))}

        {/* Perfil */}
        <button
          onClick={() => setActive('Perfil')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            width: '100%',
            padding: '12px 12px',
            borderRadius: 8,
            border: 'none',
            background: active === 'Perfil' ? '#f0f0f0' : 'transparent',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 15,
            fontWeight: active === 'Perfil' ? 700 : 400,
            color: '#000',
            marginBottom: 4,
          }}
          onMouseEnter={(e) => {
            if (active !== 'Perfil') e.currentTarget.style.background = '#f7f7f7';
          }}
          onMouseLeave={(e) => {
            if (active !== 'Perfil') e.currentTarget.style.background = 'transparent';
          }}
        >
          <Avatar src={ME.avatar} size={24} />
          <span>Perfil</span>
        </button>
      </div>

      {/* Mais */}
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          width: '100%',
          padding: '12px 12px',
          borderRadius: 8,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 15,
          fontWeight: 400,
          color: '#000',
          marginBottom: 8,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#f7f7f7'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
      >
        <Menu size={24} strokeWidth={1.5} />
        <span>Mais</span>
      </button>
    </nav>
  );
}
