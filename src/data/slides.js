/**
 * slides.js — Estrutura de dados dos 10 slides da apresentação.
 * As URLs das imagens serão preenchidas no Passo 5 (após intervenção humana).
 *
 * Estrutura de cada slide:
 * {
 *   id: string,
 *   title: string,
 *   subtitle: string,
 *   body: string[],         // bullet points ou parágrafos
 *   highlight: string,      // número/stat de impacto
 *   highlightLabel: string,
 *   imageUrl: string | null,
 *   imageAlt: string,
 *   theme: 'light' | 'dark',
 *   icon: string,           // nome do ícone lucide
 * }
 */

import SlidePlaceholder from '../components/SlidePlaceholder.jsx'

const slides = [
  {
    id: 'capa',
    title: 'PKT Almoxarifado Digital',
    subtitle: 'Controle total do estoque, em qualquer obra.',
    body: [
      'Obras em Curitiba e São Paulo, um único painel.',
      'Da requisição à baixa: rastreado, auditado, sem furo.',
    ],
    highlight: '2 cidades',
    highlightLabel: '1 plataforma centralizada',
    imageUrl: null,
    imageAlt: 'Capa PKT Almoxarifado',
    theme: 'dark',
    icon: 'Package',
    component: SlidePlaceholder,
  },
  {
    id: 'caos',
    title: 'O Custo do Caos',
    subtitle: 'Sem controle, o estoque sangra dinheiro.',
    body: [
      'Materiais somem sem registro.',
      'Compras duplicadas por falta de visibilidade.',
      'Almoxarife de plantião vs. planião de obra: informação desatualizada.',
    ],
    highlight: 'R$ 0',
    highlightLabel: 'de visibilidade entre obras hoje',
    imageUrl: null,
    imageAlt: 'Problema atual: caos no estoque',
    theme: 'light',
    icon: 'AlertTriangle',
    component: SlidePlaceholder,
  },
  {
    id: 'app-home',
    title: 'Dashboard Central',
    subtitle: 'Visão 360º de todas as obras na palma da mão.',
    body: [
      'Saldo de cada item em tempo real por obra.',
      'Alertas automáticos de estoque mínimo.',
      'Acesso em mobile, tablet e desktop.',
    ],
    highlight: '100%',
    highlightLabel: 'online e offline-first',
    imageUrl: null,
    imageAlt: 'App Home — Dashboard',
    theme: 'light',
    icon: 'LayoutDashboard',
    component: SlidePlaceholder,
  },
  {
    id: 'produtos',
    title: 'Catálogo de Produtos',
    subtitle: 'Todos os materiais cadastrados, pesquisáveis e rastreados.',
    body: [
      'Código, descrição, unidade e localização física.',
      'Leitura de código de barras e QR Code.',
      'Validade e lote para materiais sensíveis.',
    ],
    highlight: '1 scan',
    highlightLabel: 'para entrada ou saída de qualquer item',
    imageUrl: null,
    imageAlt: 'Tela de Produtos',
    theme: 'light',
    icon: 'Package',
    component: SlidePlaceholder,
  },
  {
    id: 'historico',
    title: 'Histórico de Movimentações',
    subtitle: 'Rastreabilidade completa: quem, quando, o quê.',
    body: [
      'Toda entrada e saída registrada com usuário e hora.',
      'Filtros por obra, período e responsável.',
      'Exportação para Excel e PDF em 1 clique.',
    ],
    highlight: '0 furos',
    highlightLabel: 'sem rastreabilidade',
    imageUrl: null,
    imageAlt: 'Histórico de movimentações',
    theme: 'light',
    icon: 'History',
    component: SlidePlaceholder,
  },
  {
    id: 'seguranca',
    title: 'Acesso com Segurança',
    subtitle: 'Cada colaborador vê apenas o que precisa.',
    body: [
      'Perfis: Administrador, Almoxarife, Engenheiro, Viewer.',
      'Log de auditoria imutável.',
      'Autenticação por senha + 2FA opcional.',
    ],
    highlight: '4 perfis',
    highlightLabel: 'de acesso configuráveis',
    imageUrl: null,
    imageAlt: 'Tela de segurança e perfis',
    theme: 'dark',
    icon: 'Shield',
    component: SlidePlaceholder,
  },
  {
    id: 'dashboard',
    title: 'Analytics em Tempo Real',
    subtitle: 'Indicadores que antecipam problemas.',
    body: [
      'Gráficos de consumo por obra e período.',
      'Top materiais críticos (abaixo do mínimo).',
      'Comparação entre obras: Curitiba vs. São Paulo.',
    ],
    highlight: '-40%',
    highlightLabel: 'de compras emergenciais (meta)',
    imageUrl: null,
    imageAlt: 'Dashboard Analytics',
    theme: 'light',
    icon: 'BarChart3',
    component: SlidePlaceholder,
  },
  {
    id: 'multi-obras',
    title: 'Multi-Obras Centralizado',
    subtitle: 'Curitiba e São Paulo: um só sistema.',
    body: [
      'Transferência de materiais entre obras com aprovação.',
      'Estoque consolidado da empresa + estoque por obra.',
      'Escalável para novas obras sem custo adicional de TI.',
    ],
    highlight: 'N obras',
    highlightLabel: 'suportadas na mesma conta',
    imageUrl: null,
    imageAlt: 'Painel multi-obras',
    theme: 'light',
    icon: 'MapPin',
    component: SlidePlaceholder,
  },
  {
    id: 'roi',
    title: 'Retorno sobre Investimento',
    subtitle: 'O almoxarifado que se paga sozinho.',
    body: [
      'Redução de perdas: estimativa de 3-8% do custo de materiais.',
      'Menos horas do engenheiro em ligações de controle.',
      'Negociação melhor com fornecedores (dados de consumo real).',
    ],
    highlight: '< 3 meses',
    highlightLabel: 'para recuperar o investimento',
    imageUrl: null,
    imageAlt: 'Gráfico de ROI',
    theme: 'dark',
    icon: 'TrendingUp',
    component: SlidePlaceholder,
  },
  {
    id: 'lancamento',
    title: 'Próximos Passos',
    subtitle: 'Implantação guiada, sem parar sua obra.',
    body: [
      'Semana 1: Cadastro de obras + usuários + materiais.',
      'Semana 2: Treinamento presencial com almoxarifes.',
      'Semana 3: Operação supervisionada com suporte direto.',
    ],
    highlight: '21 dias',
    highlightLabel: 'para implantação completa',
    imageUrl: null,
    imageAlt: 'Plano de lançamento',
    theme: 'dark',
    icon: 'Rocket',
    component: SlidePlaceholder,
  },
]

export default slides
