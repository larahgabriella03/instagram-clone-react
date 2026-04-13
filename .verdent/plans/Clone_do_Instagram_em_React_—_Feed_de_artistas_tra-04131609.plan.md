
## Objetivo

Construir um clone do Instagram com React + Vite + Tailwind CSS, com foco em alta fidelidade visual à página principal do Instagram e um feed temático de artistas de trap fictícios inspirados no universo do Veigh.

---

## Personagens do Feed

| Artista | Handle | Vibe do post |
|---|---|---|
| **Lenzo** | @lenzo.off | Foto no estúdio com caption "gravando o projeto mais pesado da minha vida" |
| **Drako Preto** | @drakop | Foto no aeroporto, cap preta, mala Louis Vuitton, caption "sempre em movimento" |
| **Yuri Maze** | @yurimaze | Vídeo com thumbnail de carro rebaixado com caption "meu novo brinquedo 🤫" |
| **Celo Noir** | @celonoir | Foto de estúdio noturno, caption: "às 3 da manhã quando a vibe bate diferente" |
| **Mxlk** | @mxlk | Foto com fã no show, caption "amor com os meus é real" |

---

## Arquitetura

```
src/
├── components/
│   ├── Layout/
│   │   ├── Sidebar.jsx          # sidebar esquerda (logo, nav, perfil)
│   │   └── RightPanel.jsx       # sugestões de seguidores
│   ├── Stories/
│   │   └── StoriesBar.jsx       # barra de stories no topo
│   ├── Feed/
│   │   ├── PostCard.jsx         # card completo de post
│   │   ├── PostHeader.jsx       # avatar + nome + seguir
│   │   ├── PostImage.jsx        # imagem (com placeholder artístico)
│   │   ├── PostActions.jsx      # curtir, comentar, compartilhar, salvar
│   │   ├── PostLikes.jsx        # contagem de curtidas
│   │   └── PostComments.jsx     # comentários + input
│   └── UI/
│       ├── Avatar.jsx
│       └── Icon.jsx
├── data/
│   └── posts.js                 # dados estáticos dos posts e artistas
├── hooks/
│   └── useLike.js               # estado local de curtidas
├── App.jsx
├── main.jsx
└── index.css
```

---

## Stack

- **Vite** + **React 18** — setup rápido
- **Tailwind CSS v3** — estilização fiel ao Instagram (fonte, cores, espaçamentos)
- **Lucide React** — ícones (coração, comentário, avião, bookmark, home, etc.)
- **Imagens**: `picsum.photos` com seeds fixas para consistência + gradientes CSS como avatares artísticos

---

## Etapas de Implementação

### 1. Setup do projeto
- `npm create vite@latest . -- --template react`
- Instalar `tailwindcss`, `lucide-react`
- Configurar `tailwind.config.js` e `index.css`

### 2. Dados estáticos (`src/data/posts.js`)
- Array com os 5 artistas: id, username, displayName, avatar (seed), posts com imagem, caption, likes, comentários, timestamp

### 3. Componentes de UI base
- `Avatar.jsx` — círculo com gradiente estilo stories do Instagram
- `Icon.jsx` — wrapper de ícones Lucide

### 4. Sidebar
- Logo Instagram (SVG ou texto cursivo)
- Itens de navegação: Home, Buscar, Explorar, Reels, Mensagens, Notificações, Criar, Perfil
- Perfil do usuário logado no rodapé

### 5. StoriesBar
- Scroll horizontal com stories dos artistas + "Seu story"
- Anel gradiente rosa-laranja ao redor dos avatares

### 6. PostCard (componente central)
- `PostHeader` — avatar, nome, "• Seguir", "•••"
- `PostImage` — imagem full-width com double-click like (coração animado)
- `PostActions` — ícones de ação (like toggle com fill vermelho, comentário, compartilhar, bookmark)
- `PostLikes` — "X curtidas"
- Caption com nome em negrito
- `PostComments` — 2 comentários de outros artistas + "Ver todos X comentários"
- Timestamp relativo ("há 2 horas")
- Input "Adicionar um comentário..." com botão "Publicar"

### 7. RightPanel
- Mini-perfil do usuário logado
- "Sugestões para você" com os demais artistas e botão "Seguir"
- Footer links (estilo Instagram cinza)

### 8. Hook `useLike`
- Estado local: `liked` (boolean) + `count` (number)
- Toggle com animação de escala no ícone

### 9. Layout geral
- Grid de 3 colunas: sidebar fixa (240px) | feed central (470px) | painel direito (320px)
- Fundo branco, bordas `#dbdbdb`, fonte `system-ui` / `-apple-system`
- Responsivo: sidebar vira ícones em telas menores

---

## Fidelidade Visual ao Instagram

| Elemento | Valor |
|---|---|
| Fundo | `#ffffff` |
| Bordas | `#dbdbdb` |
| Texto primário | `#000000` |
| Texto secundário | `#737373` |
| Azul links | `#00376b` |
| Coração ativo | `#ed4956` |
| Fonte | `-apple-system, BlinkMacSystemFont, 'Segoe UI'` |
| Raio das imagens | 0 (posts quadrados sem borda) |
| Raio dos avatares | `9999px` |

---

## Verificação / Definition of Done

- [ ] Layout de 3 colunas visualmente idêntico ao Instagram desktop
- [ ] 5 posts dos artistas aparecem no feed com imagem, caption e comentários
- [ ] Stories bar scrollável com anel gradiente
- [ ] Like toggle funcional com mudança de cor e contagem
- [ ] Sem erros de console; lint passa
