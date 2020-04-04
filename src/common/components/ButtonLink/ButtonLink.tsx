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
  const ButtonLink = styled(Button)`
    margin-top: 25px;
    color: #000;
  `;

  return (
    <ButtonLink style={style}>
      <Link to={path}>{label}</Link>
    </ButtonLink>
  );
};