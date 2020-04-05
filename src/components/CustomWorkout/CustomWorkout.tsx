import React, { useState, useEffect } from 'react';
import { Button, Form, Select } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

import techniques from '../../mock/data/techniques.json';
import workoutSchedule from '../../mock/data/schedule.json';

const { Option } = Select;

interface IMoveProps {
  id: string,
  key: string,
  value: string,
};

interface IScheduleProps {
  id: string,
  week: number,
  workouts: object[],
}

// import ButtonLink from '../../common/components/ButtonLink/ButtonLink';

export default () => {
  const [selectedMove, setMove] = useState<IMoveProps | undefined>(undefined);
  const [currentSchedule, setSchedule] = useState<IScheduleProps | null>(null);

  // TODO: data should come from API
  const moves = techniques.data;
  const schedule = workoutSchedule.data;

  useEffect(() => {
    if (schedule) setSchedule(schedule[0]);
  }, [schedule]);

  const handlePicker = () => {
    // TODO: this logic should go to utils
    const len = moves.length;
    const newMove = moves[Math.round(Math.random()*len)];
    setMove(newMove);
  };

  const handleDateChange = (changed: string) => () => {
    const foundIndex = schedule.findIndex(sch => currentSchedule && sch.week === currentSchedule.week);
    if (changed === 'before' && schedule[foundIndex - 1]) {
      setSchedule(schedule[foundIndex - 1]);
    } else if (changed === 'after' && schedule[foundIndex + 1]) {
      setSchedule(schedule[foundIndex + 1]);
    }
  }

  const handleSubmit = () => {
    console.log('SUCCESS');
  }

  const handleSubmitFailed = () => {
    console.log('FAILED');
  }

  return (
    <>
      <Form onFinish={handleSubmit} onFinishFailed={handleSubmitFailed}>
        <Form.Item>
          <div>Week:</div>
          <CaretLeftOutlined onClick={handleDateChange('before')} />
          <Button>Week {currentSchedule&& currentSchedule.week}</Button>
          <CaretRightOutlined onClick={handleDateChange('after')} />
        </Form.Item>
        <Form.Item>
          <div>Technique:</div>
          <Select
            showSearch
            style={{ width: '80%' }}
            placeholder="Select a technique"
            optionFilterProp="children"
            value={selectedMove && selectedMove.key}
            // onChange={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // onSearch={onSearch
            filterOption={(input: string, option: any) => 
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {moves.map((move) => (
              <Option value={move.key} key={move.key}>{move.value}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button onClick={handlePicker}>Pick for me</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </>
  );
};
