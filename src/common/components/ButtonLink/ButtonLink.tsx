import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IButtonLinkProps {
  label: string,
  path: string,
  style?: object,
}

export default ({ label, path, style }: IButtonLinkProps) => {
  // TODO: this might need style
  const ButtonLink = styled(Button)``;

  return (
    <ButtonLink style={style}>
      <Link to={path}>{label}</Link>
    </ButtonLink>
  );
};