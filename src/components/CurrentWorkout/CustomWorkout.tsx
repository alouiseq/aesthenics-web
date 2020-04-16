import React from 'react';
import { Button, Form, Select } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

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

export default ({
  onHandlePicker,
  onHandleDateChange,
  onHandleSubmit,
  onHandleSubmitFailed,
  techniques,
  schedule,
  move,
}: any) => {

  return (
    <>
      <Form onFinish={onHandleSubmit} onFinishFailed={onHandleSubmitFailed}>
        <Form.Item>
          <div>Week:</div>
          <CaretLeftOutlined onClick={onHandleDateChange('before')} />
          <Button>Week {schedule&& schedule.week}</Button>
          <CaretRightOutlined onClick={onHandleDateChange('after')} />
        </Form.Item>
        <Form.Item>
          <div>Technique:</div>
          <Select
            showSearch
            style={{ width: '80%' }}
            placeholder="Select a technique"
            optionFilterProp="children"
            value={move && move.key}
            // onChange={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // onSearch={onSearch
            filterOption={(input: string, option: any) => 
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {techniques.map((move: any) => (
              <Option value={move.key} key={move.key}>{move.value}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button onClick={onHandlePicker}>Pick for me</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </>
  );
};
