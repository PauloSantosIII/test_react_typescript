import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { requestUserInfo } from '../../redux/actions/session';

import { Container } from '../../styles/container';
import { Aside } from '../../styles/aside';
import { ButtonForm, ContainerForm, Error } from '../../styles/form';
import FormField from '../form';

interface IFormInputs {
  email: string;
  password: string | number;
  values: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IFormInputs>();
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
      <Aside />
      <ContainerForm>
        <h1>Olá, seja bem-vindo!</h1>
        <p>Para acessar a plataforma, faça seu login.</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            required
            name="e-mail"
            type="e-mail"
            label="E-Mail"
            inputPlace="user.name@mail.com"
            inputRef={register({
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Digite um e-mail válido;',
              },
            })}
            error={errors.email}
          />
          <FormField
            required
            name="password"
            type="password"
            label="Senha"
            inputPlace="*******"
            inputRef={register({
              required: 'Senha Necessária',
              minLength: {
                value: 6,
                message: 'Senha muito curta!',
              },
            })}
            error={errors.password}
          />
          <ButtonForm type="submit">ENTRAR</ButtonForm>
        </Form>
        <h6>
          Esqueceu seu login ou senha? <br />
          Clique <a href="/register">aqui</a>
        </h6>
        <Error>{requestError}</Error>
      </ContainerForm>
    </Container>
  );
};

export default Login;
