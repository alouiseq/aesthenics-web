import React from 'react';
import { action } from '@storybook/addon-actions';

import WeeklySchedule from './WeeklySchedule';

export default {
  title: 'Weekly Schedule',
  component: WeeklySchedule,
};

const mockData = [
  {
    "id": "1111",
    "week": 1,
    "workouts": [
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
          },
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
          },
          {
            "id": "1235",
            "value": "Handstand wall pushups",
            "reps": "10 reps",
            "duration": "40s"
          },
          {
            "id": "1236",
            "value": "Wall walks",
            "reps": "10 reps",
            "duration": "40s"
          },
        ],
      },
    ],
  },
  {
    "id": "1112",
    "week": 2,
    "workouts": [
      {
        "id": "013",
        "type": "abs",
        "label": "Abs",
        "exercises": []
      }
    ]
  },
  {
    "id": "1113",
    "week": 3,
    "move": "abs",
    "workouts": []
  },
];

const setActiveAll = () => mockData.map(d => d.id);
const setActiveOne = () => [mockData[0].id];

export const EmptyAllSchedule = () => <WeeklySchedule data={[]} />;

export const CollapsedSchedule = () => <WeeklySchedule data={mockData} />;

export const ExpandOneSchedule = () => <WeeklySchedule data={mockData} activeKeys={setActiveOne()} />;

export const ExpandAllSchedule = () => <WeeklySchedule data={mockData} activeKeys={setActiveAll()} />;
