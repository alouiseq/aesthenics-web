import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
// import styled from 'styled-components';

import ExerciseCard from './ExerciseCard';
import { getExercises, IExerciseProps } from '../../common/config/actions/exercise';

const { Content } = Layout;

const titleStyle = {
  color: '#FFF',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: '25px',
  margin: '25px 0 40px',
} as any;

const exercisesStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  marginLeft: '200px',
  marginRight: 'auto',
  flexWrap: 'wrap',
  width: '80%',
} as any;

const Library = ({ getExercises, exercises }: IExerciseProps) => {
  useEffect(() => {
    getExercises();
  }, [getExercises]);
  
  return (
    <Layout>
      <Content style={{backgroundColor: '#000'}}>
        <header style={titleStyle}>Exercises Library</header>
        <section style={exercisesStyle}>
          {exercises.map((ex: any) => (
              <ExerciseCard key={ex.id} {...ex} />
            ))}
          </section>
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
