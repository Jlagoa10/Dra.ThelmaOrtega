import type { StaticImageData } from 'next/image'
import portrait from '@/assets/images/dra-thelma-ortega.webp'
import preparation from '@/assets/images/gallery/thelma-preparando-atendimento.png'
import office from '@/assets/images/gallery/consultorio.png'
import hospital from '@/assets/images/gallery/rotina-hospitalar.jpg'
import rest from '@/assets/images/gallery/tempo-de-repouso.jpg'
import surgeryCover from '@/assets/images/gallery/cirurgia-plastica.png'
import hospitalCover from '@/assets/images/gallery/acompanhamento-hospitalar.png'
import laserCover from '@/assets/images/gallery/laser-terapeutico.png'
import type { IconName } from '@/components/Icon'
import { whatsappUrl } from '@/lib/links'

export const profile = {
  paragraphs: [
    'Sou a Dra. Thelma Ortega, fisioterapeuta com atuação especializada no acompanhamento fisioterapêutico de pacientes no pós-operatório de cirurgias plásticas.',
    'Meu trabalho é voltado à avaliação e ao acompanhamento individualizado, respeitando as necessidades clínicas, as particularidades e as diferentes fases de recuperação de cada paciente.',
    'Por meio de uma abordagem baseada em avaliação criteriosa, conhecimento técnico e cuidado humanizado, busco favorecer uma recuperação segura, promover a funcionalidade, proporcionar conforto e contribuir para a qualidade de vida durante todo o processo pós-operatório.',
    'Cada paciente tem uma história, cada cirurgia exige cuidados específicos e cada recuperação merece um olhar atento e individualizado.',
    'Meu compromisso é oferecer um acompanhamento responsável, acolhedor e fundamentado em critérios clínicos, respeitando a evolução de cada paciente e trabalhando em conjunto com a equipe médica sempre que necessário.',
  ],
  pillars: ['Cuidado individualizado', 'Segurança', 'Funcionalidade', 'Qualidade de vida'],
}

type Specialty = {
  title: string
  kicker: string
  text: string
  icon: IconName
  link: { href: string; label: string; external?: boolean }
}

export const specialties: Specialty[] = [
  {
    title: 'Pós-operatório',
    kicker: 'Recuperação cirúrgica',
    text: 'Fisioterapia voltada ao acompanhamento da recuperação após procedimentos cirúrgicos, respeitando cada etapa do processo.',
    icon: 'scar',
    link: { href: '#pos-operatorio', label: 'Entender o processo' },
  },
  {
    title: 'Fisioterapia Oncológica com foco em Câncer de Mama',
    kicker: 'Durante e após o tratamento',
    text: 'Atendimento voltado às necessidades funcionais e ao cuidado da mulher durante e após cirurgia oncológica das mamas.',
    icon: 'ribbon',
    link: {
      href: whatsappUrl('Olá, Dra. Thelma! Gostaria de saber mais sobre a fisioterapia oncológica.'),
      label: 'Conversar pelo WhatsApp',
      external: true,
    },
  },
  {
    title: 'Fisioterapia na Recuperação Pós-Parto',
    kicker: 'Após o nascimento',
    text: 'Um olhar individualizado para as mudanças do corpo e as necessidades funcionais do período pós-parto.',
    icon: 'motherhood',
    link: {
      href: whatsappUrl('Olá, Dra. Thelma! Gostaria de saber mais sobre a fisioterapia no pós-parto.'),
      label: 'Conversar pelo WhatsApp',
      external: true,
    },
  },
]

export const postOp = {
  processes: [
    'Adaptação',
    'Cicatrização',
    'Inflamação',
    'Inchaço',
    'Reorganização dos tecidos',
    'Evolução funcional',
  ],
  stages: ['Cirurgia', 'Inflamação', 'Inchaço', 'Recuperação dos tecidos', 'Evolução funcional', 'Resultado'],
}

