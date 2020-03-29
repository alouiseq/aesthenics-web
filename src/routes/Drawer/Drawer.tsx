import React from 'react';
import { Button, Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const { Sider } = Layout;

const siderStyle = {
  backgroundColor: '#CCC',
  textAlign: 'center',
} as any;

const buttonStyle = {
  marginTop: '25px',
  color: '#000',
};

const renderExercisesDrawer = () => (
  <Button style={buttonStyle}>
    <Link to="/workouts">Go to Workouts</Link>
  </Button>
)

const renderWorkoutDrawer = () => (
  <Button style={buttonStyle}>
    <Link to="/home">Go to Exercises</Link>
  </Button>
)

const Drawer = () => {
  const location = useLocation();

  return (
    <Sider collapsible style={siderStyle}>
      { location.pathname === '/home' ? renderExercisesDrawer() : renderWorkoutDrawer() }
    </Sider>
  );
};

export default Drawer;