import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Button } from "@components/Button";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton></Header>

      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Button title="Criar" />
      </Content>
    </Container>
  );
}
