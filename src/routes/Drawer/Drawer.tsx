import React from 'react';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import ButtonLink from '../../common/components/ButtonLink/ButtonLink';
import CustomWorkout from '../../components/CustomWorkout/CustomWorkout';

const { Sider } = Layout;

const siderStyle = {
  backgroundColor: '#CCC',
  textAlign: 'center',
} as any;

const renderExercisesDrawer = () => (
  <ButtonLink path="/workouts" label="Go to Workouts" />
);

const renderWorkoutDrawer = () => (
  <>
    <ButtonLink path="/home" label="Go to Exercises" />
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