import React from 'react';
import { action } from '@storybook/addon-actions';

import WorkoutSet from './WorkoutSet';

export default {
  title: 'Workout Set',
  component: WorkoutSet,
};

const mockData = [
  {
    "id": "014",
    "type": "upperBody",
    "label": "Upper Body",
    "exercises": [
      {
        "id": "1238",
        "value": "Regular Pushup",
        "reps": "10 reps",
        "duration": "40s"
      },
      {
        "id": "1240",
        "value": "Diamond Pushup",
        "reps": "10 reps",
        "duration": "40s"
      }
    ]
  },
  {
    "id": "019",
    "type": "handstand",
    "label": "Handstands",
    "exercises": [
      {
        "id": "1234",
        "value": "Freeform handstand",
        "reps": "10 reps",
        "duration": "40s"
      }
    ]
  }
];

export const EmptyAllWorkout = () => <WorkoutSet data={[]} />;

export const CollapsedWorkout = () => <WorkoutSet data={mockData} />;

export const ExpandAllWorkout = () => <WorkoutSet data={mockData} isActive={true} />;

export const ExpandNoneWorkout = () => <WorkoutSet data={mockData} isActive={false} />;
