import React from 'react';
import { action } from '@storybook/addon-actions';

import WeeklySchedule from './WeeklySchedule';

export default {
  title: 'Weekly Schedule',
  component: WeeklySchedule,
};

const mockData = [
  {
    "id": "1",
    "week": 1,
    "workouts": [],
  },
  {
    "id": "2",
    "week": 2,
    "workouts": [],
  },
];

const setActiveSchedules = () => mockData.map(d => d.id);

export const EmptySchedule = () => <WeeklySchedule data={[]} />;

export const Schedule = () => <WeeklySchedule data={mockData} active={setActiveSchedules()} />;
