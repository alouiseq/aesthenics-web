import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default ({ label, path }) => {
  const ButtonLink = styled(Button)`
    margin-top: 25px;
    color: #000;
  `;

  return (
    <ButtonLink>
      <Link to={path}>{label}</Link>
    </ButtonLink>
  );
};