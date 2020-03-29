import React from 'react';
import { Button, Layout } from 'antd';
import styled from 'styled-components';

import { ExerciseProps, ExercisesSet, ExercisesCard } from '../../components/Exercises/Exercises';
import mockData from '../../mock/data/exercises.json';
import mockGif from '../../mock/images/pistolSquat.gif';

const { Sider, Content } = Layout;

const layoutStyle = {
  minHeight: '100vh',
} as any;

const siderStyle = {
  backgroundColor: '#CCC',
  textAlign: 'center',
} as any;

const buttonStyle = {
  marginTop: '25px',
  color: '#000',
};

const Home = () => {
  const data = mockData.data.map((d: ExerciseProps) => {
    d.imageUrl = mockGif;
    d.target = ['bicep', 'shoulder'];
    return d;
  });
  
  return (
    <>
      <Layout style={layoutStyle}>
        <Sider collapsible style={siderStyle}>
          <Button style={buttonStyle}>Go to Workouts</Button>
        </Sider>
        <Layout>
          <Content style={{backgroundColor: '#000'}}>
            <ExercisesSet>
              {data.map(ex => (
                <ExercisesCard key={ex.id} {...ex} />
              ))}
            </ExercisesSet>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;