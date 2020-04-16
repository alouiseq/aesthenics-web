import React from 'react';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';
// import styled from 'styled-components';

import ButtonLink from '../../components/ButtonLink/ButtonLink';
import CustomWorkout from '../../components/CurrentWorkout';

const { Sider } = Layout;

const siderStyle = {
  backgroundColor: '#CCC',
  textAlign: 'center',
} as any;

const buttonLinkStyle = {
  fontWeight: 'bold',
} as any;

const marginStyle = {
  marginTop: '25px',
  marginBottom: '30px',
}

const renderExercisesDrawer = () => (
  <div style={marginStyle}>
    <ButtonLink path="/workouts" label="Go to Workouts" style={buttonLinkStyle} />
  </div>
);

const renderWorkoutDrawer = () => (
  <>
    <div style={marginStyle}>
      <ButtonLink path="/home" label="Go to Exercises" style={buttonLinkStyle} />
    </div>
    <CustomWorkout />
  </>
);

const Drawer = () => {
  const location = useLocation();

  return (
    <Sider collapsible style={siderStyle}>
      { location.pathname === '/home' ? renderExercisesDrawer() : renderWorkoutDrawer() }
    </Sider>
  );
};

export default Drawer;