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
        └── MockupFrame.jsx
```

## Fila de Execução do Agente

- [x] **AGENTE_ROADMAP.md** criado
- [x] **Passo 1 (Setup)**: `package.json`, configs Vite/Tailwind/PostCSS e `index.html`. ✅
- [ ] **Passo 2 (Core App)**: `src/main.jsx` e `src/App.jsx` com Fullscreen API e botões nav.
- [ ] **Passo 3 (Lógica)**: Hooks `useNavigation` e `useFullscreen`.
- [ ] **Passo 4 (⛔ INTERVENÇÃO HUMANA)**: Pedir as 10 URLs das imagens.
- [ ] **Passo 5 (Dados)**: `src/data/slides.js` com array de 10 slides.
- [ ] **Passo 6 (Renderização Visual)**: Layout final com `MockupFrame` responsivo.

## Paleta de Design
| Token | Valor |
|---|---|
| Background | `white` / `slate-900` |
| Accent | `blue-600` |
| Texto | `slate-800` / `slate-100` |
| Fonte | Inter (Google Fonts) |
