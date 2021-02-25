import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { requestUserInfo } from '../../redux/actions/session';

import { Container } from '../../styles/container';
import { ButtonForm, LinkForm } from '../../styles/form';
import FormField from '../form';

interface IFormInputs {
  email: string;
  password: string | number;
  values: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInputs>();
  const dispatch = useDispatch();
  const [requestError, setRequestError] = useState('');
  const history = useHistory();
  const onSubmit: any = (values: IFormInputs) => {
    axios
      .post('https://capstone-q2.herokuapp.com/login', values)
      .then(({ data }) => {
        dispatch(requestUserInfo(data.accessToken));
        localStorage.setItem('token', data.accessToken);
        history.push('/');
      })
      .catch(({ response }) => {
        if (response?.status === 400) {
          return setRequestError('E-Mail ou Senha incorretos.');
        }
        return setRequestError('Ops, aconteceu algo de errado!');
      });
  };

  return (
    <Container>
      <h1>Olá, seja bem-vindo!</h1>
      <p>Para acessar a plataforma, faça seu login.</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          required
          name="email"
          type="email"
          label="E-Mail"
          inputPlace="Digite seu E-Mail"
          inputRef={register({
            required: 'E-mail é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Isso não se parece com um e-mail!',
            },
          })}
        />
        <FormField
          required
          name="password"
          type="password"
          label="Senha"
          inputPlace="Digite sua Senha"
          inputRef={register({
            required: 'Senha Necessária',
            minLength: {
              value: 6,
              message: 'Senha muito curta!',
            },
          })}
        />
        <ButtonForm type="submit">Fazer Login</ButtonForm>
      </Form>
      <LinkForm to="/register">
        <h3> Não possui conta? Registrar-se </h3>
      </LinkForm>
    </Container>
  );
};

export default Login;