export const support: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Orientação',
    text: 'Informações claras sobre cada fase da recuperação e espaço para tirar suas dúvidas.',
    icon: 'compass',
  },
  {
    title: 'Acompanhamento',
    text: 'Presença próxima ao longo do processo, observando a evolução de cada etapa.',
    icon: 'together',
  },
  {
    title: 'Cuidado',
    text: 'Atenção às necessidades e aos limites do seu corpo em cada atendimento.',
    icon: 'heart',
  },
]

export const steps = [
  { title: 'Agendamento', text: 'Entre em contato pelo WhatsApp e encontre o melhor horário.' },
  { title: 'Avaliação', text: 'Entendimento individual das suas necessidades e do momento da recuperação.' },
  { title: 'Plano de cuidado', text: 'Definição da condução fisioterapêutica de acordo com cada caso.' },
  { title: 'Acompanhamento', text: 'Evolução acompanhada de forma individualizada ao longo do processo.' },
]

export type GalleryItem = {
  caption: string
  text?: string
  icon?: IconName
  videoUrl?: string
  poster?: StaticImageData
  image?: StaticImageData
  alt?: string
  position?: string
}

/** Vídeos locais em public/videos; capas e fotos em src/assets/images/gallery. */
export const gallery: GalleryItem[] = [
  {
    caption: 'Dra. Thelma Ortega no consultório',
    image: portrait,
    alt: 'Dra. Thelma Ortega de uniforme branco no consultório, com macas e plantas ao fundo',
    position: '50% 18%',
  },
  { caption: 'Rotina hospitalar', image: hospital, alt: 'Registro de profissionais em ambiente hospitalar' },
  { caption: 'Tempo médio de repouso', image: rest, alt: 'Infográfico sobre o tempo médio de repouso após diferentes procedimentos', text: 'Os períodos apresentados são referências gerais. Siga as orientações da equipe médica para o seu caso.' },
  { caption: 'Cirurgia plástica', videoUrl: '/videos/cirurgia-plastica.mp4', poster: surgeryCover },
  { caption: 'Acompanhamento hospitalar', videoUrl: '/videos/acompanhamento-hospitalar.mp4', poster: hospitalCover },
  { caption: 'Benefício do laser terapêutico', videoUrl: '/videos/laser-terapeutico.mp4', poster: laserCover },
]

export const environment: { main: GalleryItem; detail: GalleryItem } = {
  main: { caption: 'Dra. Thelma Ortega', image: preparation, alt: 'Thelma preparando uma toalha sobre a maca de atendimento', position: '50% 50%' },
  detail: { caption: 'Cuidado individualizado', image: office, alt: 'Ambiente de atendimento com maca, móveis de madeira e iluminação natural', position: '30% 65%' },
}

export const faq = [
  {
    question: 'Quando devo iniciar a fisioterapia após uma cirurgia?',
    answer:
      'Depende do procedimento realizado e da liberação da equipe médica responsável. Por isso, o início do acompanhamento é definido de forma individual, a partir da avaliação e das orientações recebidas após a cirurgia.',
  },
  {
    question: 'Para quais tipos de cirurgia existe acompanhamento?',
    answer:
      'O acompanhamento é voltado ao pós-operatório de cirurgias plásticas e cirurgia oncológica mamária. A indicação para cada caso é definida na avaliação, em conjunto com as orientações da equipe médica.',
  },
  {
    question: 'Como funciona a primeira avaliação?',
    answer:
      'A primeira avaliação é o momento de compreender em que estágio está a sua recuperação, identificar as suas necessidades e, a partir disso, definir a condução fisioterapêutica para o seu caso. É também um espaço para você tirar dúvidas.',
  },
  {
    question: 'Atende pós-parto?',
    answer:
      'Sim. O acompanhamento no pós-parto é individualizado e considera as mudanças do corpo e as necessidades funcionais de cada mulher nesse período.',
  },
  {
    question: 'O atendimento é em São Bernardo do Campo?',
    answer:
      'Sim. O atendimento acontece na Rua José Bonifacio, 598, no Centro de São Bernardo do Campo - SP. O mapa e o caminho estão na seção de localização.',
  },
]
