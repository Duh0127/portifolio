export type ProjectEntry = {
  name: string
  category: string
  repoUrl: string
  officialDescription: string
  summary: string
  significance: string
  highlights: string[]
  stack: string[]
  concepts: string[]
}

export const projects: ProjectEntry[] = [
  {
    name: 'TaskTrack',
    category: 'NestJS API',
    repoUrl: 'https://github.com/Duh0127/TaskTrack',
    officialDescription:
      'API básica de gerenciamento de tarefas com autenticação de usuários em NestJS.',
    summary:
      'Um projeto criado para consolidar fundamentos de backend com NestJS: organização por módulos, autenticação com JWT, persistência com Prisma e uma estrutura clara para evoluir o CRUD de tarefas.',
    significance:
      'Para mim, ele representa um treino direto de arquitetura backend. É o tipo de projeto em que dá para exercitar separação de responsabilidades, regras básicas de domínio e uma base de código que continua legível conforme cresce.',
    highlights: [
      'Cadastro e login com hash de senha via bcrypt e emissão de token JWT.',
      'CRUD de tarefas com operações de marcar e desmarcar, além do vínculo entre usuário e tarefa.',
      'Modelagem com Prisma + SQLite, migrations e validações de fluxo no service layer.',
    ],
    stack: ['TypeScript', 'NestJS', 'Prisma', 'SQLite', 'JWT', 'Bcrypt'],
    concepts: [
      'CRUD',
      'DTOs',
      'Guards',
      'Modularização',
      'Autenticação',
      'Relacionamentos',
    ],
  },
  {
    name: 'TalkAI',
    category: 'Full Stack AI Chat',
    repoUrl: 'https://github.com/Duh0127/TalkAI',
    officialDescription: 'Projeto chatbot com IA.',
    summary:
      'Uma aplicação full stack de chat com IA que vai além de um prompt simples: mantém conversas, faz streaming de resposta, aceita anexos como PDF, TXT e imagens, e organiza a experiência como um produto real.',
    significance:
      'Esse projeto mostra um recorte mais completo do meu trabalho: backend para orquestrar streaming, uploads e persistência, e frontend para dar forma a uma interface de chat utilizável, com histórico, edição e exportação.',
    highlights: [
      'Streaming em tempo real com OpenAI Responses API e eventos de chat no frontend.',
      'Upload e processamento de arquivos e imagens para enriquecer o contexto enviado ao modelo.',
      'Histórico de conversas com renomear, editar mensagens, limpar conversa e exportar em PDF.',
    ],
    stack: [
      'TypeScript',
      'React',
      'Express',
      'OpenAI API',
      'MySQL',
      'Sequelize',
      'Styled Components',
      'Vite',
    ],
    concepts: [
      'Streaming SSE',
      'Multimodal',
      'Upload de arquivos',
      'Histórico de conversas',
      'Exportação PDF',
      'Rate Limit',
      'Soft Delete',
    ],
  },
]
