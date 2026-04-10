import {
  AboutBodyColumn,
  AboutIntro,
  AboutLayout,
  AboutNote,
  AboutParagraph,
  AboutTextBlock,
  Section,
  SectionInner,
} from '../../styles'
import { reveal } from '../../utils/motion'
import SectionIntro from '../shared/SectionIntro'
import AboutAreas from './components/AboutAreasList'

type AboutSectionProps = {
  reducedMotion: boolean
}

export default function AboutSection({
  reducedMotion,
}: AboutSectionProps) {
  return (
    <Section id="sobre">
      <SectionInner>
        <AboutLayout>
          <AboutIntro>
            <SectionIntro
              eyebrow="Perfil"
              title="Full stack no escopo. Backend no centro das decisões."
              description="Prefiro pensar na estrutura do produto antes do efeito visual. Meu trabalho costuma ficar onde integração, regra de negócio, modelagem e manutenção precisam conversar direito."
              reducedMotion={reducedMotion}
            />
          </AboutIntro>

          <AboutBodyColumn>
            <AboutTextBlock {...reveal(reducedMotion, 0.06)}>
              <AboutParagraph>
                Não tento vender uma imagem de designer disfarçado de
                desenvolvedor. O que me interessa é construir software
                confiável, com arquitetura clara e um nível de acabamento que
                respeite quem vai usar e quem vai manter o projeto.
              </AboutParagraph>

              <AboutParagraph>
                Por isso, meu foco técnico está em backend. APIs, integrações,
                dados, organização de serviços e qualidade de código são o lugar
                onde costumo gerar mais valor. O lado full stack entra para
                completar a entrega quando a interface também precisa do mesmo
                cuidado estrutural.
              </AboutParagraph>
            </AboutTextBlock>

            <AboutNote {...reveal(reducedMotion, 0.1)}>
              Gosto de times em que documentar decisões, nomear bem, refatorar
              com critério e explicar o raciocínio faz parte do trabalho. Isso
              deixa o produto mais sustentável e melhora a experiência de todo
              mundo no processo.
            </AboutNote>

            <AboutAreas reducedMotion={reducedMotion} />
          </AboutBodyColumn>
        </AboutLayout>
      </SectionInner>
    </Section>
  )
}
