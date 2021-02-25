/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { Form } from 'semantic-ui-react';
import { LabelForm, InputForm } from '../../styles/form';

interface Props {
  required: boolean;
  name: string;
  type: string;
  label: string;
  inputPlace: string;
  inputRef: any;
  error: any;
}

const FormField: React.FunctionComponent<Props> = ({
  required,
  name,
  type,
  label,
  inputPlace,
  inputRef,
  error,
}: Props) => {
  return (
    <Form.Field required={required}>
      <LabelForm htmlFor={name}>{label}</LabelForm>
      <InputForm
        name={name}
        type={type}
        placeholder={inputPlace}
        ref={inputRef}
      />
      {error && <p style={{ color: 'red' }}> {error} </p>}
    </Form.Field>
  );
};

export default FormField;
