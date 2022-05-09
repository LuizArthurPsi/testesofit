import React from 'react';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';

import { Container, Form, Header, Title, Fields } from './styles';

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Valor" />
          <Input placeholder="Informações adicionais" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
