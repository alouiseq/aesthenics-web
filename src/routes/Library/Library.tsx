import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
// import styled from 'styled-components';

import { ExercisesSet, ExercisesCard } from '../../components/Exercises/Exercises';
import { getExercises } from './actions';

const { Content } = Layout;

const Library = ({ getExercises, exercises }: any) => {
  // const data = mockData.data.map((d: ExerciseProps) => {
  //   d.imageUrl = mockGif;
  //   return d;
  // });
  useEffect(() => {
    getExercises();
  }, [getExercises]);
  
  return (
    <Layout>
      <Content style={{backgroundColor: '#000'}}>
        <ExercisesSet>
          {exercises.map((ex: any) => (
            <ExercisesCard key={ex.id} {...ex} />
          ))}
        </ExercisesSet>
      </Content>
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  return {
    exercises: state.library.exercises,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getExercises: () => dispatch(getExercises()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);