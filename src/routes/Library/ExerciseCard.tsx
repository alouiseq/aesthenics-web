import React, { useState } from 'react';
// import styled from 'styled-components';
import { Button, Card, Modal } from 'antd';

import { aggregateList } from '../../common/utils/utils';

export type ExerciseProps = {
  id: string,
  name: string,
  level: string,
  imageUrl?: string,
  target?: Array<string>,
  active?: boolean,
};

const cardTitleStyle = {
  fontSize: '10px',
  textAlign: 'left',
} as any;

const cardStyle = {
  width: '170px',
  // height: '150px',
  marginRight: '20px',
  marginBottom: '20px',
  textAlign: 'center',
} as any;

const activeCardStyle = {
  backgroundColor: '#1f671f',
  color: '#fff',
}

const cardExtraStyle = {
  color: '#1f671f',
  fontSize: '10px',
  border: '1px solid #1f671f',

} as any;

const imageContainerStyle = {
  textAlign: 'center',
} as any;

const imageStyle = {
  width: '80%',
  marginTop: '10px',
} as any;

const nameStyle = {
  fontWeight: 'bold',
} as any;

const targetStyle = {
  marginTop: '10px',
  fontSize: '10px',
  fontStyle: 'italic',
} as any;

export default ({name, level, imageUrl, target, active}: ExerciseProps) => {
  const [visible, setVisible] = useState(false);

  const handleShowModal = () => setVisible(true);
  const handleHideModal = () => setVisible(false);

  const title = <div style={{ ...cardTitleStyle, color: active ? '#fff' : 'inherit' }}>{level}</div>;
  const extra = <Button size="small" style={cardExtraStyle} onClick={handleShowModal}>More</Button>;

  const mergedCardStyle = active ? { ...cardStyle, ...activeCardStyle } : { ...cardStyle };
  return (
    <>
      <Card title={title} extra={imageUrl && extra} style={mergedCardStyle}>
        <div style={nameStyle}>{name}</div>
        {target && <div style={targetStyle}>{aggregateList(target)}</div>}
      </Card>
      <Modal visible={visible} onCancel={handleHideModal} footer={[
        <Button key="close" onClick={handleHideModal}>Close</Button>
      ]}>
        <div>{name}</div>
        {target && <div>{`body target: ${aggregateList(target)}`}</div>}
        <div style={imageContainerStyle}>
          <img src={imageUrl} alt="sample.gif" style={imageStyle} />
        </div>
      </Modal>
    </>
  )
};
