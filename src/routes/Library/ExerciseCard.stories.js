import React from 'react';
import { action } from '@storybook/addon-actions';
import ExerciseCard from './ExerciseCard';
import mockGif from '../../mock/images/pistolSquat.gif';

export default {
  title: 'ExerciseCard',
  component: ExerciseCard,
  // excludeStories: /.*Data$/,
};

const cardDefaultData = {
  name: 'Belly Flop',
  level: 'Advanced',
};

const cardOptionalData = {
  imageUrl: mockGif,
  target: ['belly', 'face'],
};

// State 1: default non active
export const CardDefault = () => <ExerciseCard
  { ...cardDefaultData }
  { ...cardOptionalData }
/>;

// State 2: active card
export const ActiveCard = () => <ExerciseCard
  { ...cardDefaultData }
  { ...cardOptionalData }
  active={true}
/>;

// State 3: with no target body []
export const NoTargetCard = () => <ExerciseCard
  { ...cardDefaultData }
  imageUrl={mockGif}
/>;

// State 4: with no supporting GIF (more link)
export const NoGifCard = () => <ExerciseCard
  { ...cardDefaultData }
  target={['belly', 'face']}
/>;