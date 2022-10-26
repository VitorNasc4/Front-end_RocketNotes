import { Container, Links, Content } from "./styles"
import { Header } from "../../components/Header"
import { Buttons } from "../../components/Buttons"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tags"
import { ButtonText } from "../../components/ButtonText"


export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
        <ButtonText title="Excluir nota" />

        <h1>Introdução ao React</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque labore suscipit, hic ea dignissimos fugiat eum ducimus, commodi amet voluptates natus aliquam aliquid impedit beatae ipsum. Accusamus, debitis molestias.</p>
      
        <Section title="Links úteis">
          <Links>
          <li>
            <a href="#">www.rocketseat.com.br</a>
          </li>
          <li>
            <a href="#">www.rocketseat.com.br</a>
          </li>
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tag title="express" />
          <Tag title="node" />
        </Section>

        <Buttons title="Voltar" loading />
        </Content>
      </main>

    </Container>
  )
}