export const ME = {
  id: 'me',
  username: 'voce.mesmo',
  displayName: 'Você',
  avatar: 'https://i.pravatar.cc/150?img=12',
  gradient: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
};

export const ARTISTS = [
  {
    id: 'lenzo',
    username: 'lenzo.off',
    displayName: 'Lenzo',
    avatar: 'https://i.pravatar.cc/150?img=3',
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
    bio: 'SP 🌙 | prod. by nobody | lançando em breve',
    followers: '847K',
    verified: true,
  },
  {
    id: 'drako',
    username: 'drakop',
    displayName: 'Drako Preto',
    avatar: 'https://i.pravatar.cc/150?img=8',
    gradient: 'linear-gradient(135deg, #0d0d0d, #1a1a1a, #2d2d2d)',
    bio: 'sempre em movimento ✈️ | SP/NY/Dubai',
    followers: '1.2M',
    verified: true,
  },
  {
    id: 'yuri',
    username: 'yurimaze',
    displayName: 'Yuri Maze',
    avatar: 'https://i.pravatar.cc/150?img=15',
    gradient: 'linear-gradient(135deg, #ff6b35, #f7c59f, #efefd0)',
    bio: 'velocidade e silêncio 🏎️ | beats & ruas',
    followers: '612K',
    verified: false,
  },
  {
    id: 'celo',
    username: 'celonoir',
    displayName: 'Celo Noir',
    avatar: 'https://i.pravatar.cc/150?img=5',
    gradient: 'linear-gradient(135deg, #2d1b69, #11998e, #38ef7d)',
    bio: 'noite eterna 🌑 | escuro por dentro, claro por fora',
    followers: '430K',
    verified: false,
  },
  {
    id: 'mxlk',
    username: 'mxlk',
    displayName: 'Mxlk',
    avatar: 'https://i.pravatar.cc/150?img=20',
    gradient: 'linear-gradient(135deg, #fc5c7d, #6a3093)',
    bio: 'pra favela que me fez 🙏 | amor é tudo',
    followers: '2.1M',
    verified: true,
  },
];

export const POSTS = [
  {
    id: 'post-lenzo-1',
    artistId: 'lenzo',
    image: 'https://picsum.photos/seed/studio42/600/600',
    caption: 'gravando o projeto mais pesado da minha vida. cada nota é um capítulo. em breve.',
    likes: 48312,
    timestamp: 'há 2 horas',
    location: 'Studio 23 — São Paulo',
    comments: [
      { username: 'drakop', text: 'a espera vale a pena irmão 🔥', id: 'c1' },
      { username: 'mxlk', text: 'já to precisando de ouça isso 🙏', id: 'c2' },
      { username: 'celonoir', text: 'o estúdio nunca mente', id: 'c3' },
    ],
    totalComments: 1847,
  },
  {
    id: 'post-drako-1',
    artistId: 'drako',
    image: 'https://picsum.photos/seed/airport99/600/600',
    caption: 'sempre em movimento. próxima parada só deus sabe. ✈️🖤',
    likes: 127904,
    timestamp: 'há 5 horas',
    location: 'GRU — Terminal Internacional',
    comments: [
      { username: 'lenzo.off', text: 'esse moviment não para 🌍', id: 'c4' },
      { username: 'yurimaze', text: 'me chama da próxima 😂', id: 'c5' },
    ],
    totalComments: 4231,
  },
  {
    id: 'post-yuri-1',
    artistId: 'yuri',
    image: 'https://picsum.photos/seed/car_lowrider/600/600',
    caption: 'meu novo brinquedo 🤫 não precisava mas merecia',
    likes: 73510,
    timestamp: 'há 8 horas',
    location: 'São Paulo, SP',
    comments: [
      { username: 'drakop', text: 'que máquina essa 🔥🔥', id: 'c6' },
      { username: 'mxlk', text: 'você é louco mano 😭', id: 'c7' },
      { username: 'lenzo.off', text: 'deixa eu dirigir pelo menos uma vez', id: 'c8' },
    ],
    totalComments: 2916,
  },
  {
    id: 'post-celo-1',
    artistId: 'celo',
    image: 'https://picsum.photos/seed/nightstudio77/600/600',
    caption: 'às 3 da manhã quando a vibe bate diferente. o silêncio tem som aqui dentro 🌑',
    likes: 31887,
    timestamp: 'há 14 horas',
    location: 'Noir Studio — Pinheiros',
    comments: [
      { username: 'yurimaze', text: 'os melhores flows saem de madrugada', id: 'c9' },
      { username: 'lenzo.off', text: 'irmão esse moodboard é cinematográfico', id: 'c10' },
    ],
    totalComments: 987,
  },
  {
    id: 'post-mxlk-1',
    artistId: 'mxlk',
    image: 'https://picsum.photos/seed/show_crowd88/600/600',
    caption: 'amor com os meus é real. obrigado por cada noite assim. vocês são minha força 🙏❤️',
    likes: 294760,
    timestamp: 'há 1 dia',
    location: 'Lollapalooza Brasil — São Paulo',
    comments: [
      { username: 'drakop', text: 'presença de palco absurda irmão', id: 'c11' },
      { username: 'celonoir', text: 'que noite essa foi cara 🙏🔥', id: 'c12' },
      { username: 'yurimaze', text: 'aprendo demais te vendo no palco', id: 'c13' },
    ],
    totalComments: 18304,
  },
];

export function getArtist(id) {
  return ARTISTS.find((a) => a.id === id);
}

export function formatLikes(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace('.0', '') + ' M';
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace('.0', '') + ' mil';
  return n.toString();
}
