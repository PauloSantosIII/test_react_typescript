import React from 'react';
import { Form } from 'semantic-ui-react';

interface Props {
  required: boolean;
  name: string;
  type: string;
  label: string;
  inputPlace: string;
  inputRef: any;
}

const FormField: React.FunctionComponent<Props> = ({
  required,
  name,
  type,
  label,
  inputPlace,
  inputRef,
}: Props) => {
  return (
    <Form.Field required={required}>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} placeholder={inputPlace} ref={inputRef} />
    </Form.Field>
  );
};

export default FormField;
