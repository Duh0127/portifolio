import type { ComponentType, SVGProps } from 'react'

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from '../../components/SocialIcons'

type IconType = ComponentType<SVGProps<SVGSVGElement>>

export type SocialLink = {
  label: string
  href: string
  Icon: IconType
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Duh0127', Icon: GithubIcon },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eduardo-okubo',
    Icon: LinkedinIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/eokubo.dev',
    Icon: InstagramIcon,
  },
]

export const heroSummary = [
  {
    label: 'Foco principal',
    value: 'Backend-first. Arquitetura, integrações, dados e entrega com clareza.',
  },
  {
    label: 'Stack de base',
    value: 'NodeJs, NestJs, SQL, NoSQL, Python, Docker, DevOps e LLMs.',
  },
  {
    label: 'Camada visual',
    value: 'ReactJs e NextJs quando o produto também pede cuidado no front.',
  },
]

export const aboutAreas = [
  {
    title: 'Arquitetura de backend',
    text: 'APIs, serviços, organização de domínio e integrações pensadas para durar mais do que uma sprint.',
  },
  {
    title: 'Dados e modelagem',
    text: 'SQL e NoSQL entram conforme o contexto pede, sempre com atenção à clareza, leitura e evolução.',
  },
  {
    title: 'Entrega e operacao',
    text: 'Docker, DevOps e boas práticas para reduzir atrito entre desenvolvimento, deploy e manutenção.',
  },
]

export const stackGroups = [
  {
    index: '01',
    name: 'Interface',
    description:
      'Uso ReactJs e NextJs quando a experiência precisa acompanhar o mesmo rigor aplicado ao backend.',
    technologies: ['ReactJs', 'NextJs'],
  },
  {
    index: '02',
    name: 'Aplicação e serviços',
    description:
      'NodeJs e NestJs para estruturar APIs, regras de negócio, integrações e módulos com mais previsibilidade.',
    technologies: ['NodeJs', 'NestJs'],
  },
  {
    index: '03',
    name: 'Dados',
    description:
      'SQL e NoSQL entram com critério de modelagem, consulta e manutenção, sem empilhar tecnologia por moda.',
    technologies: ['SQL', 'NoSQL'],
  },
  {
    index: '04',
    name: 'IA e automação',
    description:
      'LLMs e Python para fluxos práticos, assistentes, automações internas e recursos que precisam de contexto.',
    technologies: ['LLMs', 'Python'],
  },
  {
    index: '05',
    name: 'Infra e entrega',
    description:
      'Docker e DevOps para ambientes repetíveis, deploys mais tranquilos e menos surpresa no caminho.',
    technologies: ['Docker', 'DevOps'],
  },
]

export const approachItems = [
  {
    number: '01',
    title: 'Trabalho em equipe sem ego',
    text: 'Gosto de trocar contexto cedo, revisar junto e deixar o caminho mais claro para quem está construindo comigo.',
  },
  {
    number: '02',
    title: 'Ajudo porque isso melhora o produto',
    text: 'Destravar outras pessoas faz parte do trabalho. Quando o time flui melhor, o código também melhora.',
  },
  {
    number: '03',
    title: 'Estudo contínuo, sem hype',
    text: 'Busco conhecimento para tomar decisões melhores, não para colecionar buzzwords ou encaixar moda em problema errado.',
  },
  {
    number: '04',
    title: 'Qualidade de código como base',
    text: 'SOLID, Clean Code, POO e boas práticas entram quando ajudam o sistema a ficar mais legível, seguro e evolutivo.',
  },
]
