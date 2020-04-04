import React, { useState } from 'react';
import { Button, Form, Select } from 'antd';

import techniques from '../../mock/data/techniques.json';

const { Option } = Select;

interface IMoveProps {
  id: number,
  key: string,
  value: string,
};

// import ButtonLink from '../../common/components/ButtonLink/ButtonLink';

export default () => {
  const [selectedMove, setMove] = useState<IMoveProps | undefined>(undefined);

  // TODO: data should come from API
  const moves = techniques.data;

  const handlePicker = () => {
    // TODO: this logic should go to utils
    const len = moves.length;
    const newMove = moves[Math.round(Math.random()*len)];
    setMove(newMove);
  };

  return (
    <>
      <Form>
        <Form.Item>
          <div>Week:</div>
          <Button>Week 1</Button>
        </Form.Item>
        <Form.Item>
          <div>Technique:</div>
          <Select
            showSearch
            style={{ width: 200 }}
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
