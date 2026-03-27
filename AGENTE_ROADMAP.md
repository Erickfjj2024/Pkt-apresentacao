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

- [x] **AGENTE_ROADMAP.md** criado (este arquivo)
- [ ] **Passo 1 (Setup)**: Criar `package.json`, configs Vite/Tailwind/PostCSS e `index.html`. Commitar.
- [ ] **Passo 2 (Core App)**: Criar `src/main.jsx` e `src/App.jsx` com Fullscreen API e botões de navegação touch. Commitar.
- [ ] **Passo 3 (Lógica)**: Criar hooks `useNavigation` (Swipe + Teclado) e `useFullscreen`. Commitar.
- [ ] **Passo 4 (⛔ INTERVENÇÃO HUMANA)**: Parar o loop. Pedir ao Diretor de Produto as 10 URLs das imagens.
- [ ] **Passo 5 (Dados)**: Criar `src/data/slides.js` com array de 10 slides usando as URLs fornecidas. Commitar.
- [ ] **Passo 6 (Renderização Visual)**: Construir layout final com `MockupFrame` responsivo. Commitar.

## Paleta de Design
| Token | Valor |
|---|---|
| Background | `white` / `slate-900` |
| Accent | `blue-600` |
| Texto | `slate-800` / `slate-100` |
| Fonte | Inter (Google Fonts) |
