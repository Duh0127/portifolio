import {
  ApproachBody,
  ApproachIntro,
  ApproachLayout,
  ApproachLead,
  ApproachNote,
  Section,
  SectionEyebrow,
  SectionInner,
} from '../../styles'
import { reveal } from '../../utils/motion'
import ApproachItemsList from './components/ApproachItemsList'

type SoftSkillsSectionProps = {
  reducedMotion: boolean
}

export default function SoftSkillsSection({
  reducedMotion,
}: SoftSkillsSectionProps) {
  return (
    <Section id="soft-skills">
      <SectionInner>
        <ApproachLayout>
          <ApproachIntro {...reveal(reducedMotion)}>
            <SectionEyebrow>Soft Skills</SectionEyebrow>
            <ApproachLead>
              Prefiro ambientes em que código é tratado como parte do produto,
              não como detalhe invisível da entrega.
            </ApproachLead>
            <ApproachBody>
              Trabalho bem em equipe, gosto de ajudar outras pessoas e tento
              construir contexto junto com a implementação. Isso vale tanto
              para a conversa técnica quanto para a forma como o sistema vai
              evoluir depois.
            </ApproachBody>
            <ApproachNote>
              Na prática, isso se traduz em aplicar SOLID, Clean Code, POO e
              boas práticas com critério. Não como checklist de vaidade, mas
              como ferramentas para deixar o código mais claro, previsível e
              sustentável.
            </ApproachNote>
          </ApproachIntro>

          <ApproachItemsList reducedMotion={reducedMotion} />
        </ApproachLayout>
      </SectionInner>
    </Section>
  )
}
