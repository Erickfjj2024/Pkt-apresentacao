# AGENTE_ROADMAP.md — Memória do Agente Autônomo

## Contexto do Produto
- **SaaS Corporativo (PKT Engenharia)**: Acabar com furos de estoque em obras.
- **UI/UX**: Corporativo — Branco, Slate-900, Blue-600.
- **Responsividade**: Mobile 1 coluna → Desktop 2 colunas.
- **Interações**: Swipe touch, Fullscreen API nativa, setas de teclado.
- **Foco de conteúdo**: Controle de estoque atual + escala centralizada Curitiba ↔ São Paulo.

## Estrutura do Projeto
```
Pkt-apresentacao/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/slides.js
    ├── hooks/
    │   ├── useNavigation.js
    │   └── useFullscreen.js
    └── components/
        ├── NavButtons.jsx
        ├── ProgressBar.jsx
        ├── MockupFrame.jsx
        └── SlidePlaceholder.jsx
```

## Fila de Execução do Agente

- [x] **AGENTE_ROADMAP.md** criado
- [x] **Passo 1 (Setup)**: `package.json`, configs Vite/Tailwind/PostCSS e `index.html`. ✅
- [x] **Passo 2 (Core App)**: `src/main.jsx`, `src/App.jsx`, `NavButtons`, `ProgressBar`, `MockupFrame`. ✅
- [x] **Passo 3 (Lógica)**: `useNavigation` (swipe+teclado) e `useFullscreen`. `slides.js` estruturado. ✅
- [ ] **Passo 4 (⛔ INTERVENÇÃO HUMANA)**: Aguardando 10 URLs das imagens do Diretor de Produto.
- [ ] **Passo 5 (Dados)**: Injetar URLs em `src/data/slides.js`.
- [ ] **Passo 6 (Renderização Visual)**: Construir layout final com `SlideLayout` responsivo.

## Estado das URLs (Passo 4)
| # | Slide | URL |
|---|---|---|
| 1 | Capa | *aguardando* |
| 2 | Caos | *aguardando* |
| 3 | App Home | *aguardando* |
| 4 | Produtos | *aguardando* |
| 5 | Histórico | *aguardando* |
| 6 | Segurança | *aguardando* |
| 7 | Dashboard | *aguardando* |
| 8 | Multi-obras | *aguardando* |
| 9 | ROI | *aguardando* |
| 10 | Lançamento | *aguardando* |

## Paleta de Design
| Token | Valor |
|---|---|
| Background | `white` / `slate-900` |
| Accent | `blue-600` |
| Texto | `slate-800` / `slate-100` |
| Fonte | Inter (Google Fonts) |
