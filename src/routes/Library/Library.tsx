import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import { ExerciseProps, ExercisesSet, ExercisesCard } from '../../components/Exercises/Exercises';
import mockData from '../../mock/data/exercises.json';
import mockGif from '../../mock/images/pistolSquat.gif';

const { Content } = Layout;

const Library = () => {
  const data = mockData.data.map((d: ExerciseProps) => {
    d.imageUrl = mockGif;
    return d;
  });
  
  return (
    <Layout>
      <Content style={{backgroundColor: '#000'}}>
        <ExercisesSet>
          {data.map(ex => (
            <ExercisesCard key={ex.id} {...ex} />
          ))}
        </ExercisesSet>
      </Content>
    </Layout>
  );
};

export default Library;