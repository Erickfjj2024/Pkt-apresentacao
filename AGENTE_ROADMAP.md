# AGENTE_ROADMAP.md — Memória do Agente Autônomo

## Contexto do Produto
- **SaaS Corporativo (PKT Engenharia)**: Acabar com furos de estoque em obras.
- **UI/UX**: Corporativo — Branco, Slate-900, Blue-600.
- **Responsividade**: Mobile 1 coluna → Desktop 2 colunas.
- **Interações**: Swipe touch, Fullscreen API nativa, setas de teclado.
- **Foco de conteúdo**: Controle de estoque atual + escala centralizada Curitiba ↔ São Paulo.

## Fila de Execução do Agente

- [x] **AGENTE_ROADMAP.md** criado
- [x] **Passo 1 (Setup)**: `package.json`, configs Vite/Tailwind/PostCSS e `index.html`. ✅
- [x] **Passo 2 (Core App)**: `App.jsx`, `NavButtons`, `ProgressBar`, `MockupFrame`. ✅
- [x] **Passo 3 (Lógica)**: `useNavigation` (swipe+teclado) e `useFullscreen`. ✅
- [x] **Passo 4 (⛔ INTERVENÇÃO HUMANA)**: URLs recebidas. ✅
- [x] **Passo 5 (Dados)**: `slides.js` com 10 slides + URLs reais injetadas. ✅
- [ ] **Passo 6 (Renderização Visual)**: SlideLayout, SlideROI, SlideNetwork — em execução...

## URLs Confirmadas
| # | Slide | URL |
|---|---|---|
| 1 | Capa | https://i.ibb.co/DHPJpxxt/20260327-164536.jpg |
| 2 | Caos | https://i.ibb.co/WNhGwNmy/20260327-164634.jpg |
| 3 | App Home | https://i.ibb.co/fdz2ydwj/Screenshot-20260327-164720-Chrome.jpg |
| 4 | Produtos | https://i.ibb.co/JRxMSZj4/Screenshot-20260327-164756-Chrome.jpg |
| 5 | Histórico | https://i.ibb.co/WNfmNvvM/Screenshot-20260327-164926-Chrome.jpg |
| 6 | Segurança | https://i.ibb.co/93nKjmcV/Screenshot-20260327-164949-Chrome.jpg |
| 7 | Dashboard | https://i.ibb.co/fdz2ydwj/Screenshot-20260327-164720-Chrome.jpg |
| 8 | Futuro | https://i.ibb.co/pr5rGdjZ/Screenshot-20260327-165015-Chrome.jpg |
| 9 | ROI | *componente customizado (gráfico Tailwind)* |
| 10 | Rede | *componente customizado (diagrama SVG animado)* |
